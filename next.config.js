const runtimeCaching = require("next-pwa/cache");
const withTM = require('next-transpile-modules')(['tailwindcss']);
const withImages = require('next-images');
const withPWA = require('next-pwa')({
  dest: "public",
  sw: 'sw.js',
  register: true,
  skipWaiting: true,
  dynamicStartUrl: true,
  runtimeCaching,
  disable: process.env.NODE_ENV === 'development',
});

const isProduction = process.env.NODE_ENV === "production";
const crypto = require('crypto');
const nonceScriptSrc = crypto.randomBytes(16).toString('base64');
//const nonceStyleSrc = crypto.randomBytes(16).toString('base64');

const ContentSecurityPolicy = `
base-uri 'self';  
connect-src 'self' 'unsafe-inline' webpack://* *.gstatic.com *.googletagmanager.com *.tagmanager.google.com *.google-analytics.com https://*.analytics.google.com https://www.analytics.google.com https://analytics.google.com https://stats.g.doubleclick.net/g/collect https://www.google.com.br/ads/ga-audiences vitals.vercel-insights.com;
default-src 'none';
font-src 'self';
form-action 'self';  
frame-ancestors 'none';
frame-src 'none';
img-src 'self' data: blob: https: 'unsafe-inline' https://*.gstatic.com https://*.google.com https://*.googletagmanager.com https://www.googletagmanager.com/gtag/js https://*.tagmanager.google.com https://*.google-analytics.com https://*.google.com.br/ads/;  
manifest-src 'self';
object-src 'none';
script-src 'self' https: 'nonce-${nonceScriptSrc}' 'unsafe-inline' 'strict-dynamic' ${isProduction ? "" : "'unsafe-eval'"} https://aboutinsurances.vercel.app/* https://*.googletagmanager.com https://*.tagmanager.google.com https://*.google-analytics.com https://www.googletagmanager.com/gtag/js;
script-src-elem 'self' 'unsafe-inline' https://*.googletagmanager.com https://*.tagmanager.google.com https://*.google-analytics.com https://www.googletagmanager.com/gtag/js;
style-src 'self' 'unsafe-inline';
`;

const securityHeaders = [
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=3571000; includeSubDomains; preload'
  },
  {
    key: 'Content-Security-Policy',
    value: `${ContentSecurityPolicy.replace(/\n/g, '')}`
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), geolocation=(), microphone=()'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {// política de referência
    key: 'Referrer-Policy',
    value: 'same-origin'
  },
  {
    key: 'Access-Control-Allow-Origin',
    value: 'https://*.gstatic.com https://*.google.com https://*.googletagmanager.com https://*.tagmanager.google.com https://*.google-analytics.com https://www.googletagmanager.com/gtag/js https://analytics.google.com/g/collect https://www.google.com.br/ads/ga-audiences vitals.vercel-insights.com'
  },
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Set-Cookie',
    value: 'HttpOnly; Secure; SameSite=Strict',
  },
];

module.exports = withTM(
  withImages(
    withPWA({
      reactStrictMode: true,
      distDir: '.next',

      async headers() {
        return [
          {
            source: '/(.*)', // Aplicar em todas as rotas
            headers: securityHeaders,
          },
        ];
      },

      images: {
        formats: ['image/webp'],
        deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
        imageSizes: [16, 32, 48, 64, 96, 128, 256, 384, 512],
      },

      env: {
        nonceScriptSrc,
        //nonceStyleSrc,
      },

      typescript: {
        ignoreBuildErrors: true,
      },
      eslint: {
        ignoreDuringBuilds: true,
      },


      webpack: (config, { dev, isServer }) => {
        if (!dev && !isServer) {
          // Habilitar treeshaking para remover dependências não utilizadas
          config.optimization.concatenateModules = true;
          config.optimization.providedExports = true;
          config.optimization.usedExports = true;
          config.optimization.sideEffects = true;
        }

        return config;
      },





    })
  )
);

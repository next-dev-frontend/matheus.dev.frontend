if(!self.define){let e,s={};const c=(c,a)=>(c=new URL(c+".js",a).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(a,n)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let r={};const t=e=>c(e,i),f={module:{uri:i},exports:r,require:t};s[i]=Promise.all(a.map((e=>f[e]||t(e)))).then((e=>(n(...e),r)))}}define(["./workbox-07a7b4f2"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/1bfc9850-legacy.js",revision:"d5ca883a8df98f19d7056c3d76c079af"},{url:"/_next/475-legacy.js",revision:"e8dc3effed75f36c1465b1cd1505457d"},{url:"/_next/491-legacy.js",revision:"3dfe85323324d28db0a4708ee8c42a09"},{url:"/_next/545f34e4-legacy.js",revision:"205840729a7bc66b54d086475b296c5e"},{url:"/_next/63-legacy.js",revision:"2987322f7089613584e1c00f6cf0fd23"},{url:"/_next/a3ff1dbb-legacy.js",revision:"afd33101beec1abfede5b374be0bb3d6"},{url:"/_next/d0447323-legacy.js",revision:"1e7a46d58ad18bb78ef9e13139931008"},{url:"/_next/d0c16330-legacy.js",revision:"7689343c3f6005a1c01235409e750e8a"},{url:"/_next/d7eeaac4-legacy.js",revision:"cfb1fa9f400837d6355653655ec5fe81"},{url:"/_next/framework-legacy.js",revision:"17c2fb393c7146e770e7e9ef7a68572a"},{url:"/_next/main-modern.js",revision:"0c707c24567c87d5ddd322c2267bd77d"},{url:"/_next/pages/404-legacy.js",revision:"2e5c2b1b302b51ad29ea5b23cbdc357f"},{url:"/_next/pages/500-legacy.js",revision:"e1ee82e80269e275d92fbd87c9039f80"},{url:"/_next/pages/_app-legacy.js",revision:"427046ba162d3032ac4b35b0d653058c"},{url:"/_next/pages/_error-legacy.js",revision:"25af6e9504f70b722d74f6c054477eac"},{url:"/_next/pages/index-legacy.js",revision:"28fccfd336a8e99bc6bc086e51308053"},{url:"/_next/pages/offline-legacy.js",revision:"eaa9f80b1e8f18b24396bc5d6bc51f7c"},{url:"/_next/pages/policy-legacy.js",revision:"3201003023aaebdd684bd220a4420224"},{url:"/_next/pages/terms-legacy.js",revision:"0918d67747f9cdaf1b9e7961d6fefec5"},{url:"/_next/static/6240ofEA_1pNVrP2EQXxd/_buildManifest.js",revision:"cac67deba088286e9dd8d4ba5b12aaa7"},{url:"/_next/static/6240ofEA_1pNVrP2EQXxd/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/139.94c214eb202493e3.js",revision:"94c214eb202493e3"},{url:"/_next/static/chunks/161.b1fc09165bf21251.js",revision:"b1fc09165bf21251"},{url:"/_next/static/chunks/270.c4446296b59f5c83.js",revision:"c4446296b59f5c83"},{url:"/_next/static/chunks/295.66b2477199d22e4a.js",revision:"66b2477199d22e4a"},{url:"/_next/static/chunks/321.191d01073774f0b6.js",revision:"191d01073774f0b6"},{url:"/_next/static/chunks/577.4aa0ae01e8d07ebf.js",revision:"4aa0ae01e8d07ebf"},{url:"/_next/static/chunks/66.08505ada8658e317.js",revision:"08505ada8658e317"},{url:"/_next/static/chunks/830.a69b140d2b9ac7be.js",revision:"a69b140d2b9ac7be"},{url:"/_next/static/chunks/841.dbe705d2ab1efa9f.js",revision:"dbe705d2ab1efa9f"},{url:"/_next/static/chunks/919.84ad505152a36667.js",revision:"84ad505152a36667"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/css/97b75275f7ef4c7d.css",revision:"97b75275f7ef4c7d"},{url:"/_next/webpack-legacy.js",revision:"94f02e5912428e91a50be13dab1114e5"},{url:"/banners/bg-nextjs.webp",revision:"556799308e34f1ac5c871147fe353d5b"},{url:"/banners/bg2-nextjs.webp",revision:"5afc255e3534af8ca84c052731e3cb36"},{url:"/banners/lighthouse.webp",revision:"9fe48191b5a069a614dfb80093216a99"},{url:"/currículo.pdf",revision:"cf20700e7b8a8b336149273da3f1079e"},{url:"/effects/clickCvFx.mp3",revision:"6e21d3f4079280ef15c81148c38c3d08"},{url:"/effects/clickFx.mp3",revision:"3b45627df5812416a40087dbaded82c3"},{url:"/effects/fotoFx.mp3",revision:"332079316ee4e0c610ee73f12c2278dd"},{url:"/effects/hoverCvFx.mp3",revision:"4184d72686eed7d38b38dd65cc81c0f4"},{url:"/effects/hoverFx.mp3",revision:"fca7ec2e7524fc2ebe1a52fce22da493"},{url:"/effects/hoverFx2.mp3",revision:"b56e054e77904acfdee629a9c10d4d65"},{url:"/effects/linkFx.mp3",revision:"1288bc7d72346d7b9404dff2f483cc49"},{url:"/effects/loading7.mp3",revision:"899bb990876717353f66bc07d64d2786"},{url:"/effects/scrollFx.mp3",revision:"edc1f89744d34563f46841952cd2930e"},{url:"/effects/toogleFx.mp3",revision:"3c49fa98a8117e8f6d52ddba478910d0"},{url:"/effects/whatsFx.mp3",revision:"46f7a472b621ccef5488c250b41e6f83"},{url:"/effects/whatsFx2.mp3",revision:"952bca959046c8b7677f8587586d8f62"},{url:"/effects/whatsFx3.mp3",revision:"542e8bdb091c9cb2bffbd553433edffb"},{url:"/favicon.ico",revision:"580cc0d0a4099d7e77a648e10f909ef7"},{url:"/images/foto1.webp",revision:"3f12d27146ccb5788eaf1a102d3248c3"},{url:"/images/foto2.webp",revision:"b3068df024dff050260466f2f64dbb51"},{url:"/images/foto3.webp",revision:"586ee51219c4e58841584f071152776a"},{url:"/logos/logo-144x144.png",revision:"86a97cb58c3203cae7a9d939f5488063"},{url:"/logos/logo-192x192.png",revision:"de458d7f7c18492721c470e75efc385f"},{url:"/logos/logo-36x36.png",revision:"7d238c768e2df3d8d9b40e9b9f0b469f"},{url:"/logos/logo-48x48.png",revision:"fc6f8bdb8d4efd390c9b7835ab6f0d08"},{url:"/logos/logo-512x512.png",revision:"502fbc6d7124f41b756305e3db9cceb7"},{url:"/logos/logo-72x72.png",revision:"4abc1ddd0de6c838568f770158e0c827"},{url:"/logos/logo-96x96.png",revision:"c780ed427f9bb4cfddf5f380fca4d048"},{url:"/logos/maskable.png",revision:"502fbc6d7124f41b756305e3db9cceb7"},{url:"/manifest.json",revision:"605b7135397b8ea962717a4968577f65"},{url:"/robots.txt",revision:"71746eca8a48eda3409c82cb3402d033"},{url:"/sitemap.xml",revision:"523fc67e4ac7ee21fa2ddc687eed005c"},{url:"/sounds/sound3.mp3",revision:"012b77ef78fcd406d1bf2e42073cf54e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:a})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

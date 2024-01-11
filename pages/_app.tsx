//import '../styles/tailwind.css'
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from "react";
import { AppProps } from 'next/app';
import Head from 'next/head';
import LoadingSpinner from '../components/LoadingSpinner';
import NextNProgress from 'nextjs-progressbar';
import dynamic from 'next/dynamic'
const ScrollToTop = dynamic(() => import('../components/ScrollToTop'))
const BgIconsEffect = dynamic(() => import('../components/BgIconsEffect'));

export default function MyApp({ Component, pageProps }: AppProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simule um tempo de carregamento (pode ser removido no ambiente de produção)
    const loadingTimeout = setTimeout(() => {
      setLoading(false);
    }, 500);

    return () => {
      clearTimeout(loadingTimeout);
    };
  }, []);


  // registrar service-worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker
          .register('/sw.js')
          .then((registration) => {
            console.log('Service worker registered:', registration);
          })
          .catch((error) => {
            console.log('Service worker registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" type="image/png" href="/favicon.ico" />
        <link rel="icon" href="/logos/logo-144x144.png" />
      </Head>
      <NextNProgress color="#142039" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      {loading && <LoadingSpinner />}
      <ScrollToTop />
      <BgIconsEffect />
      <Component {...pageProps} />
    </>
  );
};


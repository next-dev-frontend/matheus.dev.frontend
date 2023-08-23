//import '../styles/tailwind.css'
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React, { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import Loading from '../components/Loading';
const Analytics = dynamic(() => import('../components/Analytics'));

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    // Após o carregamento inicial, definimos o estado de carregamento como falso
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" type="image/png" href="/favicon.ico" />
        <link rel="icon" href="/logos/logo-144x144.png" />
      </Head>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Component {...pageProps} />
          <Analytics />
        </>
      )}
    </>
  );
};

export default MyApp;
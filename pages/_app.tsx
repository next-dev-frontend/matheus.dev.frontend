//import '../styles/tailwind.css'
import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import React, { useEffect } from "react";
import { AppProps } from 'next/app';
import Head from 'next/head';
import NextNProgress from 'nextjs-progressbar';
import dynamic from 'next/dynamic'
const ScrollToTop = dynamic(() => import('../components/ScrollToTop'))
const BgIconsEffect = dynamic(() => import('../components/BgIconsEffect'));

export default function MyApp({ Component, pageProps }: AppProps) {

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
        <meta name="google-site-verification" content="-nZJYt2hcYSXRU8rULzcBmhMNz640meQppM1287V2BE" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#8b5cf6" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="robots" content="index,follow" />
      </Head>
      <NextNProgress color="#2563eb" startPosition={0.3} stopDelayMs={200} height={3} showOnShallow={true} />
      <ScrollToTop />
      <BgIconsEffect />
      <Component {...pageProps} />
    </>
  );
};


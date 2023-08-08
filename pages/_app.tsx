import '../styles/tailwind.css'
import React, { useEffect } from 'react';
import { AppProps } from 'next/app'
import Head from 'next/head';
import dynamic from 'next/dynamic'
const NavBar = dynamic(() => import('../components/Navbar'))
const SideBar = dynamic(() => import('../components/SideBar'), { loading: () => <p>Loading SideBar...</p>, })
const BgParallax = dynamic(() => import('../components/BgParallax'), { loading: () => <p>Loading BgParallax2...</p>, })
const PostCards = dynamic(() => import('../components/PostCards'), { loading: () => <p>Loading PostCards...</p>, })
const Footer = dynamic(() => import('../components/Footer'), { loading: () => <p>Loading Footer...</p>, })
const Analytics = dynamic(() => import('../components/Analytics'))

const MyApp = ({ Component, pageProps }: AppProps) => {

  //registrar service-worker
  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
          .then(registration => {
            console.log('Service worker registered:', registration);
          })
          .catch(error => {
            console.log('Service worker registration failed:', error);
          });
      });
    }
  }, []);

  return (
    <>
      <Head>
        <link rel="manifest" href='/manifest.json' />
        <link rel="apple-touch-icon" type="image/png" href='/favicon.ico' />
        <link rel="icon" href='/logos/logo-144x144.png' />
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <PostCards />
      <BgParallax />
      <SideBar />
      <Footer />
      <Analytics />
    </>
  )
}
export default MyApp
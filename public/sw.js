if(!self.define){let e,s={};const c=(c,n)=>(c=new URL(c+".js",n).href,s[c]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=c,e.onload=s,document.head.appendChild(e)}else e=c,importScripts(c),s()})).then((()=>{let e=s[c];if(!e)throw new Error(`Module ${c} didn’t register its module`);return e})));self.define=(n,a)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let t={};const r=e=>c(e,i),f={module:{uri:i},exports:t,require:r};s[i]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(a(...e),t)))}}define(["./workbox-7c2a5a06"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/139.0f53607db0797274.js",revision:"0f53607db0797274"},{url:"/_next/static/chunks/161.203774287e1e17c6.js",revision:"203774287e1e17c6"},{url:"/_next/static/chunks/1bfc9850-81eef716f1d2bc50.js",revision:"81eef716f1d2bc50"},{url:"/_next/static/chunks/235.4a63b57e5409a702.js",revision:"4a63b57e5409a702"},{url:"/_next/static/chunks/249.84d1a3fa9f3db97d.js",revision:"84d1a3fa9f3db97d"},{url:"/_next/static/chunks/295.6b197a953173abb5.js",revision:"6b197a953173abb5"},{url:"/_next/static/chunks/321.6abee88d4e715203.js",revision:"6abee88d4e715203"},{url:"/_next/static/chunks/513-199ca2d28307e2aa.js",revision:"199ca2d28307e2aa"},{url:"/_next/static/chunks/545f34e4-dc2a7f7d9a09d88c.js",revision:"dc2a7f7d9a09d88c"},{url:"/_next/static/chunks/66.9286f3c46dfd39d9.js",revision:"9286f3c46dfd39d9"},{url:"/_next/static/chunks/664-37800d06f0938607.js",revision:"37800d06f0938607"},{url:"/_next/static/chunks/698.6343bfd066c936de.js",revision:"6343bfd066c936de"},{url:"/_next/static/chunks/755-539fa50c9a182fb9.js",revision:"539fa50c9a182fb9"},{url:"/_next/static/chunks/841.82b6d4220c4a86ef.js",revision:"82b6d4220c4a86ef"},{url:"/_next/static/chunks/962.319c6c7c18e0dcff.js",revision:"319c6c7c18e0dcff"},{url:"/_next/static/chunks/a3ff1dbb-9424c7b931f42178.js",revision:"9424c7b931f42178"},{url:"/_next/static/chunks/d0447323-2aa305a4e496a615.js",revision:"2aa305a4e496a615"},{url:"/_next/static/chunks/d0c16330-4bc1d8640786c2b6.js",revision:"4bc1d8640786c2b6"},{url:"/_next/static/chunks/d7eeaac4-682223b2d703c153.js",revision:"682223b2d703c153"},{url:"/_next/static/chunks/framework-305cb810cde7afac.js",revision:"305cb810cde7afac"},{url:"/_next/static/chunks/main-4c8b3e762f824f21.js",revision:"4c8b3e762f824f21"},{url:"/_next/static/chunks/pages/404-d70f76419c651cda.js",revision:"d70f76419c651cda"},{url:"/_next/static/chunks/pages/500-dc5984851cc03a3a.js",revision:"dc5984851cc03a3a"},{url:"/_next/static/chunks/pages/_app-2ca2512dfe9ce869.js",revision:"2ca2512dfe9ce869"},{url:"/_next/static/chunks/pages/_error-2cc5c76b30a7946a.js",revision:"2cc5c76b30a7946a"},{url:"/_next/static/chunks/pages/index-87380c8df18d1efa.js",revision:"87380c8df18d1efa"},{url:"/_next/static/chunks/pages/offline-d96ee64581c02db8.js",revision:"d96ee64581c02db8"},{url:"/_next/static/chunks/pages/policy-880026b20dc445fe.js",revision:"880026b20dc445fe"},{url:"/_next/static/chunks/pages/terms-b17d5961531a94e2.js",revision:"b17d5961531a94e2"},{url:"/_next/static/chunks/polyfills-78c92fac7aa8fdd8.js",revision:"79330112775102f91e1010318bae2bd3"},{url:"/_next/static/chunks/webpack-ff5aaedd0e791704.js",revision:"ff5aaedd0e791704"},{url:"/_next/static/css/c949d30d9b9daa7a.css",revision:"c949d30d9b9daa7a"},{url:"/_next/static/v9ON6_rRVWhJUOIB_EBZe/_buildManifest.js",revision:"6f0d2268dbf3cccf1092b5228aef0929"},{url:"/_next/static/v9ON6_rRVWhJUOIB_EBZe/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/banners/bg-nextjs.webp",revision:"556799308e34f1ac5c871147fe353d5b"},{url:"/banners/bg2-nextjs.webp",revision:"5afc255e3534af8ca84c052731e3cb36"},{url:"/banners/lighthouse.webp",revision:"9fe48191b5a069a614dfb80093216a99"},{url:"/currículo.pdf",revision:"cf20700e7b8a8b336149273da3f1079e"},{url:"/effects/clickCvFx.mp3",revision:"6e21d3f4079280ef15c81148c38c3d08"},{url:"/effects/clickFx.mp3",revision:"3b45627df5812416a40087dbaded82c3"},{url:"/effects/fotoFx.mp3",revision:"332079316ee4e0c610ee73f12c2278dd"},{url:"/effects/hoverCvFx.mp3",revision:"4184d72686eed7d38b38dd65cc81c0f4"},{url:"/effects/hoverFx.mp3",revision:"fca7ec2e7524fc2ebe1a52fce22da493"},{url:"/effects/hoverFx2.mp3",revision:"b56e054e77904acfdee629a9c10d4d65"},{url:"/effects/linkFx.mp3",revision:"1288bc7d72346d7b9404dff2f483cc49"},{url:"/effects/loading7.mp3",revision:"899bb990876717353f66bc07d64d2786"},{url:"/effects/scrollFx.mp3",revision:"edc1f89744d34563f46841952cd2930e"},{url:"/effects/toogleFx.mp3",revision:"3c49fa98a8117e8f6d52ddba478910d0"},{url:"/effects/whatsFx.mp3",revision:"46f7a472b621ccef5488c250b41e6f83"},{url:"/effects/whatsFx2.mp3",revision:"952bca959046c8b7677f8587586d8f62"},{url:"/effects/whatsFx3.mp3",revision:"542e8bdb091c9cb2bffbd553433edffb"},{url:"/favicon.ico",revision:"580cc0d0a4099d7e77a648e10f909ef7"},{url:"/images/foto1.webp",revision:"3f12d27146ccb5788eaf1a102d3248c3"},{url:"/images/foto2.webp",revision:"b3068df024dff050260466f2f64dbb51"},{url:"/images/foto3.webp",revision:"586ee51219c4e58841584f071152776a"},{url:"/logos/logo-144x144.png",revision:"86a97cb58c3203cae7a9d939f5488063"},{url:"/logos/logo-192x192.png",revision:"de458d7f7c18492721c470e75efc385f"},{url:"/logos/logo-36x36.png",revision:"7d238c768e2df3d8d9b40e9b9f0b469f"},{url:"/logos/logo-48x48.png",revision:"fc6f8bdb8d4efd390c9b7835ab6f0d08"},{url:"/logos/logo-512x512.png",revision:"502fbc6d7124f41b756305e3db9cceb7"},{url:"/logos/logo-72x72.png",revision:"4abc1ddd0de6c838568f770158e0c827"},{url:"/logos/logo-96x96.png",revision:"c780ed427f9bb4cfddf5f380fca4d048"},{url:"/logos/maskable.png",revision:"502fbc6d7124f41b756305e3db9cceb7"},{url:"/manifest.json",revision:"7d9d98a32c07df724f48396aa978bf31"},{url:"/robots.txt",revision:"71746eca8a48eda3409c82cb3402d033"},{url:"/sitemap.xml",revision:"523fc67e4ac7ee21fa2ddc687eed005c"},{url:"/sounds/sound3.mp3",revision:"012b77ef78fcd406d1bf2e42073cf54e"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:c,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));

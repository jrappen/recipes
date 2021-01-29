/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a134968c264e5c140e26432121746382"
  },
  {
    "url": "assets/css/0.styles.aa3cbaef.css",
    "revision": "471ae3cedd8326936f38f94e895cfd9e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3262c407.js",
    "revision": "f44f0571cff4b397bfb8c1917950ac3d"
  },
  {
    "url": "assets/js/11.cd2db634.js",
    "revision": "7aa70ed65abf31aee14d138499d99468"
  },
  {
    "url": "assets/js/12.097da429.js",
    "revision": "c6a75617a30fd05cd06bb31801a3c390"
  },
  {
    "url": "assets/js/2.7383e662.js",
    "revision": "1e32b14a903db6f7ed99dedf1ea6e5a3"
  },
  {
    "url": "assets/js/3.ac28bc48.js",
    "revision": "d5747f5adf507b34280d42d4cf817ef2"
  },
  {
    "url": "assets/js/4.03d33699.js",
    "revision": "477eac977f5e15b0e562fe98d7302cd6"
  },
  {
    "url": "assets/js/5.23ea72f1.js",
    "revision": "193ee20a1bd02295a2113520c9bb19c8"
  },
  {
    "url": "assets/js/6.d973a402.js",
    "revision": "6b762bcabe2ec7ddd6b353a8f408e922"
  },
  {
    "url": "assets/js/7.515251c1.js",
    "revision": "495828c939ee14356c755be032fffb5c"
  },
  {
    "url": "assets/js/8.311328f2.js",
    "revision": "0a829064f139f9b9712984a2a501b1c5"
  },
  {
    "url": "assets/js/9.f2dec6b9.js",
    "revision": "bf016014f5d65478356919d3fb37aea6"
  },
  {
    "url": "assets/js/app.e0c8dafe.js",
    "revision": "49be4100a006dcf2f3a2de9350c026a5"
  },
  {
    "url": "category/dessert/index.html",
    "revision": "74b1144067c49c45d8257d15e8ebc5db"
  },
  {
    "url": "category/index.html",
    "revision": "e177a4137f0090f07135b1dfd61a3e41"
  },
  {
    "url": "category/main/index.html",
    "revision": "5494e5c5003b598db8439643d014eff8"
  },
  {
    "url": "category/soup/index.html",
    "revision": "f36a5760409d3cbbf39f80ad64a488ef"
  },
  {
    "url": "chili-con-carne/index.html",
    "revision": "1e54b1f3f2424b9d18e66526b8d6b251"
  },
  {
    "url": "cookies/index.html",
    "revision": "147b12d1bf164bed39b5873ab076c75e"
  },
  {
    "url": "elisenlebkuchen/index.html",
    "revision": "941280885367a0fa2cf2372f74ab25b5"
  },
  {
    "url": "favicons/android-chrome-192x192.png",
    "revision": "da178a4db15ca21654a986e75c5cfb2b"
  },
  {
    "url": "favicons/android-chrome-512x512.png",
    "revision": "988fe53416df5314e7412becb7d6ba82"
  },
  {
    "url": "favicons/apple-touch-icon-120x120.png",
    "revision": "688d6bee6e41df15b4910ca987f33fed"
  },
  {
    "url": "favicons/apple-touch-icon-152x152.png",
    "revision": "8ef7eef53ebbf2a679ebb52c488244ca"
  },
  {
    "url": "favicons/apple-touch-icon-180x180.png",
    "revision": "a35d35b9953b2bd271b41f288124311a"
  },
  {
    "url": "favicons/apple-touch-icon-60x60.png",
    "revision": "5197495dfb96ae1cb51aa44fd3dd26fe"
  },
  {
    "url": "favicons/apple-touch-icon-76x76.png",
    "revision": "5156fa6b736e79713401838305c41d46"
  },
  {
    "url": "favicons/apple-touch-icon.png",
    "revision": "a35d35b9953b2bd271b41f288124311a"
  },
  {
    "url": "favicons/favicon-16x16.png",
    "revision": "8cac4709a250874d2d71bd1edaefca80"
  },
  {
    "url": "favicons/favicon-32x32.png",
    "revision": "d0c1597d865f0d0b0346341b11016d71"
  },
  {
    "url": "favicons/msapplication-icon-144x144.png",
    "revision": "06f7c2a36c0a7674312277f51e47fade"
  },
  {
    "url": "favicons/mstile-150x150.png",
    "revision": "28c2b5f35949f1f77835ffacd7aec724"
  },
  {
    "url": "favicons/safari-pinned-tab.svg",
    "revision": "3b7e3f6842879597c0adea6edd21101c"
  },
  {
    "url": "index.html",
    "revision": "a4626db3ca6fbe56112b760d9bf33bcf"
  },
  {
    "url": "location/Baden-Baden, Germany/index.html",
    "revision": "5a92ca446327f65e9f0d1aff3e2fa5cb"
  },
  {
    "url": "location/Düsseldorf, Germany/index.html",
    "revision": "65b160b863ca989ca1574879b8f04af8"
  },
  {
    "url": "location/index.html",
    "revision": "d72822c3eee7027a17f3cbb3dce1dac0"
  },
  {
    "url": "logo.png",
    "revision": "758188cbbc98a3a2523f0b6ba100821f"
  },
  {
    "url": "page/2/index.html",
    "revision": "b79f79ba2ab8387518d0d44299ac27fa"
  },
  {
    "url": "red-pepper-ginger-soup/index.html",
    "revision": "2348cbd4952c7e61567fea53e57c1a91"
  },
  {
    "url": "tag/cookies/index.html",
    "revision": "7f811414c3288233b47d8936227bb5c3"
  },
  {
    "url": "tag/halal/index.html",
    "revision": "c0d7ef4e97fecc6110f9651680e7586a"
  },
  {
    "url": "tag/index.html",
    "revision": "cde454d10cf7f55c59877658a752a47e"
  },
  {
    "url": "tag/vegan/index.html",
    "revision": "e947cac444efbc5551ff98733c052bb6"
  },
  {
    "url": "tag/vegetarian/index.html",
    "revision": "69f856efed470ed64acbc376fb372aa6"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

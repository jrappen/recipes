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
    "url": "2021/01/23/chili-con-carne/index.html",
    "revision": "e0bf55c9a81e0f5a72f0613013d22b88"
  },
  {
    "url": "2021/01/23/cookies/index.html",
    "revision": "6c0aa127115e7f8e96ef25e65b76f2ab"
  },
  {
    "url": "2021/01/23/red-pepper-ginger-soup/index.html",
    "revision": "ecb28e1a2500977ce5e293e46251e9e3"
  },
  {
    "url": "404.html",
    "revision": "54f1a6c5723c760432db612440f93512"
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
    "url": "assets/js/11.80377e35.js",
    "revision": "f30d4ccd8434e72527c74679a53d1690"
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
    "url": "assets/js/4.2e062dc8.js",
    "revision": "8f6427e56561fad9f14946783aa83cce"
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
    "url": "assets/js/app.341a6f94.js",
    "revision": "51372545641396b814cbb39c5cf779ec"
  },
  {
    "url": "category/dessert/index.html",
    "revision": "181cd0074dc8b3270a5ba18fef21ab1f"
  },
  {
    "url": "category/index.html",
    "revision": "febe6a9d846592ee63e55e72f9f3949e"
  },
  {
    "url": "category/main/index.html",
    "revision": "9428137e6eb262c06f44dc69c77b8c47"
  },
  {
    "url": "category/side/index.html",
    "revision": "8b30715823ba9841627291dea8af3b85"
  },
  {
    "url": "category/soup/index.html",
    "revision": "1e60d0b3310438fbbf516f1168334854"
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
    "revision": "3550d04eced02bbedf120c5bed22b040"
  },
  {
    "url": "location/Baden-Baden, Germany/index.html",
    "revision": "7b11c2f2abf470373a8042d73fbef2f8"
  },
  {
    "url": "location/Düsseldorf, Germany/index.html",
    "revision": "02861b6761604eaecb40faa6df8a7b21"
  },
  {
    "url": "location/index.html",
    "revision": "cc73677570fc3cac0278191acc9b5983"
  },
  {
    "url": "logo.png",
    "revision": "758188cbbc98a3a2523f0b6ba100821f"
  },
  {
    "url": "page/2/index.html",
    "revision": "4e40c7172477ed1d8064e841965658aa"
  },
  {
    "url": "tag/cookies/index.html",
    "revision": "124cec4b20c25dc639d0d5d5f7db2e2c"
  },
  {
    "url": "tag/halal/index.html",
    "revision": "ca3772de730d5cba191fc7d706f18173"
  },
  {
    "url": "tag/index.html",
    "revision": "0b5d79c58c903839b186d0aba3c1eaaa"
  },
  {
    "url": "tag/vegan/index.html",
    "revision": "9e551a7846253603f80db17228ee6900"
  },
  {
    "url": "tag/vegetarian/index.html",
    "revision": "c49d1ddb496deac6ab943d651973528c"
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

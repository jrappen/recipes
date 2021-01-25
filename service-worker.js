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
    "revision": "30b33db7d707f200c91c9d32f9b9f502"
  },
  {
    "url": "2021/01/23/cookies/index.html",
    "revision": "402ec828ccef53b077c990972a42ecdc"
  },
  {
    "url": "2021/01/23/red-pepper-ginger-soup/index.html",
    "revision": "2b0ab66df5a60d866bea6be157800cfb"
  },
  {
    "url": "404.html",
    "revision": "7248b3ee474861678ad2248c5e4f87ae"
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
    "url": "assets/js/app.f88675ca.js",
    "revision": "796f54a00e0c7863aa3f96179b7df610"
  },
  {
    "url": "category/dessert/index.html",
    "revision": "44f94a3ac7680a711e94073c490f59dc"
  },
  {
    "url": "category/index.html",
    "revision": "478514350e1c18d364d33b3c4d0b6413"
  },
  {
    "url": "category/main/index.html",
    "revision": "62b91040328c738d4cdea47a65877878"
  },
  {
    "url": "category/side/index.html",
    "revision": "2d7dd1582291d375616ba38ae4dd40b3"
  },
  {
    "url": "category/soup/index.html",
    "revision": "a4179b33554ed6b1f594dd11a4bf7687"
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
    "revision": "b682cda5d4014197c5a19df012d9f777"
  },
  {
    "url": "location/Baden-Baden, Germany/index.html",
    "revision": "76afa21fce6ba65441370f0531d3338b"
  },
  {
    "url": "location/Düsseldorf, Germany/index.html",
    "revision": "29c427620b5200f03b5e5db6e3b5a854"
  },
  {
    "url": "location/index.html",
    "revision": "0ca0f45204a1e1436b4c8191173c9272"
  },
  {
    "url": "logo.png",
    "revision": "758188cbbc98a3a2523f0b6ba100821f"
  },
  {
    "url": "page/2/index.html",
    "revision": "a1f2a03abbd2a205f4cd9848b96ca9bb"
  },
  {
    "url": "tag/cookies/index.html",
    "revision": "f8a2258fbc7b94ed5d1ec95e6b0c1479"
  },
  {
    "url": "tag/halal/index.html",
    "revision": "85bc00d97aac5a0333fe07e2d45a732c"
  },
  {
    "url": "tag/index.html",
    "revision": "7fec55a2dcf69565f21a5c391455f5c1"
  },
  {
    "url": "tag/vegan/index.html",
    "revision": "2fe933ed79c6438e3fdf9263c1dccd13"
  },
  {
    "url": "tag/vegetarian/index.html",
    "revision": "ff82ec211f39b44c81eb4bf3d9348274"
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

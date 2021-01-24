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
    "url": "2021/01/23/_20210123-chili-con-carne/index.html",
    "revision": "8977271db3a35ae31c47c89c86989196"
  },
  {
    "url": "2021/01/23/_20210123-cookies/index.html",
    "revision": "91279ea7b795ddaad468e8b42cdcfce1"
  },
  {
    "url": "2021/01/23/_20210123-red-pepper-ginger-soup/index.html",
    "revision": "68e06ec00021621ecbcda06afd7d473f"
  },
  {
    "url": "404.html",
    "revision": "1d7a2195280a28cfe74efe2b7aa522ff"
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
    "url": "assets/js/10.e4d52641.js",
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
    "url": "assets/js/8.584214fe.js",
    "revision": "0a829064f139f9b9712984a2a501b1c5"
  },
  {
    "url": "assets/js/9.96834bc8.js",
    "revision": "bf016014f5d65478356919d3fb37aea6"
  },
  {
    "url": "assets/js/app.fdbf3d80.js",
    "revision": "6f6de03fed3d9073f080a727e606e8d9"
  },
  {
    "url": "category/dessert/index.html",
    "revision": "31f41abcf2f63753977be4c09a7cce33"
  },
  {
    "url": "category/index.html",
    "revision": "bef6a0fdb01c9ce65a2c6b2c4536b0a6"
  },
  {
    "url": "category/main/index.html",
    "revision": "7b867825c3df9d35a4330e921e862393"
  },
  {
    "url": "category/side/index.html",
    "revision": "9a81474f7b8f4446bdd95294ac6b3427"
  },
  {
    "url": "category/soup/index.html",
    "revision": "f95181aed89bb370ef4957867c5ba7b5"
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
    "revision": "31045f45d131d4d933194cf9bd0f94d3"
  },
  {
    "url": "location/Baden-Baden, Germany/index.html",
    "revision": "43aa1ed2623ce513e1138b81753b3618"
  },
  {
    "url": "location/Düsseldorf, Germany/index.html",
    "revision": "bda17b42f626b4e6f53188444d474149"
  },
  {
    "url": "location/index.html",
    "revision": "fa60776e44bbac432480bda3aa1e3baf"
  },
  {
    "url": "logo.png",
    "revision": "758188cbbc98a3a2523f0b6ba100821f"
  },
  {
    "url": "page/2/index.html",
    "revision": "4b48ace852402c8f09d67c9a6cb4f302"
  },
  {
    "url": "tag/cookies/index.html",
    "revision": "d8a943f129e828b39d0ee0dfe78782f9"
  },
  {
    "url": "tag/halal/index.html",
    "revision": "1675ecd80c79551b7446c1eaa61753f1"
  },
  {
    "url": "tag/index.html",
    "revision": "1521d86e7dad5cd531af7fd2ccdfc46d"
  },
  {
    "url": "tag/vegan/index.html",
    "revision": "8f6d393c7518927abdfc9290b862ea21"
  },
  {
    "url": "tag/vegetarian/index.html",
    "revision": "950b9a1d62b1784cbe3aea518e628eb9"
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

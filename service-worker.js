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
    "revision": "44fc03277116ce6be9de6396f48b0790"
  },
  {
    "url": "2021/01/23/cookies/index.html",
    "revision": "33890cdf8e0630083d39d41658b7eca5"
  },
  {
    "url": "2021/01/23/red-pepper-ginger-soup/index.html",
    "revision": "baa843fda42186a493bc73063ae2c2c1"
  },
  {
    "url": "404.html",
    "revision": "8cc5a5857bac347eb803ba59626cb2cd"
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
    "url": "assets/js/app.86b11e13.js",
    "revision": "af5fb1257dff5d0ca7391fe3d329512f"
  },
  {
    "url": "category/dessert/index.html",
    "revision": "109e12d4621ffeca3be1f35502e4a342"
  },
  {
    "url": "category/index.html",
    "revision": "ba931dc50af0bddaa32020ceed1c1d28"
  },
  {
    "url": "category/main/index.html",
    "revision": "411ae95017a84cbd242bccfc1b7695af"
  },
  {
    "url": "category/side/index.html",
    "revision": "15cd478e0607bb0ba64c62dacbbe30bd"
  },
  {
    "url": "category/soup/index.html",
    "revision": "5b0b4a2a2a0e928cdecfb62ad5ed2efc"
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
    "revision": "19e4209289db2ce46bec73e28ff3e3d4"
  },
  {
    "url": "location/Baden-Baden, Germany/index.html",
    "revision": "836643511665fb410c6a075bab25e12b"
  },
  {
    "url": "location/Düsseldorf, Germany/index.html",
    "revision": "b0cba46e0e1ac0c55ab795b1035db767"
  },
  {
    "url": "location/index.html",
    "revision": "e95707886174f71b4a07b5b740e7328e"
  },
  {
    "url": "logo.png",
    "revision": "758188cbbc98a3a2523f0b6ba100821f"
  },
  {
    "url": "page/2/index.html",
    "revision": "ec1abf2d3992d10e40ef9eaefb07e087"
  },
  {
    "url": "tag/cookies/index.html",
    "revision": "be489ba9e5edb609654bb282c4215068"
  },
  {
    "url": "tag/halal/index.html",
    "revision": "c0e336ca9f7edfab01aa28c2537c28bf"
  },
  {
    "url": "tag/index.html",
    "revision": "8ee72a8d21e5ed043975a9d156d65cee"
  },
  {
    "url": "tag/vegan/index.html",
    "revision": "7c01f6969b4718fc9e9eb46a6531dd9b"
  },
  {
    "url": "tag/vegetarian/index.html",
    "revision": "063c83ed735263d5a067323592d35c09"
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

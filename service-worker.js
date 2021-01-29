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
    "revision": "5c8dfc4c77277f4a20e2e71e7150c11f"
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
    "url": "assets/js/app.42f68ba4.js",
    "revision": "af871c64670be88dbb2ab3f81692163b"
  },
  {
    "url": "category/dessert/index.html",
    "revision": "ac07c374209567d6b1de506318f31437"
  },
  {
    "url": "category/index.html",
    "revision": "ddb6184d57a9282c6c7a9895322af24a"
  },
  {
    "url": "category/main/index.html",
    "revision": "5eb81edfe7fe34c22f8ba47ccd23c91e"
  },
  {
    "url": "category/soup/index.html",
    "revision": "195e35fc014aad325df35367804e45a2"
  },
  {
    "url": "chili-con-carne/index.html",
    "revision": "a04d63b9b7a903e3d9b3b5b8b3a8d258"
  },
  {
    "url": "cookies/index.html",
    "revision": "7caef33a5fa6bc81bf68b925b33921a2"
  },
  {
    "url": "elisenlebkuchen/index.html",
    "revision": "e901d1e58378e3ac5f95a157f21f45d1"
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
    "revision": "ab5d5d47f8a79caf9a1192ca2cca982e"
  },
  {
    "url": "location/Baden-Baden, Germany/index.html",
    "revision": "7e6ada33a38242d46b0d2f3112765b85"
  },
  {
    "url": "location/Düsseldorf, Germany/index.html",
    "revision": "b3ca1dc97fbe57187249a0bf5618f2f6"
  },
  {
    "url": "location/index.html",
    "revision": "26d02cbac7a0d0b241ab6f0ea857192f"
  },
  {
    "url": "logo.png",
    "revision": "758188cbbc98a3a2523f0b6ba100821f"
  },
  {
    "url": "page/2/index.html",
    "revision": "972c8c916ea2cef2759cee148d9453e2"
  },
  {
    "url": "red-pepper-ginger-soup/index.html",
    "revision": "215980d13fb46e0f75f9df43aab224be"
  },
  {
    "url": "tag/cookies/index.html",
    "revision": "7db52f8593587980f223f1ca033398ca"
  },
  {
    "url": "tag/halal/index.html",
    "revision": "dfd748b2604935b6c6588b76c0711dd8"
  },
  {
    "url": "tag/index.html",
    "revision": "4c0a8e84c05b20e5cc8c26d9147be450"
  },
  {
    "url": "tag/vegan/index.html",
    "revision": "89d9acc55737bc663d11ab26feb547c7"
  },
  {
    "url": "tag/vegetarian/index.html",
    "revision": "5600553a596cf7f20965c05189016fa6"
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

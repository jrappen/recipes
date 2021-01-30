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
    "revision": "215a5dac4d3c5dc3a10642b92b25e165"
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
    "url": "assets/js/10.6b524374.js",
    "revision": "db3a1a5e4327b7256588766d979ecf38"
  },
  {
    "url": "assets/js/11.f2c526e2.js",
    "revision": "579c559a5d0ba5d030593932f8cd58ad"
  },
  {
    "url": "assets/js/12.7cbdd27a.js",
    "revision": "1590ccd42b2b75107f4e1fea96b9f830"
  },
  {
    "url": "assets/js/13.d512af1d.js",
    "revision": "73215568805daabae6b8ad6d6823b6e0"
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
    "url": "assets/js/4.8000bd54.js",
    "revision": "1af5226c1e38a242105e7c158c8da3dd"
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
    "url": "assets/js/8.4973ee69.js",
    "revision": "2d99e5ec8022653f725294ab5ccfa42c"
  },
  {
    "url": "assets/js/9.ee62f906.js",
    "revision": "47f16e9517cbce477d3695234d027021"
  },
  {
    "url": "assets/js/app.e743b297.js",
    "revision": "c2d0c0cd98b354a8a7baaaed505af66a"
  },
  {
    "url": "category/dessert/index.html",
    "revision": "caa74cb0be3eac1efbef7a963eabdacb"
  },
  {
    "url": "category/index.html",
    "revision": "ea5243bef58d2ac6e826677527cad296"
  },
  {
    "url": "category/main/index.html",
    "revision": "03c807e3d9eb5286c95b4f6d21683bb0"
  },
  {
    "url": "category/soup/index.html",
    "revision": "d24a2d3325b256218e9db7b76decb1cc"
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
    "revision": "6c9d4d79fe81e23689c0764455a88952"
  },
  {
    "url": "location/Baden-Baden, Germany/index.html",
    "revision": "f7fc665632b4be7451d9033d58277fea"
  },
  {
    "url": "location/Düsseldorf, Germany/index.html",
    "revision": "09a0aefd40c213b447872a9961b146be"
  },
  {
    "url": "location/index.html",
    "revision": "89cd73ef5f7fb2ff1f2cfd967686824e"
  },
  {
    "url": "logo.png",
    "revision": "758188cbbc98a3a2523f0b6ba100821f"
  },
  {
    "url": "post/2021/01/23/chili-con-carne/index.html",
    "revision": "01e089a2ca6b2fff7e9d0282019a9390"
  },
  {
    "url": "post/2021/01/23/cookies/index.html",
    "revision": "68f069187a0a73710f6c598811775dd5"
  },
  {
    "url": "post/2021/01/23/red-pepper-ginger-soup/index.html",
    "revision": "ab15adbbb4149622c7597249bf79d421"
  },
  {
    "url": "post/2021/01/26/elisenlebkuchen/index.html",
    "revision": "6b851e3fb54d002eaa668d7f26fcbab6"
  },
  {
    "url": "post/index.html",
    "revision": "17848f51df6bfe62f3a42cb88910166a"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "fb109d5a0917572ccbb7f62b66d3bf0c"
  },
  {
    "url": "tag/cookies/index.html",
    "revision": "29db099b9ebd99f6ffb41acc18e5d18e"
  },
  {
    "url": "tag/halal/index.html",
    "revision": "58498043142b6c0cc2f24c456ba676c1"
  },
  {
    "url": "tag/index.html",
    "revision": "79575bb54760193903b3080d87988834"
  },
  {
    "url": "tag/vegan/index.html",
    "revision": "ee8ff56460f43a15f5c5286d9fb3a1e0"
  },
  {
    "url": "tag/vegetarian/index.html",
    "revision": "25336a662083280364536170f21b7c06"
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

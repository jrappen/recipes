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
    "revision": "bb09363867b6b6dd738172ec32da02f1"
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
    "url": "assets/js/8.6713ebf7.js",
    "revision": "7421a71c596ba784236c062d2973dc3b"
  },
  {
    "url": "assets/js/9.ee62f906.js",
    "revision": "47f16e9517cbce477d3695234d027021"
  },
  {
    "url": "assets/js/app.ab495208.js",
    "revision": "0bd06f2d20fb4673b817ac723cfb3964"
  },
  {
    "url": "category/dessert/index.html",
    "revision": "5fd2aab2b2cfdfcfc2dabc85696fa34f"
  },
  {
    "url": "category/index.html",
    "revision": "ecd9a35d18786d28655f01699d59374a"
  },
  {
    "url": "category/main/index.html",
    "revision": "f9c878dcea0067c6bbaf9d93b4a3d2e2"
  },
  {
    "url": "category/soup/index.html",
    "revision": "fe3e1a39238db4c0b673e2b0c504655c"
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
    "revision": "3e7a807a87d3a5bd3a63b46033206400"
  },
  {
    "url": "location/Baden-Baden, Germany/index.html",
    "revision": "6e1d0cdcd80282a4e77d2d5c9381e338"
  },
  {
    "url": "location/Düsseldorf, Germany/index.html",
    "revision": "3635d4b78c4bd47e39e722f25dfd769f"
  },
  {
    "url": "location/index.html",
    "revision": "65cc0693c60ee04ee7f891e375490630"
  },
  {
    "url": "logo.png",
    "revision": "758188cbbc98a3a2523f0b6ba100821f"
  },
  {
    "url": "post/2021/01/23/chili-con-carne/index.html",
    "revision": "61c86ddffdf56495aca37cfe9f0d147e"
  },
  {
    "url": "post/2021/01/23/cookies/index.html",
    "revision": "e4403a9617d143399935a5a799ac526f"
  },
  {
    "url": "post/2021/01/23/red-pepper-ginger-soup/index.html",
    "revision": "e558d992af9527979a2da452e45b1708"
  },
  {
    "url": "post/2021/01/26/elisenlebkuchen/index.html",
    "revision": "41f69f1186c45d34fb027d1200ceb35a"
  },
  {
    "url": "post/index.html",
    "revision": "4eca4d2fae099d43cde73e43e231d0ab"
  },
  {
    "url": "post/page/2/index.html",
    "revision": "bb0387b7cadaaa833d3484498a8f42b3"
  },
  {
    "url": "tag/cookies/index.html",
    "revision": "c3065fce0884eb4749ead5ddeca4041d"
  },
  {
    "url": "tag/halal/index.html",
    "revision": "1f60b5602b70e553f52d9771c575eb6b"
  },
  {
    "url": "tag/index.html",
    "revision": "ce24373cae315b3db5ab396f6ed3917e"
  },
  {
    "url": "tag/vegan/index.html",
    "revision": "34bbec93e1664072a6f843c6b1d4b83e"
  },
  {
    "url": "tag/vegetarian/index.html",
    "revision": "a3aa77fbbdb5b15e7042aec7f3b83ae6"
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

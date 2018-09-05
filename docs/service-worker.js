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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.4.1/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "3dcb767d14a54291c13cc726865aefcb"
  },
  {
    "url": "assets/css/0.styles.6638e2a4.css",
    "revision": "fc2b2de0ec893ba97df346e21b1b88af"
  },
  {
    "url": "assets/js/2.ae771476.js",
    "revision": "c399bd60068db1c3e9cf29c75861ef0b"
  },
  {
    "url": "assets/js/3.2f8369bc.js",
    "revision": "3951e8609fb839eeba98cebb64c71ed7"
  },
  {
    "url": "assets/js/4.5424a28b.js",
    "revision": "a1f954d16855f9e3927a2e051bc79784"
  },
  {
    "url": "assets/js/5.0f1fbb36.js",
    "revision": "96e8db43bfc3e9e0d8fdc9d01bd0dcdc"
  },
  {
    "url": "assets/js/6.dd341ecf.js",
    "revision": "c644306c9948e85ce84e5d8b87a5a567"
  },
  {
    "url": "assets/js/7.d692a60f.js",
    "revision": "3a27b693429a7d1ef68902c2082ab886"
  },
  {
    "url": "assets/js/8.87180d0d.js",
    "revision": "75ebba67e89941fe7baaf8fbd55dbeff"
  },
  {
    "url": "assets/js/app.606c34af.js",
    "revision": "04b39dfc5b1b257ff9f316ec02e8ce7d"
  },
  {
    "url": "index.html",
    "revision": "536c9cc1a8b10f10ec735d50c535df5d"
  },
  {
    "url": "page1.html",
    "revision": "7fbaf00c2d83a8c5738b63d30f3d0676"
  },
  {
    "url": "page2.html",
    "revision": "e725fa18f1f24dcee6aa9ac5b7d7304d"
  },
  {
    "url": "page3.html",
    "revision": "5a6b20b5bde92b3943b3906dc0046813"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
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

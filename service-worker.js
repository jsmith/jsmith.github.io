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
    "revision": "b2146ebbbd2195fb35c2a9d259cb622b"
  },
  {
    "url": "assets/css/0.styles.9afc2b43.css",
    "revision": "a0d4fe9a73683f4563635fa809b3a307"
  },
  {
    "url": "assets/js/2.ae771476.js",
    "revision": "c399bd60068db1c3e9cf29c75861ef0b"
  },
  {
    "url": "assets/js/3.9851f985.js",
    "revision": "b12d24f3fd0d21debdd92da2a7b0973d"
  },
  {
    "url": "assets/js/4.42ec5e4f.js",
    "revision": "f8af2e66d22ddd4a2bb85691ca5602e0"
  },
  {
    "url": "assets/js/5.eebcaf46.js",
    "revision": "cb080cfc7975767e78dc3ff20dce58ff"
  },
  {
    "url": "assets/js/app.f9da20b8.js",
    "revision": "db50412083263fe1fa7dfa6ddfc36366"
  },
  {
    "url": "index.html",
    "revision": "47c3eba316e24300dfe78a20bb3c228b"
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

importScripts('/assets/workbox.42554690.js')

workbox.precaching.precacheAndRoute([], {
  "cacheId": "goodbye-nuxt-virgin",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/assets/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')






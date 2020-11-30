// Files to cache
const CACHE_NAME = 'countries_App-v1';
const contentToCache = ['/*'];

// Installing Service Worker
self.addEventListener('install', event => {
  event.waitUntil(async () => {
    // precache
    const cache = await caches.open(CACHE_NAME);
    // add resources to cache
    return cache.addAll(contentToCache);
  });
});

// Fetching content using Service Worker
self.addEventListener('fetch', function (event) {
  const { request } = event;

  // validate get method
  if (request.method !== 'GET') return;

  event.respondWith(async () => {
    // Get from caché
    let response = await caches.match(request);
    if (!response) {
      response = await fetch(request);

      // Update caché
      let cache = await caches.open(CACHE_NAME);
      cache.put(request, response.clone());
    }

    return response;
  });
});

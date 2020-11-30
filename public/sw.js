// Files to cache
const CACHE_NAME = 'countries_App-v1';
const contentToCache = ['/*'];

// Installing Service Worker
self.addEventListener('install', event => {
  event.waitUntil(precache());
});

async function precache() {
  // precache
  const cache = await caches.open(CACHE_NAME);
  // add resources to cache
  console.log('[SW]: Add resources to cache');
  return cache.addAll(contentToCache);
}

self.addEventListener('activate', e => {
  e.waitUntil(deleteUnusedCache());
});

async function deleteUnusedCache() {
  const keyList = await caches.keys();
  const Promises = keyList
    .filter(key => key === CACHE_NAME)
    .map(key => caches.delete(key));

  return Promise.all(Promises);
}

// Fetching content using Service Worker
self.addEventListener('fetch', function (event) {
  const { request } = event;

  // validate get method
  if (request.method !== 'GET') return;

  event.respondWith(cachedResponse(request));
});

async function cachedResponse(request) {
  console.log('[SW]: Get from cache');
  // Get from caché
  let response = await caches.match(request);
  if (!response) {
    response = await fetch(request);

    // Update caché
    console.log('[SW]: Update cache');
    let cache = await caches.open(CACHE_NAME);
    cache.put(request, response.clone());
  }

  return response;
}

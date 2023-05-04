const CACHE_NAME = 'v1';
const urlToCache = [
    'index.html',
    'offline.html',
    'img/offline/offline.webp',
];

// install
self.addEventListener('install', (event)=>{
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {return cache.addAll(urlToCache)})
    )
})

// require
self.addEventListener('fetch', (event)=>{
    event.respondWith(
        caches.match(event.request)
        .then(()=>{
            return fetch(event.request)
            .catch(()=>caches.match('offline.html'));
        })
    )
})

// active
self.addEventListener('activate', (event)=>{
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME);
    event.waitUntil(
        caches.keys().then(cacheNames => Promise.all(
            cacheNames.map((cacheName)=>{
                if(!cacheWhiteList.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))
    )
})
// Swish Lab offline support: app files are network-first, AI libraries and models cache-first.
const V = 'swishlab-v2', CDN = V + '-cdn';
const SHELL = ['./', 'index.html', 'manifest.webmanifest', 'icons/icon-192.png', 'icons/icon-512.png'];
self.addEventListener('install', e => { e.waitUntil(caches.open(V).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())); });
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== V && k !== CDN).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request; if(r.method !== 'GET') return;
  const u = new URL(r.url);
  if(u.origin === location.origin){
    e.respondWith(fetch(r).then(res => { const cp = res.clone(); caches.open(V).then(c => c.put(r, cp)); return res; })
      .catch(() => caches.match(r).then(m => m || caches.match('index.html'))));
    return;
  }
  if(/cdn\.jsdelivr\.net|tfhub\.dev|kaggle|storage\.googleapis\.com|fonts\.(googleapis|gstatic)\.com/.test(u.host)){
    e.respondWith(caches.match(r).then(m => m || fetch(r).then(res => {
      if(res.ok || res.type === 'opaque'){ const cp = res.clone(); caches.open(CDN).then(c => c.put(r, cp)); }
      return res;
    })));
  }
});

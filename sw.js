const CACHE_NAME = 'kiot-hub-v4';
const assets = [
  '/',
  'index.html',
  'manifest.json',
  'icon.png',
  'maths.pdf',
  'cpp.pdf',
  'english2.pdf',
  'history.pdf',
  'civics.pdf',
  'anthro.pdf',
  'emerging.pdf'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(c => c.addAll(assets)));
});

self.addEventListener('fetch', (e) => {
  e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
});

// Service Worker: アプリとして認識させるための最小限の構成
self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('fetch', (event) => {
  // ネットワーク優先のシンプルな設定
  event.respondWith(fetch(event.request));
});
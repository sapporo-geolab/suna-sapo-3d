// 1. Firebase SDK の読み込み
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// 2. Firebase の初期化（HTML側の config と同じ内容）
firebase.initializeApp({
    apiKey: "AIzaSyBwFxgKbcxT-PrH2lezAtqAQ5DNVX7Fk4o",
    projectId: "suna-sapo-3d",
    messagingSenderId: "618496872034",
    appId: "1:618496872034:web:050fef3a74fa2af0b88b3b",
});

const messaging = firebase.messaging();

// 3. バックグラウンド（アプリを閉じている時）の通知処理
messaging.onBackgroundMessage((payload) => {
    console.log('バックグラウンド通知を受信:', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
        body: payload.notification.body,
        icon: 'https://raw.githubusercontent.com/sapporo-geolab/sunahako-img/main/sunahako.png',
        badge: 'https://raw.githubusercontent.com/sapporo-geolab/sunahako-img/main/sunahako.png' // Android等のアイコン
    };

    self.registration.showNotification(notificationTitle, notificationOptions);
});

// --- 以下、既存のService Workerの処理 ---

self.addEventListener('install', (event) => {
  console.log('Service Worker installed with Messaging');
  self.skipWaiting(); // 新しいSWをすぐに有効化
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});

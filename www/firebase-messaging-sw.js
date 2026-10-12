importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyCSQ4VqPMn4DsqcQ_zLtQXLic43atcsvTU",
  authDomain: "alpha-radar-pro.firebaseapp.com",
  projectId: "alpha-radar-pro",
  storageBucket: "alpha-radar-pro.firebasestorage.app",
  messagingSenderId: "317967655919",
  appId: "1:317967655919:web:0a7117948f60109225cc1a",
  measurementId: "G-WXDM17NFG3"
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'icon.svg'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});


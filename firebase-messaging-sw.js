importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.22.0/firebase-messaging-compat.js');

firebase.initializeApp({
    apiKey: "AIzaSyAmqtdKfR8ZyMoYA2dBno5sGAtJbhmWJEc",
    authDomain: "modersekb.firebaseapp.com",
    projectId: "modersekb",
    databaseURL: "https://modersekb-default-rtdb.firebaseio.com",
    messagingSenderId: "302735757040"
});

const messaging = firebase.messaging();

// Слушатель для входящих уведомлений в фоне
messaging.onBackgroundMessage((payload) => {
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: 'https://sun9-31.userapi.com/s/v1/ig2/P-9DJRiXns1RThh5B9Yo6rXD6OQIXebFVwPMsJdmF2AwpdQKZKMisyqK9tAmWwfd9whUVN_wtCJfqC2NdNx4wnNs.jpg'
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
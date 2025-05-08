importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js"
);
importScripts(
  "https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyAfJE6Nsdl1xquw_Zc3GDSYwgmuXSjgI1g",
  authDomain: "lona-board.firebaseapp.com",
  projectId: "lona-board",
  storageBucket: "lona-board.firebasestorage.app",
  messagingSenderId: "1008226321278",
  appId: "1:1008226321278:web:a8e62e0c68c08ca12f292f",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: "/icon-192x192.png",
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

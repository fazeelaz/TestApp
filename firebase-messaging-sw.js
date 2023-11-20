importScripts("https://www.gstatic.com/firebasejs/9.19.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/9.19.1/firebase-messaging-compat.js");

   /*Update with yours config*/
  const firebaseConfig = {
    apiKey: "AIzaSyDsxvLzu3YTyB_0UKk84j-AfQPuKm0otjI",
    authDomain: "notification-app-43fdc.firebaseapp.com",
    projectId: "notification-app-43fdc",
    storageBucket: "notification-app-43fdc.appspot.com",
    messagingSenderId: "830144682821",
    appId: "1:830144682821:web:9b6d97d2d9e0ec02a7bc2c",
    measurementId: "G-3VZYZQHV0L"
  };
  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

  messaging.onMessage((payload) => {
  console.log('Message received. ', payload);
  messaging.onBackgroundMessage(function(payload) {
    console.log('Received background message ', payload);

    const notificationTitle = payload.notification.title;
    const notificationOptions = {
      body: payload.notification.body,
    };

    self.registration.showNotification(notificationTitle,
      notificationOptions);
  });
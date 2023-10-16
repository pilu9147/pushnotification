importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyA05othyMGER5JyhaXhcnrRz6pX_QzRJ2U",
    authDomain: "learnfirestore-9d67d.firebaseapp.com",
    projectId: "learnfirestore-9d67d",
    storageBucket: "learnfirestore-9d67d.appspot.com",
    messagingSenderId: "238600953115",
    appId: "1:238600953115:web:3856e994cf58ecabe787be",
    measurementId: "G-0RQSXKWTSY"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});

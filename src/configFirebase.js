import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getMessaging, getToken, onMessage } from 'firebase/messaging';


const firebaseConfig = {
    apiKey: "AIzaSyA05othyMGER5JyhaXhcnrRz6pX_QzRJ2U",
    authDomain: "learnfirestore-9d67d.firebaseapp.com",
    projectId: "learnfirestore-9d67d",
    storageBucket: "learnfirestore-9d67d.appspot.com",
    messagingSenderId: "238600953115",
    appId: "1:238600953115:web:3856e994cf58ecabe787be",
    measurementId: "G-0RQSXKWTSY"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
const messaging = getMessaging(app);


if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('../public/firebase-messaging-sw')
    .then((registration) => {
      messaging.useServiceWorker(registration);
    })
    .catch((error) => {
      console.error('Service Worker registration failed:', error);
    });
}

export const Sendrequest = () => {
    console.log("Requesting User Permission......");
    Notification.requestPermission().then((permission) => {
      if (permission === "granted") {
        console.log("Notification User Permission Granted.");
  
        return getToken(messaging, { vapidKey:'BPE_3KAIU-lpq6MwhJjBsk8zLgmzDhrQzZjXrDBzHIxTcKg1JN7c7tWDm3Ow83mo-Pz1SeSjP-X2Of7xUhSgOlo' })
          .then((currentToken) => {
            if (currentToken) {
              console.log('Client Token: ', currentToken);
              
            } else {
              
              console.log('Failed to generate the registration token.');
            }
          })
          .catch((err) => {
            console.log('An error occurred when requesting to receive the token.', err);
          });
      } else {
        console.log("User Permission Denied.");
      }
    });
  }
  Sendrequest();

 export const onMessageListener= ()=>
   new Promise(resolve =>{
    onMessage(messaging,payload =>{
        resolve(payload)
    })
   })
 


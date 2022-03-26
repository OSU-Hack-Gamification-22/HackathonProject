import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";


// ***** THIS NEEDS TO GET CHANGED BACK TO LOCAL *******
// Changed to actual api values because connection coud not be established.
const firebaseConfig = {
  apiKey: "AIzaSyAM5ekg1JwCaGh3jg7-BbPcjr9NwYPFaPs",
  authDomain: "foody-development.firebaseapp.com",
  databaseURL: "https://foody-development-default-rtdb.firebaseio.com",
  projectId: "foody-development",
  storageBucket: "foody-development.appspot.com",
  messagingSenderId: "556791166612",
  appId: "1:556791166612:web:67f3eb0092a75f11d9e681"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_MESSAGING_APP_ID,
// };
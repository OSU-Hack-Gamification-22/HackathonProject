import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"



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

export const auth = getAuth(app);
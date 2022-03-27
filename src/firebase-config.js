import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

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

const db = getFirestore(app)
const auth = getAuth(app);
export { db, auth }
const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
        const name = result.user.displayName
        const email = result.user.email
        const profilePic = result.user.photoURL

        localStorage.setItem("name", name)
        localStorage.setItem("email", email)
        localStorage.setItem("profilePic", profilePic)
    })
    .catch((error) => {
      console.log(error);
    });
};

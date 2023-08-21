import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB1AfU_fQWbdX_R-DllWKfKoZYphWoKDz0",
  authDomain: "mydatabase-5c2f4.firebaseapp.com",
  projectId: "mydatabase-5c2f4",
  storageBucket: "mydatabase-5c2f4.appspot.com",
  messagingSenderId: "361941175424",
  appId: "1:361941175424:web:70a236826fe37282ec2a65",
  measurementId: "G-CEV3QF7BQ7",
};

// Initialize Firebase
export const firebase = initializeApp(firebaseConfig);
export const auth = getAuth(firebase);
export const firestore = getFirestore(firebase);
export const db = getDatabase(firebase);
export const provider = new GoogleAuthProvider();

//signin
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      try {
        //...
      } catch (err) {
        console.log("Error trying Signin: ", err);
      }
    })
    .catch((error) => {
      // const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log("Error from LoginWithGoogle: ", error);
    });
};

export const signOutWithGoogle = () => {
  auth.signOut();
};

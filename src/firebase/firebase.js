import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, doc, updateDoc } from "firebase/firestore";
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
export const user = auth.currentUser;


//signin
export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then(async (result) => {
      const user = result.user;
      const userDocRef = doc(firestore, "users", user.uid);
      try {
        // await updateDoc(userDocRef, user.email);
      } catch (err) {
        console.log("Error addDoc: ", err);
      }
    })
    .catch((error) => {
      // const errorCode = error.code;
      // const errorMessage = error.message;
      const email = error.customData?.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);
      // ...
      console.log("Error from LoginWithGoogle: ", error);
    });
};

export const signOutWithGoogle = () => {
  auth.signOut();
};



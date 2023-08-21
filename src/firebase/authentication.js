import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { firestore, auth } from "./firebase";
import { doc, setDoc } from "firebase/firestore";

export const createUser = async (username, password, name) => {
  await createUserWithEmailAndPassword(auth, username, password)
    .then((userCredential) => {
      console.log("Created and Login Success!");
      // ...
      const userRef = doc(firestore, "users", userCredential.user.uid);
      setDoc(
        userRef,
        {
          username: name,
          email: userCredential.user.email,
          created: { ...userCredential.user.metadata },
        },
        { merge: false }
      );
      console.log("addDoc Success!");
    })
    .catch((error) => {
      console.log("error: ", error.code, error.message);
    });
  //   await signInWithEmailAndPassword(auth, username, password)
  //     .then((userCredential) => {
  //       // Signed in
  //       const user = userCredential.user;
  //       const pass = userCredential.password;
  //       console.log("user signin: ", user, pass);
  //     })
  //     .catch((error) => {
  //       const errorCode = error.code;
  //       if (!errorCode) {
  //         console.log("errorCode from signin: ", errorCode);
  //       }
  //       const errorMessage = error.message;
  //       if (!errorMessage) {
  //         console.log("errorMessage from signin: ", errorMessage);
  //       }
  //     });
};

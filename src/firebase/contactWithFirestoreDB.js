import { firestore } from "./firebase";

import { doc, setDoc, addDoc, getDoc, collection, deleteDoc, Timestamp, serverTimestamp } from "firebase/firestore";


export const submitFormWithAuth = async (name, email, message, usermail, uid) => {
    if (uid) {
        const userRef = doc(firestore, 'mail', `${usermail}-${uid}`);
        await setDoc(userRef, {
            name: name,
            email: email,
            created: serverTimestamp(),
            message: message
        }, { merge: true });
    } else {
        const userRefAuto = collection(firestore, 'mail') //auto-generate an ID
        await addDoc(userRefAuto, {
            name: name,
            email: email,
            created: Timestamp.now(),
            message: message
        });
    }
}

export const clearFormFirestore = async (uid) => {
    if (uid) {
        const formDocRef = doc(firestore, 'mail', uid)
        try {
            await deleteDoc(formDocRef);
            console.log("Clearn!")
        } catch (err) {
            alert("error when clear!", err)
        }
    } else {
        // await deleteDoc(doc(firestore, "mail", "?"));
        console.log("You are not login!")
    }

}
export const checkFormFireStore = async (uid) => {
    if (uid) {
        const docRef = doc(firestore, "mail", `${uid}`);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
        } else {
            // docSnap.data() will be undefined in this case
            console.log("No such document!");
        }
    }
}
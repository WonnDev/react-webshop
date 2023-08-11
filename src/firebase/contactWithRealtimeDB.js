import { ref, set, get, child, remove } from "firebase/database";
import { db } from "../firebase/firebase"

// submit form (ContactMail)
const dbRef = ref(db);

export const submitForm = (name, email, message) => {
  set(child(dbRef, 'mail/client' + name.trim()), {
    name: name,
    email: email.trim(),
    message: message
  })
};

export const checkForm = () => {
  get(child(dbRef, 'mail'))
  .then((snapshot) => {
    if(snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data!");
    }
  })
  .catch((error) => {
    console.log(error);
  });
};
export const clearForm = () => {
  remove(child(dbRef, 'mail/client'))
};
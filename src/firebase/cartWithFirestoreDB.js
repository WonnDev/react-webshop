import { firestore, user } from "./firebase";

//
const updateUserCart = (userId, transaction) => {
  if (!user) return;

  const docRef = doc(
    firestore,
    `communities/${communityId}/userInCommunity/${userId}`
  );
  const newSnippet = {
    userId: userId,
    username: user?.username,
    userEmail: user?.email,
    joinDate: serverTimestamp(),
  };

  return transaction.set(docRef, newSnippet);
};

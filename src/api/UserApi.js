import { doc, getDoc } from 'firebase/firestore';
import { auth, db } from '../../config/firebase';

export const getUserData = async () => {
  const { uid } = auth.currentUser;

  const docRef = doc(db, 'users', uid);
  const docSnap = await getDoc(docRef);

  return docSnap.exists() ? docSnap.data() : null;
};

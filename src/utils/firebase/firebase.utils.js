import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDr1MidXOWvNfqayp-09Pf9D0zTAYrVyb4",
  authDomain: "crwn-clothing-db-250fb.firebaseapp.com",
  projectId: "crwn-clothing-db-250fb",
  storageBucket: "crwn-clothing-db-250fb.appspot.com",
  messagingSenderId: "409030202316",
  appId: "1:409030202316:web:bf79fd20754869c7100369",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const GoogleProvider = new GoogleAuthProvider();

GoogleProvider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, GoogleProvider);

export const signInWithGoogleRedirect=()=>{
    signInWithRedirect(auth,GoogleProvider);
}

export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth,addtionalInformation) => {
    if(!userAuth) return;

  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);
  //是否存了数据 console.log(userSnapshot.exists());
  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...addtionalInformation
      });
    } catch (error) {
      console.log(error.message);
    }
  }
  return userDocRef;
};

export const createAuthUserWithEmailAndPassword= async(email,password)=>{
   if (!email||!password){
       return;
   }
   return await createUserWithEmailAndPassword(auth,email,password);
}

export const signInAuthUserWithEmailAndPassword= async(email,password)=>{
  if (!email||!password){
      return;
  }
  return await signInWithEmailAndPassword(auth,email,password);
}

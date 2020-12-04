import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCB7EdnNk2_LD1SBrxsnKNsZCNUVHQ6luE",
  authDomain: "drext-clothing.firebaseapp.com",
  projectId: "drext-clothing",
  storageBucket: "drext-clothing.appspot.com",
  messagingSenderId: "400057482386",
  appId: "1:400057482386:web:10273d83e1d20bf8ca7a4b",
  measurementId: "G-HYTK6F0VP2",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
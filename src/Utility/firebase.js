import firebase from "firebase/compat/app";
import { getAuth } from "firebase/auth";
import "firebase/compat/firestore";
import "firebase/compat/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPWATA8E_kc6huIazW3Wx9GFeaxBc3Q0c",
  authDomain: "clone-cd15e.firebaseapp.com",
  projectId: "clone-cd15e",
  storageBucket: "clone-cd15e.appspot.com",
  messagingSenderId: "415891713867",
  appId: "1:415891713867:web:46098d1ecfb2c2cfcb82ce",
};
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = app.firestore();

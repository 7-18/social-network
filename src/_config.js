import { initializeApp } from "firebase/app";
import {
  FacebookAuthProvider,
  getAuth,
  GoogleAuthProvider,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBsjhISuJXwkWhkf6IJB9suYqEbo_5L6Ic",
  authDomain: "social-network-ab436.firebaseapp.com",
  projectId: "social-network-ab436",
  storageBucket: "social-network-ab436.appspot.com",
  messagingSenderId: "469955233344",
  appId: "1:469955233344:web:ef0d56bd7b9a4a975d01a5",
};

const app = initializeApp(firebaseConfig);
export const google = new GoogleAuthProvider();
export const facebook = new FacebookAuthProvider();
export const auth = getAuth(app);

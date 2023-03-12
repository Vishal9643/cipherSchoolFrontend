import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBhOcC7knfHbllUzZyRItdntOCUYtdW4kI",
  authDomain: "cipherschools-189bb.firebaseapp.com",
  projectId: "cipherschools-189bb",
  storageBucket: "cipherschools-189bb.appspot.com",
  messagingSenderId: "51108722275",
  appId: "1:51108722275:web:e15c6157faddf07142aa56",
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

export const auth = getAuth();

export const provider = new GoogleAuthProvider();
export default app;

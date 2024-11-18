import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyBuR3XtQCxmY2MegqGKaIFFJGXjiE5wBWE",
  authDomain: "shrinath-furniture-eba14.firebaseapp.com",
  projectId: "shrinath-furniture-eba14",
  storageBucket: "shrinath-furniture-eba14.firebasestorage.app",
  messagingSenderId: "715868916196",
  appId: "1:715868916196:web:7f30c264fbb9edc2505ff1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

export default app;
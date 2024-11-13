// QfirebaseConfig.js
import { initializeApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDxWTyqyiKRr-ENeXj5FX3Huiiif0ZnXt0",
  authDomain: "web-login-4e527.firebaseapp.com",
  projectId: "web-login-4e527",
  storageBucket: "web-login-4e527.appspot.com",  // corrected "firebasestorage.app" to "appspot.com"
  messagingSenderId: "615031815840",
  appId: "1:615031815840:web:33dac21543e2d4e351d3c5",
};

// Initialize Firebase app only once
const app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApps()[0];

// Initialize Firestore and Auth services
const db = getFirestore(app);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { db, auth, googleProvider };

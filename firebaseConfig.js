import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Firebase Configurations
const firebaseConfig = {
  apiKey: "AIzaSyB0L09BfB9bfLYVMCX1C3lRC5o_wSW66yY",
  authDomain: "crossplatformtodoapp.firebaseapp.com",
  databaseURL: "https://crossplatformtodoapp-default-rtdb.firebaseio.com",
  projectId: "crossplatformtodoapp",
  storageBucket: "crossplatformtodoapp.appspot.com",
  messagingSenderId: "705748827954",
  appId: "1:705748827954:web:7cc9ac143ad4ed5a9a612b"
};

// Initialize Firebase
const FIREBASE_APP = initializeApp(firebaseConfig);
const FIRESTORE_DB = getFirestore(FIREBASE_APP);
export { FIREBASE_APP, FIRESTORE_DB };
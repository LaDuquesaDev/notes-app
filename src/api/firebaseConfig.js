import { initializeApp } from "firebase/app";
import { getFirestore } from "./firebaseImport";
import { getAuth } from './firebaseImport';

export const firebaseConfig = {
    apiKey: "AIzaSyAkVO3WTuYYIoLuReKmZf59WS65PGmm1rk",
    authDomain: "note-app-98e67.firebaseapp.com",
    projectId: "note-app-98e67",
    storageBucket: "note-app-98e67.firebasestorage.app",
    messagingSenderId: "4561879947",
    appId: "1:4561879947:web:869294b48912ec5433a58e"
  };

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth =  getAuth(app);

export default auth;
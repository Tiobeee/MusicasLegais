import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBKNIO36ws_Y2z96sW289NE3v-0SCT40DU",
  authDomain: "musicaslegais-fb23f.firebaseapp.com",
  projectId: "musicaslegais-fb23f",
  storageBucket: "musicaslegais-fb23f.appspot.com",
  messagingSenderId: "457060654061",
  appId: "1:457060654061:web:c7fe9aaa2c3b292dd9e5e4",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

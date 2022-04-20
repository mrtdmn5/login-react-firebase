

import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";;

const firebaseConfig = {
  apiKey: "AIzaSyDj_xEIvOnySvSgSR01J3jBDz0a9IWsjnk",
  authDomain: "weblogin-1b581.firebaseapp.com",
  projectId: "weblogin-1b581",
  storageBucket: "weblogin-1b581.appspot.com",
  messagingSenderId: "642313398500",
  appId: "1:642313398500:web:eeec6c85670a597585e4f1"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore();



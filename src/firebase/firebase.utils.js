import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAnPhHu4M34SM0dcoi7_pzXyKphox30MsQ",
  authDomain: "marioplan-1c7a3.firebaseapp.com",
  databaseURL: "https://marioplan-1c7a3.firebaseio.com",
  projectId: "marioplan-1c7a3",
  storageBucket: "marioplan-1c7a3.appspot.com",
  messagingSenderId: "191782500855",
  appId: "1:191782500855:web:ede97c74ae1fadaa2b16f2"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

// set up google sign in for future

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

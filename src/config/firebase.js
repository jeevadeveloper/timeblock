// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";


// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyCqYYgUSbmg_olu2elJk5cA6MPBDRgar4Q",
  authDomain: "blocktime-5100f.firebaseapp.com",
  projectId: "blocktime-5100f",
  storageBucket: "blocktime-5100f.appspot.com",
  messagingSenderId: "1050478007074",
  appId: "1:1050478007074:web:4172308852f758f9094b7b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export function signUp(email,password) {
  return createUserWithEmailAndPassword(getAuth(),email,password);
}

export function logIn(email,password) {
  return signInWithEmailAndPassword(getAuth(), email, password);
}

export function logOut() {
  return signOut(getAuth())
}

export function updateProfileData(name) {
  const update = {
    displayName: name,
    photoURL: null,
  };
  return updateProfile(getAuth().currentUser,update);
}

export function getUserDetails() {
  if(getAuth().currentUser==null){
    return false;
  }
  if(getAuth().currentUser!==null){
    return true;
  }
};

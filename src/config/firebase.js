// Import the functions you need from the SDKs you need
import { initializeApp} from "firebase/app";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { getFirestore, collection, addDoc, query, where, onSnapshot} from 'firebase/firestore';
// Your web app's Firebase configuration 
const firebaseConfig = {
  apiKey: "AIzaSyBuOFuJmIY3cJdEBZSd54pGl2VMJfj_ZdY",
  authDomain: "timeblock-ec50e.firebaseapp.com",
  projectId: "timeblock-ec50e",
  storageBucket: "timeblock-ec50e.appspot.com",
  messagingSenderId: "208079388621",
  appId: "1:208079388621:web:ed9a6e0814106042208e84"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
var db = getFirestore(app);

const addCategoryRef = collection(db,"category")
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
}
   export function addCategory(category,id) {
    return addDoc(addCategoryRef, {
      id: id,
      category: category
    });
  }
    export function getCategory(id) {
      var collectionRef = collection(db,"category");
      const q = query(collectionRef, where("id","==",id));
      let categoryArray = [];
      onSnapshot(q, (querySnapshot) => {
        querySnapshot.forEach((doc) => {
          categoryArray.push(doc.data().category);
        });
    })
    return categoryArray;
  }

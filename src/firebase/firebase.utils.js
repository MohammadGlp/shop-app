import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAOo2BAczEc47B71v3ShiqsdrwCFBe_n-I",
  authDomain: "crwn-db-9518c.firebaseapp.com",
  projectId: "crwn-db-9518c",
  storageBucket: "crwn-db-9518c.appspot.com",
  messagingSenderId: "24185791498",
  appId: "1:24185791498:web:946cabef5c83231c4cebf3",
  measurementId: "G-Z4B646SP61",
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return; 

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) return;

  const { displayName, email } = userAuth;
  const createAt = new Date();

  try {
    await userRef.set({
      displayName,
      email,
      createAt,
      ...additionalData,
    });
  } catch (error) {
    console.log("error creating user", error.message);
  }
  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

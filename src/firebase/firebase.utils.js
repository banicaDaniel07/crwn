import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAZITvj_gjmgJOmwh15BvJ-8vtlGsCoF7g",
  authDomain: "crwn-db-95e6a.firebaseapp.com",
  databaseURL: "https://crwn-db-95e6a-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "crwn-db-95e6a",
  storageBucket: "crwn-db-95e6a.appspot.com",
  messagingSenderId: "32060520762",
  appId: "1:32060520762:web:569b3dbcee4083229fb803",
  measurementId: "G-9BQNJMM814"
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

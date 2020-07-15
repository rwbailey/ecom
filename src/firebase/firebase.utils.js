import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCa_i6H4Vx9e4rPCEfwwsYghxqtpXGUSGA",
    authDomain: "ecom-4c32d.firebaseapp.com",
    databaseURL: "https://ecom-4c32d.firebaseio.com",
    projectId: "ecom-4c32d",
    storageBucket: "ecom-4c32d.appspot.com",
    messagingSenderId: "720830024985",
    appId: "1:720830024985:web:4541f94e5718f84b7dc988"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
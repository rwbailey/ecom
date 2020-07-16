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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
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
}


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
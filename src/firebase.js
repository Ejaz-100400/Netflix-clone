// import firebase from 'firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/compat/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBmpV7yhTlpXL9bZqa0_6QlS95CWZm8u7M",
    authDomain: "netflix-clone-a74d4.firebaseapp.com",
    projectId: "netflix-clone-a74d4",
    storageBucket: "netflix-clone-a74d4.appspot.com",
    appId: "1:588509657394:web:9efc7d1db073d390767f2b"
  };

firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore();
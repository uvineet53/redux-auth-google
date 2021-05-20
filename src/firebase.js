import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCZE76w7r1z2CtszRqWtOhGcxaXA_6107k",
    authDomain: "redux-auth-7a281.firebaseapp.com",
    projectId: "redux-auth-7a281",
    storageBucket: "redux-auth-7a281.appspot.com",
    messagingSenderId: "74083947630",
    appId: "1:74083947630:web:e60b3fa99d014817ed027f"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const auth =  firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export {auth , provider}
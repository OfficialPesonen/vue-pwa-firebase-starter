import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

firebase.initializeApp({
    apiKey: "API_KEY",
    authDomain: "AUTH_DOMAIN",
    databaseURL: "DATABASE_URL",
    projectId: "PROJECT_ID",
    storageBucket: "STORAGE_BUCKET",
    messagingSenderId: "MESSAGING_SENDER_ID",
    appId: "APP_ID"
});

export const auth = firebase.auth();
export const authentication = firebase.auth;
export const firestore = firebase.firestore();
export const firestoreAdvanced = firebase.firestore;
export const storage = firebase.storage().ref();
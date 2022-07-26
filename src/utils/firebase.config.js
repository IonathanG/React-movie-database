import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const app = firebase.initializeApp({
  apiKey: "AIzaSyDJb-MZEbEo2R1VGuKfJx8Z4e7zKfJfU0M",
  authDomain: "react-cinema-app-467ac.firebaseapp.com",
  projectId: "react-cinema-app-467ac",
  storageBucket: "react-cinema-app-467ac.appspot.com",
  messagingSenderId: "648746338593",
  appId: "1:648746338593:web:b2a48f5f3015e157eb5660",
});

export const auth = app.auth();
export default app;

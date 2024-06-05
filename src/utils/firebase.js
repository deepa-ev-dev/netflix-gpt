// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBIh5kFVtPhsZ3IZi2kddwCv86r7ZsXheM",
  authDomain: "netflix-gpt-deepa.firebaseapp.com",
  projectId: "netflix-gpt-deepa",
  storageBucket: "netflix-gpt-deepa.appspot.com",
  messagingSenderId: "927973523506",
  appId: "1:927973523506:web:8cb9d3744f55819f5abc2b",
  measurementId: "G-65533CCX02"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// eslint-disable-next-line no-unused-vars
const analytics = getAnalytics(app);
export const auth = getAuth();
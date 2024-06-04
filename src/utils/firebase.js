// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBYNnYkffgloXyjSwQyQH5mYZmLzErQO_s",
  authDomain: "netflixgpt-35f55.firebaseapp.com",
  projectId: "netflixgpt-35f55",
  storageBucket: "netflixgpt-35f55.appspot.com",
  messagingSenderId: "992136001857",
  appId: "1:992136001857:web:b165492493cb08d3c609c0",
  measurementId: "G-4V3NVP0WD3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
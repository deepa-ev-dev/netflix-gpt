// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
<<<<<<< HEAD
  apiKey: "AIzaSyBIh5kFVtPhsZ3IZi2kddwCv86r7ZsXheM",
  authDomain: "netflix-gpt-deepa.firebaseapp.com",
  projectId: "netflix-gpt-deepa",
  storageBucket: "netflix-gpt-deepa.appspot.com",
  messagingSenderId: "927973523506",
  appId: "1:927973523506:web:8cb9d3744f55819f5abc2b",
  measurementId: "G-65533CCX02"
=======
  apiKey: "AIzaSyBYNnYkffgloXyjSwQyQH5mYZmLzErQO_s",
  authDomain: "netflixgpt-35f55.firebaseapp.com",
  projectId: "netflixgpt-35f55",
  storageBucket: "netflixgpt-35f55.appspot.com",
  messagingSenderId: "992136001857",
  appId: "1:992136001857:web:b165492493cb08d3c609c0",
  measurementId: "G-4V3NVP0WD3"
>>>>>>> origin/main
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGt5ZocaNBXXqRImi5AY_DxNlpfCDLyHA",
  authDomain: "react-firebase-crud-f5afe.firebaseapp.com",
  projectId: "react-firebase-crud-f5afe",
  storageBucket: "react-firebase-crud-f5afe.appspot.com",
  messagingSenderId: "319232706683",
  appId: "1:319232706683:web:cf4f481e7b406662adfade",
  measurementId: "G-FFBTKCS007"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
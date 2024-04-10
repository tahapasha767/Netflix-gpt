// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKWlS2UDcMV9jWAz4To6psf6UdD6PWGpQ",
  authDomain: "netflix-gpt-part2.firebaseapp.com",
  projectId: "netflix-gpt-part2",
  storageBucket: "netflix-gpt-part2.appspot.com",
  messagingSenderId: "288023084503",
  appId: "1:288023084503:web:d933e07574ee84775cdf92",
  measurementId: "G-11ERJCSLSC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth();
export{app,auth};
// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';

// TODO: Replace the following with your app's Firebase project configuration
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
var firebaseConfig = {
  apiKey: "AIzaSyAFlZYp6MW2RFEoxmWt2FwpveRG1Edzhm4",
  authDomain: "talles-first-firebase.firebaseapp.com",
  databaseURL: "https://talles-first-firebase.firebaseio.com",
  projectId: "talles-first-firebase",
  storageBucket: "talles-first-firebase.appspot.com",
  messagingSenderId: "610918245612",
  appId: "1:610918245612:web:15cea73b82563319cab1c9",
  measurementId: "G-VPBCP89E4W"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.auth();

export default firebase;

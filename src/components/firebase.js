import firebase from "firebase/app";
import database from "firebase/database";
var firebaseConfig = {
  apiKey: "AIzaSyBq6m01pg1avhmxsArDWv7m6rNLgKCbvNY",
  authDomain: "bio-table.firebaseapp.com",
  databaseURL:
    "https://bio-table-default-rtdb.firebaseio.com",
  projectId: "bio-table",
  storageBucket: "bio-table.appspot.com",
  messagingSenderId: "696877584464",
  appId: "1:696877584464:web:251b3d8f8857b38cd54155"
};
// Initialize Firebase
var initializeApp = firebase.initializeApp(firebaseConfig);
export var collection = initializeApp.database().ref();
export default {
  collection
};

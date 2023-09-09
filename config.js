import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyDrzNkdaXNUiFEvPJlDB-2bqLtOtU9Vtmg",
    authDomain: "project-71-10b73.firebaseapp.com",
    projectId: "project-71-10b73",
    storageBucket: "project-71-10b73.appspot.com",
    messagingSenderId: "759319050845",
    appId: "1:759319050845:web:cb0e20476b152044132bb4"
  };

  firebase.initializeApp(firebaseConfig);
  export default firebase.firestore();

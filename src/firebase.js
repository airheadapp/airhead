import firebase from 'firebase/app';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyB4rEohs4t8hdmRAi0ZhyYCFD1YxnvrgeA",
    authDomain: "airhead-984a8.firebaseapp.com",
    databaseURL: "https://airhead-984a8-default-rtdb.firebaseio.com",
    projectId: "airhead-984a8",
    storageBucket: "airhead-984a8.appspot.com",
    messagingSenderId: "504303710378",
    appId: "1:504303710378:web:031e71319d59de4300a0d3"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

export default firebase;
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyAi36KHtGSOLQEbGqgM3PMQay-50RtQ0YQ",
  authDomain: "textnote-dab77.firebaseapp.com",
  databaseURL: "https://textnote-dab77.firebaseio.com",
  projectId: "textnote-dab77",
  storageBucket: "textnote-dab77.appspot.com",
  messagingSenderId: "520819229507"
};

const Firebase = firebase.initializeApp(config);

export default Firebase;

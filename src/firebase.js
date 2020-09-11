import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCOp4BxO9VOATAB22wPJDyOFUhj-lh9f2c",
  authDomain: "amz-clone-b9eab.firebaseapp.com",
  databaseURL: "https://amz-clone-b9eab.firebaseio.com",
  projectId: "amz-clone-b9eab",
  storageBucket: "amz-clone-b9eab.appspot.com",
  messagingSenderId: "287079566892",
  appId: "1:287079566892:web:f06f6fd05fd1b491a30b89",
  measurementId: "G-W8LZDEYFJQ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

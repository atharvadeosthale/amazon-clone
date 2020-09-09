import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBlcXISSFzxgdOmPmZIg-_rxt9qJqSKFSo",
  authDomain: "clone-dcc95.firebaseapp.com",
  databaseURL: "https://clone-dcc95.firebaseio.com",
  projectId: "clone-dcc95",
  storageBucket: "clone-dcc95.appspot.com",
  messagingSenderId: "1055842584757",
  appId: "1:1055842584757:web:4ef05c404eac9d816a16fc",
  measurementId: "G-DVLEWXSTPN",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export { db, auth };

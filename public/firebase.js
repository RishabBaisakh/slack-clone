const firebaseConfig = {
  apiKey: "AIzaSyASMWsGjr8qUXa9-CRPDKzRGFuyKDpBEEA",
  authDomain: "slack-clone-245c2.firebaseapp.com",
  databaseURL: "https://slack-clone-245c2.firebaseio.com",
  projectId: "slack-clone-245c2",
  storageBucket: "slack-clone-245c2.appspot.com",
  messagingSenderId: "130204873949",
  appId: "1:130204873949:web:80b0fbd59156d5d88e9734",
  measurementId: "G-P2RQ56EWN7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default db;

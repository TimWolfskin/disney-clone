import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyBzpaKW142Z7ZfEtGdIUQ_VmOpowrnpHhM",
    authDomain: "disney-clone-45559.firebaseapp.com",
    projectId: "disney-clone-45559",
    storageBucket: "disney-clone-45559.appspot.com",
    messagingSenderId: "484436938718",
    appId: "1:484436938718:web:16003bd825aeb807f1d74f"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;


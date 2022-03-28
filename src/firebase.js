import { initializeApp } from "firebase/app"
import { getAuth, GoogleAuthProvider } from "firebase/auth"


const firebaseConfig = {
    apiKey: "AIzaSyBzpaKW142Z7ZfEtGdIUQ_VmOpowrnpHhM",
    authDomain: "disney-clone-45559.firebaseapp.com",
    projectId: "disney-clone-45559",
    storageBucket: "disney-clone-45559.appspot.com",
    messagingSenderId: "484436938718",
    appId: "1:484436938718:web:16003bd825aeb807f1d74f"
};


// Initialize Firebase
// Initialize Firebase
const app = initializeApp(firebaseConfig);
    
// export
export const auth = getAuth(app);
// initialize this way
export const googleAuthProvider = new GoogleAuthProvider();

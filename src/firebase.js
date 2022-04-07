import firebase from 'firebase/app'
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const provider = new GoogleAuthProvider()


const firebaseConfig = {
  apiKey: "AIzaSyCq7K7tvA0gxwtdDR1TBEIZd72p7NJedVg",
  authDomain: "avratest.firebaseapp.com",
  projectId: "avratest",
  storageBucket: "avratest.appspot.com",
  messagingSenderId: "799857292309",
  appId: "1:799857292309:web:32825f0196286761530a1c"
}

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}

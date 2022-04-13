import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const provider = new GoogleAuthProvider();

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyCbyAXFHoy__GhMd3lDUAUprEmQy7dZvRE',
	authDomain: 'avraback.firebaseapp.com',
	projectId: 'avraback',
	storageBucket: 'avraback.appspot.com',
	messagingSenderId: '431526555093',
	appId: '1:431526555093:web:2c1fe2850f1a6c49bba15c'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCpYxDvapsKHaz6rVFS9WaI9rgpG38cXWA",
  authDomain: "sandys-disney.firebaseapp.com",
  projectId: "sandys-disney",
  storageBucket: "sandys-disney.firebasestorage.app",
  messagingSenderId: "874324849610",
  appId: "1:874324849610:web:ce87316f69330717765533",
  measurementId: "G-H22GZWS1V7",
};

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { auth, provider, storage };


import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCjyvnV33Lw_LbwqCjLNGcd9ScAWZHQJNs",
  authDomain: "disney-clone-63a98.firebaseapp.com",
  projectId: "disney-clone-63a98",
  storageBucket: "disney-clone-63a98.appspot.com",
  messagingSenderId: "813877729629",
  appId: "1:813877729629:web:88f0655a08639ebdb730b4"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
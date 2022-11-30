import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// ADD FIREBASE CONFIGURATION HERE
const firebaseConfig = {
  apiKey: "AIzaSyANCFHVByC-KaM0ouR1tN-_-tpLG2Y6GEg",
  authDomain: "trello-clone-164f1.firebaseapp.com",
  projectId: "trello-clone-164f1",
  storageBucket: "trello-clone-164f1.appspot.com",
  messagingSenderId: "550780143755",
  appId: "1:550780143755:web:0d6f1c07cca6b9fba4ec8e",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export {db}
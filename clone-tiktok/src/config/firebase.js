import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
  apiKey: "AIzaSyAEctYmm5Hq_4QWLGioTSWoGMrchO9xVKo",
  authDomain: "tiktok---clone-7ef45.firebaseapp.com",
  projectId: "tiktok---clone-7ef45",
  storageBucket: "tiktok---clone-7ef45.appspot.com",
  messagingSenderId: "946042904806",
  appId: "1:946042904806:web:9776822bb3b7738923db27"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
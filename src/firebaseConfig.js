
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCvIOwosdWYpYLo6HOlpubOytFYB1ehp2c",
  authDomain: "contactform-be44d.firebaseapp.com",
  projectId: "contactform-be44d",
  storageBucket: "contactform-be44d.appspot.com",
  messagingSenderId: "672087441907",
  appId: "1:672087441907:web:55b33efaa3be308ea29286",
  measurementId: "G-RHLZX6CV86"
};


export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
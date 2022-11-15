// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD9i94KwhSaRThyDbmVWB_qeWs4Ax8lPyE",
  authDomain: "commerce-admin-bd6b3.firebaseapp.com",
  projectId: "commerce-admin-bd6b3",
  storageBucket: "commerce-admin-bd6b3.appspot.com",
  messagingSenderId: "757472547486",
  appId: "1:757472547486:web:c9be3a2a5565c80e21a18f",
  measurementId: "G-NFD96L32V3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage=getStorage(app);
const analytics = getAnalytics(app);
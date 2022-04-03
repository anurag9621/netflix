import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// 1) when seeding the database you'll have to uncomment this!
//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyAkTT9zdzVHWsRBcXCfusoDDHPB2DMdEF4",
  authDomain: "netflix-ee8ac.firebaseapp.com",
  projectId: "netflix-ee8ac",
  storageBucket: "netflix-ee8ac.appspot.com",
  messagingSenderId: "935312720949",
  appId: "1:935312720949:web:72d25a67345fe4e0f4dd7c",
  measurementId: "G-LHYC7NNG8T"
};


const firebase = Firebase.initializeApp(config);
// 2) when seeding the database you'll have to uncomment this!
//seedDatabase(firebase);
// 3) once you have populated the database (only run once!), re-comment this so you don't get duplicate data

export { firebase };

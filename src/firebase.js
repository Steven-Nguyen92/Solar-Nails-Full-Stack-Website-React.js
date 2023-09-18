
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import { getPerformance } from 'firebase/performance';

// Config does not work. only for viewing purposes.
const firebaseConfig = {
  apiKey: "random api key",
  authDomain: "someauthdomain.firebaseapp.com",
  databaseURL: "https://somedatabase.firebaseio.com",
  projectId: "solarnails-123",
  storageBucket: "aproject.appspot.com",
  messagingSenderId: "random numbers",
  appId: "random appid",
  measurementId: "random measurementID"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// const analytics = getAnalytics(app);
// export default app;

//Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const analytics = getAnalytics(app);
const perf = getPerformance(app);



export { auth, db }
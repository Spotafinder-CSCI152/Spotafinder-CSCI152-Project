import Firebase from "firebase";

firebaseConfig = {
    apiKey: "AIzaSyAzclOJusoyXpvyB9GHpk4_3ddwtOm-36w",
    authDomain: "spotafinder-c42a6.firebaseapp.com",
    databaseURL: "https://spotafinder-c42a6.firebaseio.com",
    projectId: "spotafinder-c42a6",
    storageBucket: "spotafinder-c42a6.appspot.com",
    messagingSenderId: "655792265694",
    appId: "1:655792265694:web:f9b990da5ce0058fb3254f",
    measurementId: "G-20KHH24XWJ"
  };

  const app = Firebase.initializeApp(firebaseConfig);
export const db = app.database();
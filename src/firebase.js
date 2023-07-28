import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {doc, getFirestore, setDoc, getDoc} from "firebase/firestore";

const COLLECTION = process.env.REACT_APP_FIREBASE_COLLECTION

 const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const db = getFirestore(app);

  const saveWatchlist = async (user,watchlist, watched) =>{
      return setDoc(doc(db,COLLECTION,  user),{watchlist, watched})
  }
  const loadWatchlist = async (user) => {
      const watchlist = await getDoc(doc(db,COLLECTION,  user));
        console.log(watchlist)
      if (watchlist.exists()) {
          return watchlist.data();
      }
      return {watchlist:[], watched:[]}
  }

export default auth;
export {auth,db, saveWatchlist, loadWatchlist};


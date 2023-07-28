import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {doc, getFirestore, setDoc, getDoc} from "firebase/firestore";

const COLLECTION = process.env.REACT_APP_FIREBASE_COLLECTION

 const firebaseConfig = {
    apiKey: "AIzaSyBj_-YYbXiYOiAbqo9Ru_yZzkxoC6WJxA0",
    authDomain: "movie-project-92781.firebaseapp.com",
    projectId: "movie-project-92781",
    storageBucket: "movie-project-92781.appspot.com",
    messagingSenderId: "135871199020",
    appId: "1:135871199020:web:61d5b1d013e1aaaa2a1e89"
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


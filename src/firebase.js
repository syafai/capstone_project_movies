import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

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
  
  export default auth;

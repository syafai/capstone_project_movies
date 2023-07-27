import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

export const firebaseConfig = {
    apiKey: "AIzaSyBj_-YYbXiYOiAbqo9Ru_yZzkxoC6WJxA0",
    authDomain: "movie-project-92781.firebaseapp.com",
    projectId: "movie-project-92781",
    storageBucket: "movie-project-92781.appspot.com",
    messagingSenderId: "135871199020",
    appId: "1:135871199020:web:61d5b1d013e1aaaa2a1e89"
  };

  firebase.initializeApp(firebaseConfig);


  export default firebase;

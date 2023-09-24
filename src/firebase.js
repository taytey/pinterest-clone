import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyCbftFh70aoNJmLMN1kFpiJPmlClQFQq6k",
    authDomain: "pinterest-clone-3e491.firebaseapp.com",
    databaseURL: "https://pinterest-clone-3e491-default-rtdb.firebaseio.com",
    projectId: "pinterest-clone-3e491",
    storageBucket: "pinterest-clone-3e491.appspot.com",
    messagingSenderId: "741079103669",
    appId: "1:741079103669:web:bce9d4d2c7f5b1a91be6fc",
    measurementId: "G-EDJ4THN925"
  };
  
  const app = initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const imagesCollection = db.collection('images');
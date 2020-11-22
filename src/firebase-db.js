import firebase from 'firebase/app'
import 'firebase/firestore'

export const db = firebase
  .initializeApp({
    apiKey: "AIzaSyBBvCErHsYkz-OAfXfWZW0ZjfATvK8wNCc",
    authDomain: "crud-vue-273ff.firebaseapp.com",
    databaseURL: "https://crud-vue-273ff.firebaseio.com",
    projectId: "crud-vue-273ff",
    storageBucket: "crud-vue-273ff.appspot.com",
    messagingSenderId: "128210695017",
    appId: "1:128210695017:web:d7a98d0301b7c44d6383f8",
    measurementId: "G-WMBHMTJGW8"
})
  .firestore();

export const postRef = db.collection("posts");
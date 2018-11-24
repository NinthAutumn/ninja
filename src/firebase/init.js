// Initialize Firebase
import firebase from "firebase"
import "firebase/firestore"
var config = {
  apiKey: "AIzaSyDTwEufIyT3Wwvu86HmTMgVJLkHgqMb85g",
  authDomain: "ninja-chat-42832.firebaseapp.com",
  databaseURL: "https://ninja-chat-42832.firebaseio.com",
  projectId: "ninja-chat-42832",
  storageBucket: "ninja-chat-42832.appspot.com",
  messagingSenderId: "895100730732"
};
const firebaseApp = firebase.initializeApp(config);
firebase.firestore().settings({
  timestampsInSnapshots: true
})
export default firebaseApp.firestore()

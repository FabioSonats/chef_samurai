import firebase from "firebase/app";
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyA_UExSLbEOratlpoM_BJdzGrNAcW4RYSY",
    authDomain: "chef-samurai-site.firebaseapp.com",
    projectId: "chef-samurai-site",
    storageBucket: "chef-samurai-site.appspot.com",
    messagingSenderId: "660432690716",
    appId: "1:660432690716:web:1c4a8fedbc102321f3c9d9"
  }
  

  //init firebase
  firebase.initializeApp(firebaseConfig)

  //init services
  const projectFirestore = firebase.firestore()

  export { projectFirestore }

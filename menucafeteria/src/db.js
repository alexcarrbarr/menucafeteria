import firebase from 'firebase/app'
import 'firebase/firestore'

let firebaseConfig = {
    apiKey: "AIzaSyBscUrC5yzHZIj17S1taUIWTV8Lp54flsQ",
    authDomain: "menucafeteria-aicb.firebaseapp.com",
    projectId: "menucafeteria-aicb",
    storageBucket: "menucafeteria-aicb.appspot.com",
    messagingSenderId: "591026061794",
    appId: "1:591026061794:web:baae8da752ff9f98d7f9bb"
};

export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

const { Timestamp, GeoPoint } = firebase.firestore
export { Timestamp, GeoPoint }

db.settings({ timestampsInSnapshots: true })
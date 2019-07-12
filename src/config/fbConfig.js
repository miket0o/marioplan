import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// var config = {
//     apiKey: "AIzaSyAMUIdqlTPpbEveW8xa-FU546ME9eRi9lY",
//     authDomain: "michael-gerdov-marioplan.firebaseapp.com",
//     databaseURL: "https://michael-gerdov-marioplan.firebaseio.com",
//     projectId: "michael-gerdov-marioplan",
//     storageBucket: "",
//     messagingSenderId: "423173340955",
//     appId: "1:423173340955:web:8cacc741b8d3879e"
// };

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: '',
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID
}

firebase.initializeApp(config);

export default firebase;

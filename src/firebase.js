import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBqwELWlRa0OM4l2quto6UTmM-G6yFV_4I",
    authDomain: "blue-brothers.firebaseapp.com",
    databaseURL: "https://blue-brothers.firebaseio.com",
    projectId: "blue-brothers",
    storageBucket: "blue-brothers.appspot.com",
    messagingSenderId: "785083115233"
};
firebase.initializeApp(config);

export const database = firebase.database()

export const auth = firebase.auth()

export const storage = firebase.storage()

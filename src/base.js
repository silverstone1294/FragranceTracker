
import Rebase from "re-base";
import firebase from "firebase";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBpar_bvqHaSZQXgNrbBmZ_XOEC1lGO0gE",
    authDomain: "fragrancetracker-71502.firebaseapp.com",
    databaseURL: "https://fragrancetracker-71502.firebaseio.com",
    projectId: "fragrancetracker-71502",
    storageBucket: "fragrancetracker-71502.appspot.com",
    messagingSenderId: "62125148507"
});

const base = Rebase.createClass(app.database());

export {base, firebase};
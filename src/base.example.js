import Rebase from 're-base'
import firebase from 'firebase/app'
import database from 'firebase/database'

const app = firebase.initializeApp({
    apiKey: "AIzaSyDowAeCeR3KfmTTDIA0jf_hpeCt0SMoX70",
    authDomain: "thing-list-43e6a.firebaseapp.com",
    databaseURL: "https://thing-list-43e6a.firebaseio.com",
    projectId: "thing-list-43e6a",
    storageBucket: "thing-list-43e6a.appspot.com",
    messagingSenderId: "471082317548"
})

const db = database(app)
const base = Rebase.createClass(db)

export default base
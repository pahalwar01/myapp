  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDXIbUIbKYmKVPUtfrzCPAxLb2t4r_Jlww",
    authDomain: "account-f83b4.firebaseapp.com",
    projectId: "account-f83b4",
    storageBucket: "account-f83b4.appspot.com",
    messagingSenderId: "374695878902",
    appId: "1:374695878902:web:72ea054fbd780f98650cd7",
    measurementId: "G-D0XY2VX61J"
  };


  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  const auth = firebase.auth()
  const database = firebase.database()
  
  // setup our regiter function
  function register(){
    //get all the niput fields
    var name = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pass = document.getElementById("password").value;

  }

  auth.createUserWithEmailAndPassword(email,pass)
  .then(function(){
    var user = auth.currentUser
    var database_ref = database_ref()

    var user_data = {
        name : name,
        email : email,
        phone : phone,
        pass : pass,
        last_login : Date.now()
    }

    database_ref.child('users/' + user.uid).set(user_data)






    alert("User Created")
  })
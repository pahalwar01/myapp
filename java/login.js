// login coding start---

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-analytics.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.12.3/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDXIbUIbKYmKVPUtfrzCPAxLb2t4r_Jlww",
  authDomain: "account-f83b4.firebaseapp.com",
  databaseURL: "https://account-f83b4-default-rtdb.firebaseio.com",
  projectId: "account-f83b4",
  storageBucket: "account-f83b4.appspot.com",
  messagingSenderId: "374695878902",
  appId: "1:374695878902:web:72ea054fbd780f98650cd7",
  measurementId: "G-D0XY2VX61J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const login = document.getElementById('login_btn');
login.addEventListener("click", function (login) {
  login.preventDefault()
  
  // inputs
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  // submit button

  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    //const user = userCredential.user;
    alert("Signing In...")
    window.location.href="users/user_1/user_1.html";
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });

})


// login coding end---
// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyA91ikt3jjf9CcUGS3Gi_sw5XbnRgps7V8",
  authDomain: "test-eab3b.firebaseapp.com",
  databaseURL: "https://test-eab3b-default-rtdb.firebaseio.com",
  projectId: "test-eab3b",
  storageBucket: "test-eab3b.appspot.com",
  messagingSenderId: "380845739585",
  appId: "1:380845739585:web:a07a3cea035db8ca4580c0",
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");

// Listen for form submit
document.getElementById("loginButton").addEventListener("click", login);

// Login function
function redirectToWebsite() {
  // Replace "https://www.example.com" with the desired website URL
  window.location.href = "http://127.0.0.1:5500/WE%20CARE/WE%20CARE/cof%20form/desktop1.html";
}
function login() {
  // Get values
  var hospitalId = getInputVal("HSID");
  var doctorId = getInputVal("DOCID");
  var password = getInputVal("pass");

  // Save message
  saveMessage(hospitalId, doctorId, password);

  // Show alert
  document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  setTimeout(function () {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // Clear form
  document.getElementById("HSID").value = "";
  document.getElementById("DOCID").value = "";
  document.getElementById("pass").value = "";
}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to Firebase
function saveMessage(hospitalId, doctorId, password) {
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    hospitalId: hospitalId,
    doctorId: doctorId,
    password: password,
  });
}

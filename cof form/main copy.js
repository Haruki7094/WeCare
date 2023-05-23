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
// document.getElementsByClassName("rounded-bl-lg bg-red-500 font-size 52px text-white py-7 px-36 text-2xl hover:bg-green-500 hover:text-white mx-7 mt-2 mb-5").addEventListener("click", login);
// document.getElementById().addEventListener("click", login);
document.getElementById("testing").addEventListener("click",login);

// Login function
function redirectToWebsite() {
  // Replace "https://www.example.com" with the desired website URL



  // window.location.href = "http://127.0.0.1:5500/WE%20CARE/WE%20CARE/cof%20form/desktop1.html";
}



// Not runing
function login() {
  // Get values
  var p_name = getInputVal("HSID");
  var gender = getInputVal("GEN");
  var ad_ca_no = getInputVal("Adhaar");
  var p_no = getInputVal("phone");
  var age = getInputVal("age");
  var med = getInputVal("alpha");
  var bp = getInputVal("BP");
  var lab_test = getInputVal("labtest");
  var doc_reg = getInputVal("doc");

  // Save message
  saveMessage(p_name,gender,ad_ca_no);
  // saveMessage(p_name,gender,ad_ca_no,p_no,age,med,bp,lab_test,doc_reg);

  // Show alert
  // document.querySelector(".alert").style.display = "block";

  // Hide alert after 3 seconds
  // setTimeout(function () {
    // document.querySelector(".alert").style.display = "none";
  // }, 3000);

  // Clear form
  // document.getElementById("HSID").value = "";
  // document.getElementById("GEN").value = "";
  // document.getElementById("Adhaar").value = "";
  // document.getElementById("phone").value = "";
  // document.getElementById("age").value = "";
  // document.getElementById("alpha").value = "";
  // document.getElementById("BP").value = "";
  // document.getElementById("labtest").value = "";
  // document.getElementById("doc").value = "";

}

// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to Firebase
function saveMessage(p_name,gender,ad_ca_no,p_no,age,med,bp,lab_test,doc_reg){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    p_name: p_name,
    gender: gender,
    ad_ca_no: ad_ca_no,
    // p_no: p_no,
    // age:age,
    // med:med,
    // bp:bp,
    // lab_test:lab_test,
    // doc_reg:doc_reg,


  });
}

// Initialize Firebase (ADD YOUR OWN DATA)
const firebaseConfig = {
  apiKey: "AIzaSyDmnhaFGCBBKr5hnLLZarwbjpMMQF3Yvo4",
  authDomain: "kuchbhidaalde-3198f.firebaseapp.com",
  databaseURL: "https://kuchbhidaalde-3198f-default-rtdb.firebaseio.com",
  projectId: "kuchbhidaalde-3198f",
  storageBucket: "kuchbhidaalde-3198f.appspot.com",
  messagingSenderId: "688005493824",
  appId: "1:688005493824:web:425fc474a2bf5130f21ba5",
  
};

firebase.initializeApp(firebaseConfig);

// Reference messages collection
var messagesRef = firebase.database().ref("messages");
const db = firebase.firestore();

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

async function login() {
              var p_name = getInputVal("HSID");
              var gender = getInputVal("GEN");
              var ad_ca_no = getInputVal("Adhaar");
              var p_no = getInputVal("phone");
              var age = getInputVal("age");
              var med = getInputVal("alpha");
              var bp = getInputVal("BP");
              var lab_test = getInputVal("labtest");
              var doc_reg = getInputVal("doc");
            try {
                const docRef = await db.collection("users").add({
                  name=

                });
                console.log("Document written with ID: ", docRef.id);
            } catch (error) {
                console.error("Error adding document: ", error);
            }
        }
  // Get values


  // Save message
  // saveMessage(p_name,gender,ad_ca_no,p_no,age,med,bp,lab_test,doc_reg);
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



// Function to get form values
function getInputVal(id) {
  return document.getElementById(id).value;
}

// Save message to Firebase
// function saveMessage(p_name,gender,ad_ca_no,p_no,age,med,bp,lab_test,doc_reg){
//   var newMessageRef = messagesRef.push();
//   newMessageRef.set({
//     p_name: p_name,
//     gender: gender,
//     ad_ca_no: ad_ca_no,
//     p_no: p_no,
//     age:age,
//     med:med,
//     bp:bp,
//     lab_test:lab_test,
//     doc_reg:doc_reg,


//   });
// }

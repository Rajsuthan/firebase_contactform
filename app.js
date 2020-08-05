// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyB6Izsku_qLcnr9lc0Ivj5eejB7-5FCaRE",
  authDomain: "test-form-d3492.firebaseapp.com",
  databaseURL: "https://test-form-d3492.firebaseio.com",
  projectId: "test-form-d3492",
  storageBucket: "test-form-d3492.appspot.com",
  messagingSenderId: "222398070278",
  appId: "1:222398070278:web:bf51f5c8a26dcfff9ecd87",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Refernece contactInfo collections
let contactInfo = firebase.database().ref("infos");

// Listen for a submit
document.querySelector(".contact-form").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  //   Get input Values
  let name = document.querySelector(".name").value;
  let email = document.querySelector(".email").value;
  let message = document.querySelector(".message").value;
  console.log(name, email, message);

  saveContactInfo(name, email, message);

  document.querySelector(".contact-form").reset();
}

// Save infos to Firebase
function saveContactInfo(name, email, message) {
  let newContactInfo = contactInfo.push();

  newContactInfo.set({
    name: name,
    email: email,
    message: message,
  });
}

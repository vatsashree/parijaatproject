function toggleForm() {
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");
  
    if (loginForm.style.display === "none") {
      loginForm.style.display = "block";
      signupForm.style.display = "none";
    } else {
      loginForm.style.display = "none";
      signupForm.style.display = "block";
    }
  }
  
  function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    // Perform login logic here
    // You can send an API request to validate the user's credentials
  
    console.log("Logging in...");
  }
  
  function signup() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
  
    // Perform sign up logic here
    // You can send an API request to create a new user with the provided credentials
  
    console.log("Signing up...");
  }
  
  function login() {
    const username = document.getElementById("loginUsername").value;
    const password = document.getElementById("loginPassword").value;
  
    // Perform login logic here
    // You can send an API request to validate the user's credentials
  
    // Assuming the login is successful, redirect to the second page
    window.location.href = "med2.html";
  }
  
  function signup() {
    const username = document.getElementById("signupUsername").value;
    const password = document.getElementById("signupPassword").value;
  
    // Perform sign up logic here
    // You can send an API request to create a new user with the provided credentials
  
    // Assuming the sign-up is successful, redirect to the second page
    window.location.href = "med2.html";
  }
  
  // Add the following JavaScript code

// Array to store reviews
let reviews = [];

// Function to submit a review
function submitReview() {
  const reviewText = document.getElementById('review-text').value;
  reviews.push(reviewText);

  // Display the reviews
  displayReviews();

  // Clear the review input
  document.getElementById('review-text').value = '';
}

// Function to display reviews
function displayReviews() {
  const reviewsContainer = document.getElementById('reviews');
  reviewsContainer.innerHTML = '';

  reviews.forEach(review => {
    const reviewElement = document.createElement('div');
    reviewElement.classList.add('review');
    reviewElement.textContent = review;
    reviewsContainer.appendChild(reviewElement);
  });
}
function submitForm(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const age = document.getElementById('age').value;
  const gender = document.getElementById('gender').value;
  const location = document.getElementById('location').value;
  const pincode = document.getElementById('pincode').value;

  // You can handle the form submission here
  // For example, you can send the data to a server using AJAX or perform any other actions

  // Clear the form fields after submission
  document.getElementById('name').value = '';
  document.getElementById('age').value = '';
  document.getElementById('gender').value = '';
  document.getElementById('location').value = '';
  document.getElementById('pincode').value = '';
}


// Select the chat box elements
const chatBox = document.getElementById('chat-box');
const chatForm = document.getElementById('chat-form');
const chatInput = document.getElementById('chat-input');
const chatMessages = document.getElementById('chat-messages');
const chatSendBtn = document.getElementById('chat-send-btn');
// Create a WebSocket connection to the server
const socket = new WebSocket('ws://localhost:8080/chat');

// When the WebSocket connection is open, send a message to the server
socket.addEventListener('open', (event) => {
  console.log('WebSocket connection established');
  socket.send('Hello server!');
});

// When the WebSocket connection receives a message, add it to the chat messages list
socket.addEventListener('message', (event) => {
  const message = event.data;
  const li = document.createElement('li');
  li.textContent = message;
  chatMessages.appendChild(li);
});

// When the chat form is submitted, send the input value to the server and clear the input field
chatForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = chatInput.value;
    socket.send(message);
    chatInput.value = '';
  });
  
  // Open the chat box when the chat icon is clicked
  document.getElementById('chat-icon').addEventListener('click', (event) => {
    event.preventDefault();
    chatBox.style.display = 'block';
  });
  
  // Close the chat box when the close button is clicked
  document.getElementById('chat-close-btn').addEventListener('click', (event) => {
    event.preventDefault();
    chatBox.style.display = 'none';
  });

  const biharCities = [
    { name: 'Patna', pincodes: ['800001', '800002', '800003', '800004', '800005'] },
    { name: 'Gaya', pincodes: ['823001', '823002', '823003', '823004', '823005'] },
    { name: 'Bhagalpur', pincodes: ['812001', '812002', '812003', '812004', '812005'] },
    // Add more cities with pincodes as needed
  ];
  
  const citySelect = document.getElementById('city');
  const pincodeSelect = document.getElementById('pincode');
  const centersSelect = document.getElementById('centers');
  const submitBtn = document.getElementById('submitBtn');
  
  // Populate cities
  biharCities.forEach(city => {
    const cityOption = document.createElement('option');
    cityOption.value = city.name;
    cityOption.textContent = city.name;
    citySelect.appendChild(cityOption);
  });
  
  // Populate pincodes based on selected city
  function populatePincodes() {
    const selectedCity = citySelect.value;
    const selectedCityObj = biharCities.find(city => city.name === selectedCity);
  
    // Clear existing options
    pincodeSelect.innerHTML = '';
  
    // Populate pincodes
    selectedCityObj.pincodes.forEach(pincode => {
      const pincodeOption = document.createElement('option');
      pincodeOption.value = pincode;
      pincodeOption.textContent = pincode;
      pincodeSelect.appendChild(pincodeOption);
    });
  }
  
  // Event listener for city selection
  citySelect.addEventListener('change', populatePincodes);
  
  // Event listener for form submission
  submitBtn.addEventListener('click', () => {
    const selectedCity = citySelect.value;
    const selectedPincode = pincodeSelect.value;
    const selectedCenter = centersSelect.value;
  
    // Perform any necessary actions with the selected data
  
    // Redirect to desired page
    window.location.href = `oxygensupply.html?city=${selectedCity}&pincode=${selectedPincode}&center=${selectedCenter}`;
  });
  


  // Get user details from the form
var name = document.getElementById('name').value;
var age = document.getElementById('age').value;
var gender = document.getElementById('gender').value;
var location = document.getElementById('location').value;
var pincode = document.getElementById('pincode').value;

// Save user details to Firebase Realtime Database
firebase.database().ref('users').push({
  name: name,
  age: age,
  gender: gender,
  location: location,
  pincode: pincode
});
// Read user data from Firebase Realtime Database
firebase.database().ref('users').on('value', function(snapshot) {
  snapshot.forEach(function(childSnapshot) {
    var user = childSnapshot.val();
    console.log(user);
    // Use the user data as needed
  });
});

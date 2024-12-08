// Array of educational quotes
const quotes = [
  "Education is the most powerful weapon which you can use to change the world.",
  "The beautiful thing about learning is that no one can take it away from you.",
  "Education is not preparation for life; education is life itself.",
  "An investment in knowledge pays the best interest.",
  "The purpose of education is to replace an empty mind with an open one.",
];

// Function to display a random quote
function displayRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
}
//form validation 
 function validateForm() {
      // Get form fields
      let  name = document.getElementById('name').value.trim();// Trim removes extra spaces
      let email = document.getElementById('email').value.trim();
      let message = document.getElementById('message').value.trim();
      let reason = document.getElementById('reason').value;

      // Valiadte name field: must not be empty
      if (name === '') {
        alert('Name is required.');
        return false;//stop form submission
      }
      

      // Validate emailfield: must not be empty
      if (email === '') {
        alert('Email is required.');
        return false;//stop form submission
      }
     

      // Validate message field : must not be empty
      if (message === '') {
        alert('Message is required.');
       return false;//stop form submission
      }
      if (message.length < 10) {
        alert('Message must be at least 10 characters long.');
        return false;//stop form submission
      }

      // Validate reason field: a selection must be made
      if (reason === '') {
        alert('Please select a reason for contact.');
        return false;//stop form submission
      }

     //If all validation pass, show a success message
      alert('Form submitted successfully!');
      return true;//allow form submission
    }
	
	
  // JavaScript DOM to greet the user
  window.onload = function() {
    alert("welcome to our info page. Please fill the contact form.");
  };

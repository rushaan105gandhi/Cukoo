// Get the form element
const registrationForm = document.getElementById('registration-form');

// Add a submit event listener to the form
registrationForm.addEventListener('submit', function(event) {
  // Prevent the form from submitting
  event.preventDefault();

  // Get the form values
  const username = registrationForm.username.value;
  const email = registrationForm.email.value;
  const password = registrationForm.password.value;

  // Validate the form values
  if (username.length < 4) {
    alert('Username must be at least 4 characters long');
    return;
  }

  if (email.indexOf('@') === -1) {
    alert('Invalid email address');
    return;
  }

  if (password.length < 8) {
    alert('Password must be at least 8 characters long');
    return;
  }

  // If everything is valid, submit the form
  alert('Registration successful!');
  registrationForm.submit();
});

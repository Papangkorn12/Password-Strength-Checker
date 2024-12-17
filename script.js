const password = document.getElementById('password');
const feedback = document.getElementById('feedback');
const strengthBar = document.getElementById('strength');
const submitBtn = document.getElementById('submit-btn');
const result = document.getElementById('result');

let strength = 0;

// Password input event listener
password.addEventListener('input', () => {
  const value = password.value;
  strength = 0;

  // Check conditions
  if (value.length >= 12) strength++; // Length
  if (/[A-Z]/.test(value)) strength++; // Uppercase
  if (/[a-z]/.test(value)) strength++; // Lowercase
  if (/\d/.test(value)) strength++; // Numbers
  if (/[\W_]/.test(value)) strength++; // Special characters

  // Feedback display
  if (strength <= 2) {
    feedback.textContent = 'Weak Password';
    feedback.style.color = 'red';
    strengthBar.style.width = '20%';
    strengthBar.style.backgroundColor = 'red';
  } else if (strength === 3) {
    feedback.textContent = 'Moderate Password';
    feedback.style.color = 'orange';
    strengthBar.style.width = '60%';
    strengthBar.style.backgroundColor = 'orange';
  } else if (strength >= 4) {
    feedback.textContent = 'Strong Password';
    feedback.style.color = 'green';
    strengthBar.style.width = '100%';
    strengthBar.style.backgroundColor = 'green';
  }
});

// Confirm button event listener
submitBtn.addEventListener('click', () => {
  const username = document.getElementById('username').value;
  const passwordValue = password.value;

  if (!username || !passwordValue) {
    result.textContent = 'Please fill in both username and password!';
    result.style.color = 'red';
  } else if (strength >= 4) {
    result.textContent = 'Success!';
    result.style.color = 'green';
  } else {
    result.textContent = 'Please use a storng password. Try again';
    result.style.color = 'red';
  }
});

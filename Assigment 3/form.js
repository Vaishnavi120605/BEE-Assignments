const form = document.getElementById('feedbackForm');

const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const courseInput = document.getElementById('course');
const feedbackInput = document.getElementById('feedback');

const nameError = document.getElementById('nameError');
const emailError = document.getElementById('emailError');
const courseError = document.getElementById('courseError');
const feedbackError = document.getElementById('feedbackError');

const deleteBtn = document.getElementById('deleteBtn');
const sessionUser = document.getElementById('sessionUser');
const storedFeedback = document.getElementById('storedFeedback');

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Clear error as soon as valid input is entered
nameInput.addEventListener('input', () => {
  if (nameInput.value.trim().length >= 3) clearError(nameInput, nameError);
});

emailInput.addEventListener('input', () => {
  if (emailRegex.test(emailInput.value.trim())) clearError(emailInput, emailError);
});

courseInput.addEventListener('change', () => {
  if (courseInput.value !== '') clearError(courseInput, courseError);
});

feedbackInput.addEventListener('input', () => {
  if (feedbackInput.value.trim() !== '') clearError(feedbackInput, feedbackError);
});

function showError(input, errorEl, message) {
  input.classList.add('invalid');
  errorEl.textContent = message;
}

function clearError(input, errorEl) {
  input.classList.remove('invalid');
  errorEl.textContent = '';
}

form.addEventListener('submit', function (e) {
  e.preventDefault();
  let isValid = true;

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const course = courseInput.value;
  const feedback = feedbackInput.value.trim();

  if (name.length < 3) {
    showError(nameInput, nameError, 'Name must contain at least 3 characters.');
    isValid = false;
  } else {
    clearError(nameInput, nameError);
  }

  if (!emailRegex.test(email)) {
    showError(emailInput, emailError, 'Enter a valid email.');
    isValid = false;
  } else {
    clearError(emailInput, emailError);
  }

  if (course === '') {
    showError(courseInput, courseError, 'Please select a course.');
    isValid = false;
  } else {
    clearError(courseInput, courseError);
  }

  if (feedback === '') {
    showError(feedbackInput, feedbackError, 'Please enter feedback.');
    isValid = false;
  } else {
    clearError(feedbackInput, feedbackError);
  }

  if (!isValid) return;

  // Store in Local Storage
  const data = { name, email, course, feedback };
  localStorage.setItem('studentFeedback', JSON.stringify(data));

  // Store only name in Session Storage
  sessionStorage.setItem('sessionUser', name);

  displayStoredData();
  displaySessionUser();

  form.reset();
});

deleteBtn.addEventListener('click', function () {
  localStorage.removeItem('studentFeedback');
  sessionStorage.removeItem('sessionUser');
  displayStoredData();
  displaySessionUser();
});

function displayStoredData() {
  const data = JSON.parse(localStorage.getItem('studentFeedback'));
  if (data) {
    storedFeedback.innerHTML = `
      <p><strong>Name:</strong> ${data.name}</p>
      <p><strong>Email:</strong> ${data.email}</p>
      <p><strong>Course:</strong> ${data.course}</p>
      <p><strong>Feedback:</strong> ${data.feedback}</p>
    `;
  } else {
    storedFeedback.textContent = 'No feedback stored.';
  }
}

function displaySessionUser() {
  const user = sessionStorage.getItem('sessionUser');
  sessionUser.textContent = user ? `Current Session User: ${user}` : '';
}

// Load stored data on page load
displayStoredData();
displaySessionUser();
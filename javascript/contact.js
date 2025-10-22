const form = document.getElementById('contactForm');
const popup = document.getElementById('successPopup');
const closePopup = document.getElementById('closePopup');

const nameInput = form.name;
const emailInput = form.email;
const subjectInput = form.subject;
const messageInput = form.message;

function showError(id, message) {
  document.getElementById(id).textContent = message;
}

function clearErrors() {
  document.querySelectorAll('.error').forEach(el => (el.textContent = ''));
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// Real-time validation
nameInput.addEventListener('input', () => {
  showError('test-contact-error-name', nameInput.value.trim() ? '' : 'Full name is required.');
});

emailInput.addEventListener('input', () => {
  const emailVal = emailInput.value.trim();
  const errorEl = document.getElementById('test-contact-error-email');
  if (!emailVal) {
    errorEl.textContent = '';
  } else if (!isValidEmail(emailVal)) {
    errorEl.textContent = 'Enter a valid email address.';
  } else {
    errorEl.textContent = '';
  }
});

subjectInput.addEventListener('input', () => {
  showError('test-contact-error-subject', subjectInput.value.trim() ? '' : 'Subject is required.');
});

messageInput.addEventListener('input', () => {
  const msgVal = messageInput.value.trim();
  const errorEl = document.getElementById('test-contact-error-message');
  if (!msgVal) {
    errorEl.textContent = '';
  } else if (msgVal.length < 10) {
    errorEl.textContent = 'Message must be at least 10 characters.';
  } else {
    errorEl.textContent = '';
  }
});

// Submit handler
form.addEventListener('submit', (e) => {
  e.preventDefault();
  clearErrors();

  let valid = true;
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  if (!name) {
    valid = false;
    showError('test-contact-error-name', 'Full name is required.');
  }

  if (!isValidEmail(email)) {
    valid = false;
    showError('test-contact-error-email', 'Enter a valid email address.');
  }

  if (!subject) {
    valid = false;
    showError('test-contact-error-subject', 'Subject is required.');
  }

  if (message.length < 10) {
    valid = false;
    showError('test-contact-error-message', 'Message must be at least 10 characters.');
  }

  if (valid) {
    // Show popup
    popup.classList.add('show');
    form.reset();
  }
});

// Close popup
closePopup.addEventListener('click', () => {
  popup.classList.remove('show');
});
// Close popup when clicking outside the content
window.addEventListener('click', (e) => {
  if (e.target === popup) {
    popup.classList.remove('show');
  }
});

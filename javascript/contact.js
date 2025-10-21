const form = document.getElementById('contactForm');
const successMsg = document.getElementById('successMsg');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  let valid = true;

  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const subject = form.subject.value.trim();
  const message = form.message.value.trim();

  document.querySelectorAll('.error').forEach(el => el.textContent = '');

  if (!name) {
    valid = false;
    document.getElementById('test-contact-error-name').textContent = 'Full name is required.';
  }

  if (!email.match(/^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/)) {
    valid = false;
    document.getElementById('test-contact-error-email').textContent = 'Enter a valid email address.';
  }

  if (!subject) {
    valid = false;
    document.getElementById('test-contact-error-subject').textContent = 'Subject is required.';
  }

  if (message.length < 10) {
    valid = false;
    document.getElementById('test-contact-error-message').textContent = 'Message must be at least 10 characters.';
  }

  if (valid) {
    successMsg.textContent = '✅ Your message has been sent successfully!';
    form.reset();
  } else {
    successMsg.textContent = '';
  }
});

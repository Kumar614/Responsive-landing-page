document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const nameInput = form.querySelector('#name');
  const emailInput = form.querySelector('#email');
  const messageInput = form.querySelector('#message');
  const formMessage = document.getElementById('formMessage');

  // Utility function to validate email format
  function isValidEmail(email) {
    // Simple email regex for validation
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    return re.test(email);
  }

  function showError(input, message) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = message;
    input.setAttribute('aria-invalid', 'true');
  }

  function clearError(input) {
    const errorSpan = input.nextElementSibling;
    errorSpan.textContent = '';
    input.removeAttribute('aria-invalid');
  }

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    let valid = true;

    // Validate name
    if (!nameInput.value.trim()) {
      showError(nameInput, 'Name is required.');
      valid = false;
    } else {
      clearError(nameInput);
    }

    // Validate email
    if (!emailInput.value.trim()) {
      showError(emailInput, 'Email is required.');
      valid = false;
    } else if (!isValidEmail(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email address.');
      valid = false;
    } else {
      clearError(emailInput);
    }

    // Validate message
    if (!messageInput.value.trim()) {
      showError(messageInput, 'Please enter a message.');
      valid = false;
    } else {
      clearError(messageInput);
    }

    if (!valid) {
      formMessage.textContent = '';
      return;
    }

    // Simulate form submission
    formMessage.style.color = '#007bff';
    formMessage.textContent = 'Sending message...';

    // Disable submit button to prevent multiple submissions
    form.querySelector('button[type="submit"]').disabled = true;

    // Simulated delay for submission success
    setTimeout(() => {
      formMessage.textContent = 'Thank you! Your message has been sent.';
      form.reset();
      form.querySelector('button[type="submit"]').disabled = false;
    }, 1500);
  });
});

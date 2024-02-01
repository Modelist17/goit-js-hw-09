document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.feedback-form');

  const savedData =
    JSON.parse(localStorage.getItem('feedback-form-state')) || {};
  form.email.value = savedData.email || '';
  form.message.value = savedData.message || '';

  form.addEventListener('input', event => {
    const { name, value } = event.target;
    // Correction: Update savedData on each input change
    const updatedData = { ...savedData, [name]: value.trim() };
    localStorage.setItem('feedback-form-state', JSON.stringify(updatedData));
  });

  form.addEventListener('submit', event => {
    event.preventDefault();

    const email = form.email.value.trim();
    const message = form.message.value.trim();

    // Correction: Check both email and message for emptiness
    if (email && message) {
      console.log({ email, message });
      localStorage.removeItem('feedback-form-state');
      form.reset();
    }
  });
});

// 2-form.js
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".feedback-form");
  
    // Читаємо з локального сховища попередні дані та встановлюємо їх у поля форми
    const savedData = JSON.parse(localStorage.getItem("feedback-form-state")) || {};
    form.email.value = savedData.email || "";
    form.message.value = savedData.message || "";
  
    // Обробник події input, який записує дані у локальне сховище
    form.addEventListener("input", (event) => {
      const { name, value } = event.target;
      localStorage.setItem("feedback-form-state", JSON.stringify({ ...savedData, [name]: value.trim() }));
    });
  
    // Обробник події submit, який виводить дані у консоль та очищує локальне сховище та поля форми
    form.addEventListener("submit", (event) => {
      event.preventDefault();
  
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (email && message) {
        console.log({ email, message });
        localStorage.removeItem("feedback-form-state");
        form.reset();
      }
    });
  });
  
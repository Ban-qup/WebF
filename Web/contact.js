document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name");
    var email = document.getElementById("email");
    var message = document.getElementById("message");

    if (!name.value || !email.value || !message.value) {
      if (!name.value) {
        name.classList.add("is-invalid");
      }
      if (!email.value) {
        email.classList.add("is-invalid");
      }
      if (!message.value) {
        message.classList.add("is-invalid");
      }
    } else {
      alert("Form submitted successfully!");
    }
  });

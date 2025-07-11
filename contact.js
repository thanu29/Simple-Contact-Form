document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();
  const errorMsg = document.getElementById("error");
  const successMsg = document.getElementById("success");

  errorMsg.textContent = "";
  successMsg.textContent = "";

  if (!name || !email || !message) {
    errorMsg.textContent = "Please fill in all fields.";
    return;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errorMsg.textContent = "Please enter a valid email address.";
    return;
  }

  successMsg.textContent = "Message sent successfully!";

  // Optional: Reset the form
  document.getElementById("contactForm").reset();
});


  // Optional: Reset the form
  document.getElementById("contactForm").reset();
});

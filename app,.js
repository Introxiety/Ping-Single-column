document.getElementById("myForm").addEventListener("submit", function(e) {
    var emailInput = document.getElementById("email");
    var errorMessage = document.getElementById("error-message");

    if (!isValidEmail(emailInput.value)) {
        errorMessage.style.display = "block";
        emailInput.style.borderColor = "red";
      errorMessage.innerText = "Please provide a valid email address.";
      e.preventDefault(); // Prevent form submission
    } else {
      errorMessage.innerText = "";
      alert("Form submitted successfully!"); // You can customize this message
      e.preventDefault();
    }
  });

  function isValidEmail(email) {
    // Basic email validation using a regular expression
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
  }
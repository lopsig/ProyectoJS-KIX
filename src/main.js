document
  .getElementById("registerForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      document.getElementById("error").textContent = "Passwords do not match!";
      return;
    }

    alert("Registration successful!");
    window.location.href = "home.html";
  });

document
  .getElementById("updateForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    alert("Profile updated successfully!");
    window.location.href = "home.html";
  });

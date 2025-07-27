document.getElementById("consentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const consent = document.getElementById("consentCheckbox").checked;

  if (!consent) {
    alert("You must provide consent to proceed.");
    return;
  }

  const userData = {
    name: name,
    email: email,
    consentGiven: consent,
    timestamp: new Date().toISOString()
  };

  // Save locally (for demonstration)
  localStorage.setItem("userConsent", JSON.stringify(userData));

  // Optional: Log to console
  console.log("User Data Submitted:", userData);

  // Update message
  document.getElementById("message").textContent = "Thank you! Your data has been recorded.";
});

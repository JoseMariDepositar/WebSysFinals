document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("infoForm");
  
    if (form) {
      form.addEventListener("submit", (e) => {
        e.preventDefault(); // Prevent actual form submission
  
        // Basic validation (this is just an extra check)
        const inputs = form.querySelectorAll("input");
        let allFilled = true;
        inputs.forEach(input => {
          if (!input.value.trim()) {
            allFilled = false;
          }
        });
  
        if (allFilled) {
          // Redirect to the thank you page
          window.location.href = "thankyou.html";
        } else {
          alert("Please fill in all fields.");
        }
      });
    }
  });
  
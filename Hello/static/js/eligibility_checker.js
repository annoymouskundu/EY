document.getElementById("eligibility-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    const name = document.getElementById("name").value.trim();
    const aadhaar = document.getElementById("aadhaar").value.trim();
    const dob = document.getElementById("dob").value.trim();
    const income = document.getElementById("income").value.trim();
    const captchaInput = document.getElementById("captcha-input").value.trim();

    // Basic Validation
    if (name === "" || name.length < 3) {
        alert("Please enter a valid name.");
        return;
    }

    if (aadhaar.length !== 12 || isNaN(aadhaar)) {
        alert("Please enter a valid 12-digit Aadhaar number.");
        return;
    }

    if (income === "" || isNaN(income)) {
        alert("Please enter a valid income.");
        return;
    }

    if (captchaInput !== "91WG") {
        alert("Incorrect Captcha. Please try again.");
        return;
    }

    alert("Eligibility check submitted successfully!");
});

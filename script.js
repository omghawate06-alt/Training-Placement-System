// Show a welcome message
function showWelcome() {
    alert("Welcome to Training and Placement Cell Management System!");
}

// Validate student application form
function validateApplication() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();

    if (name === "" || email === "") {
        alert("Please enter your name and email.");
        return false;
    }

    alert("Your form is ready for submission. Backend connection is not added yet.");
    return false;
}

// Simple login demo
function demoLogin() {
    alert("Login feature will be connected to the backend later.");
}

function validateUsername() {
    var username = document.getElementById("exampleInputUsername1").value;
    var regex = /^[A-Za-z]+$/;
    var usernameError = document.getElementById("usernameError");
    var usernameField = document.getElementById("exampleInputUsername1");
    var emailField = document.getElementById("exampleInputEmail1");

    if (username === "" || !regex.test(username)) {
        usernameError.style.display = "inline";
        usernameField.classList.add("error");
        emailField.disabled = true; 
    } else {
        usernameError.style.display = "none";
        usernameField.classList.remove("error");
        emailField.disabled = false; 
    }
}

function validateEmail() {
    var email = document.getElementById("exampleInputEmail1").value;
    var emailError = document.getElementById("emailError");
    var emailField = document.getElementById("exampleInputEmail1");


    var regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "" || !regex.test(email)) {
        emailError.style.display = "inline";
        emailField.classList.add("error");
        return false;
    } else {
        emailError.style.display = "none";
        emailField.classList.remove("error");
        return true;
    }
}

function validateForm(event) {
    event.preventDefault();
    validateUsername();
    if (validateEmail()) {
        var username = document.getElementById("exampleInputUsername1").value;
        window.location.href = "main.html?username=" + encodeURIComponent(username);
    }
}

// Add event listeners
document.getElementById("exampleInputUsername1").addEventListener("blur", validateUsername);
document.getElementById("exampleInputEmail1").addEventListener("blur", validateEmail);
document.getElementById("signInForm").addEventListener("submit", validateForm);



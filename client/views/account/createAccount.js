var errorMsgDiv, emailDiv, passwordDiv, confirmDiv;

Template.createAccount.events({
    "submit form": function(evt){
        resetForm();

        evt.preventDefault();
        var email = $(evt.target).find("[name=email]").val();
        var password = $(evt.target).find("[name=password]").val();
        var confirmPassword = $(evt.target).find("[name=confirmPassword]").val();
        if(validate(email, password, confirmPassword)){
            Accounts.createUser({
                email: email,
                password: password
            }, createAccountCallback);
        }
    }
});

function validate(email, password, confirmPassword){
    var valid = true;
    var regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    // Check the email
    if(email === ""){
        emailDiv.className += " has-error";
        errorMsgDiv.innerHTML += "&bull; Please enter your email address.<br>";
        valid = false;
    } else if(!regex.test(email)){
        emailDiv.className += " has-error";
        errorMsgDiv.innerHTML += "&bull; Invalid email address. Email must have the following form: name@domain.com<br>";
        valid = false;
    }

    // Check the password
    if(password === ""){
        passwordDiv.className += " has-error";
        errorMsgDiv.innerHTML += "&bull; Please enter a password.<br>";
        valid = false;
    } else if(password.length < 8){
        passwordDiv.className += " has-error";
        errorMsgDiv.innerHTML += "&bull; Password is too short. It must be 8 characters or longer.<br>";
        valid = false;
    }

    // Check the password confirmation
    if(confirmPassword === ""){
        confirmDiv.className += " has-error";
        errorMsgDiv.innerHTML += "&bull; Please enter the password confirmation.";
        valid = false;
    } else if(password !== confirmPassword){
        confirmDiv.className += " has-error";
        errorMsgDiv.innerHTML += "&bull; The password confirmation does not match the given password. Try again.";
        valid = false;
    }

    return valid;
}

function createAccountCallback(error){
    if(error){
        errorMsgDiv.innerHTML = "Error: " + error.reason;
        console.log(error.reason);
    }
    else {
        Router.go("/feeds");
    }
}


function resetForm(){
    errorMsgDiv = document.getElementById("error-message");
    emailDiv = document.getElementById("email").parentNode;
    passwordDiv = document.getElementById("password").parentNode;
    confirmDiv = document.getElementById("confirmPassword").parentNode;

    emailDiv.className = "form-group";
    passwordDiv.className = "form-group";
    confirmDiv.className = "form-group";
    errorMsgDiv.innerHTML = "";
}

Template.createAccount.events({
  "submit form": function(evt){
    evt.preventDefault();
    var password = $(evt.target).find("[name=password]").val();
    var confirmPassword = $(evt.target).find("[name=confirmPassword]").val();
    if(validatePassword(password, confirmPassword)){
      Accounts.createUser({
        email: $(evt.target).find("[name=email]").val(),
        password: password
      }, createAccountCallback);
    }
  }
});

function createAccountCallback(error){
  if(error){
    console.log(error.reason);
  }
  else {
    Router.go("/feeds");
  }
}

function validatePassword(password, confirmPassword){
  if(password.length < 8){
    console.log("Password length too short. Must be 8 characters or longer");
    return false;
  }
  else if(password !== confirmPassword){
    console.log("Passwords don't match.");
    return false;
  }
  else {
    return true;
  }
}

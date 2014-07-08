Template.createAccount.events({
  "submit form": function(evt){
    evt.preventDefault();
    var password = $(evt.target).find("[name=password]").val();
    var confirmPassword = $(evt.target).find("[name=confirmPassword]").val();
    if(validatePassword(password, confirmPassword)){
      Accounts.createUser({
        email: $(evt.target).find("[name=email]").val(),
        password: password
      }, Router.go("/feeds"));
    }
    else{
      console.log("Passwords don't match or password not valid");
    }
  }
});

function validatePassword(password, confirmPassword){
  return (password.length >= 8 && password === confirmPassword);
}

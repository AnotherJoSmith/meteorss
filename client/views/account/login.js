Template.login.events({
  "submit form": function(evt){
    evt.preventDefault();

    Meteor.loginWithPassword(
      $(evt.target).find("[name=email]").val(),
      $(evt.target).find("[name=password]").val(),
      loginCallback
    );
  }
});

function loginCallback(error){
  if(error){
      document.getElementById("error-message").innerHTML = "Invalid email or password. Please try again!";
  }
  else {
    Router.go("/feeds");
  }
}

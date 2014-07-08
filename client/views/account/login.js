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
    console.log("Invalid email or password. Please try again!"); //Place error message
  }
  else {
    Router.go("/feeds");
  }
}

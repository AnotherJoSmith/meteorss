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
    console.log("Nice try");
  }
  else {
    Router.go("/feeds");
  }
}

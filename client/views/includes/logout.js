Template.logout.events({
  "submit form": function(evt){
    evt.preventDefault();
    Meteor.logout(logoutCallback);
  }
});

function logoutCallback(error){
  if(error){
    console.log("Error logging out.");
  }
  else {
    Router.go("/");
  }
}

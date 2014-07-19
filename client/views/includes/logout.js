Template.logout.helpers({
  userEmail: function(){
    return Meteor.user().emails[0].address;
  }
})

Template.logout.rendered = function(){
  $("#logout").sticky({topSpacing: 0});
}

function logoutCallback(error){
  if(error){
    console.log("Error logging out.");
  }
  else {
    Router.go("/");
  }
}

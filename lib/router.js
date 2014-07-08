Router.map(function() {
    this.route('login', {
      path: '/',
      onBeforeAction: function(){
        if(Meteor.loggingIn() || Meteor.user()){
          this.redirect('viewFeeds');
        }
      }});
    this.route('createAccount');
    this.route('forgotPassword');
    this.route('viewFeeds', {path: '/feeds'});
});

var requireLogin = function(pause){
    if(!Meteor.user() && !Meteor.loggingIn()){
      this.render('login');
      pause();
    }
};

var selectLayout = function(pause){
  if(Meteor.loggingIn() || Meteor.user()){
    this.router.layout("layout");
  }
  else{
    this.router.layout("loggedOutLayout");
  }
};

Router.onBeforeAction(selectLayout);
Router.onBeforeAction(requireLogin, {except: ['login', 'forgotPassword', 'createAccount']});

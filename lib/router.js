Router.configure({
  waitOn: function(){
    if(Meteor.userId()){
      return Meteor.subscribe("articles");
    }
  }
});

Router.map(function() {
    this.route('login', {
      path: '/',
      onBeforeAction: function(){
        if(Meteor.userId()){
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
  if(Meteor.userId()){
    this.router.layout("layout");
  }
  else{
    this.router.layout("loggedOutLayout");
  }
};

Router.onBeforeAction(selectLayout);
Router.onBeforeAction(requireLogin, {except: ['login', 'forgotPassword', 'createAccount']});

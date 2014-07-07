//Router.configure({
//    layoutTemplate: ''
//});

Router.map(function() {
    this.route('login', {path: '/'});
    this.route('createAccount');
    this.route('forgotPassword');
    this.route('viewFeeds', {path: '/feeds'});
});


var requireLogin = function(pause){
    if(!Meteor.user()){
        if(Meteor.loggingIn())
        this.render('accessDenied');
        pause();
    }
}

Router.onBeforeAction

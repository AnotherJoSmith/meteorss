Template.sidebar.events({
  "click #sync-feeds": function(evt){
    $("#sync-feeds").button("loading");
    Meteor.call("refreshFeeds", function(error){
      $("#sync-feeds").button("reset");
      if(error){
        console.log(error);
      }
    });
  },

  "click .sidebar-brand > li > a": function(evt){
    selectFeed(evt.target.className);
  },

  "click .sidebar-nav > li > a": function(evt){
    changeFolder(evt.target.id);
  }
});

Deps.autorun(function(){
  if(Meteor.user()&& Meteor.user().profile.tutorial){
    Meteor.users.update({_id: Meteor.user()._id}, {$set: {"profile.tutorial": false}});
    doTrip();
  }
});

function doTrip(){
  var trip = new Trip([
    {
      content: 'Meteorss is a simple RSS reader that permits you to add and organize your RSS feeds!. This short tutorial will guide you through Meteorss\' main features.',
      position: 'screen-center',
      sel: $("body")
    },
    {
      sel: $('#add-feed'),
      content: 'Click here to add a new RSS feed to your profile!',
      position: 's'
    },
    {
      sel: $("#sync-feeds"),
      content: 'Click here to sync your current feeds with the latest content.',
      position: 'e'
    },
    {
      sel: $("#folders .sidebar-nav"),
      content: 'These folders allow you to organize your feeds by themes.',
      position: 'e'
    },
    {
      sel: $(".sidebar-foot"),
      content: 'Click here to manage your feeds and folders. This is where you can add new folders and remove unwanted feeds and folders.',
      position: 'e'
    },
    {
      sel: $("#logout button"),
      content: 'Once you are done, click here to logout!',
      position: 'w'
    }
  ],{
    showNavigation: true,
    showCloseBox: true,
    delay: -1,
    tripTheme: 'yeti'
  });
  trip.start();
}

activeFolder = $("#Inbox");

function selectFeed(feedClasses){
  var feedName = feedClasses.replace("selected bg-primary", "");
  var active = activeFolder.parent().find("." + feedName);
  setActive(active);
}

function changeFolder(folder){
  var active = $("#" + folder);
  var old =  $(".selected").attr("id");

  if(!activeFolder.is(active)) {
    if (old != "Inbox" && old != "Shared") {
      closeFolder(activeFolder);
    }
    if (folder != "Inbox" && folder != "Shared") {
      openFolder(active);
    }
  }
  else {
    closeFolder(activeFolder);
    active = $("#Inbox");
  }

  activeFolder = active;
  setActive(active);
}

function closeFolder(folder){
  folder.children(".glyphicon").removeClass("glyphicon-folder-open").addClass("glyphicon-folder-close");
  folder.parent().children("ul").slideUp();
}


function openFolder(folder){
  folder.children(".glyphicon").removeClass("glyphicon-folder-close").addClass("glyphicon-folder-open");
  folder.parent().children("ul").slideDown();
}

function setActive(active){
  if(!active.hasClass("selected")) {
    $(".selected.bg-primary").removeClass("selected bg-primary");
    active.addClass("selected bg-primary");
  }
}

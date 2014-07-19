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

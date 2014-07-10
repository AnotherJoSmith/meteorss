var folderOpen = "glyphicon glyph-pad glyphicon-folder-open";
var folderClose = "glyphicon glyph-pad glyphicon-folder-close";


Meteor.methods({
    changeFolder: function(folder) {
        var active = document.getElementById(folder);
        var old =  document.getElementsByClassName("selected")[0];

        if(old.id != "Inbox" && old.id != "Shared"){
            old.firstChild.className = folderClose;
        }

        if(folder != "Inbox" && folder != "Shared"){
            active.firstChild.className = folderOpen;
        }

        document.getElementsByClassName("selected")[0].className = "";
        active.className = "bg-primary selected";
    }
});

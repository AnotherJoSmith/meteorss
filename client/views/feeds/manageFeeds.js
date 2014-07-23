Template.manageFeeds.events({
    "click .feed-list > li > span": function(evt){
        if(!$(evt.target).hasClass("glyphicon")) {
            selectFeed(evt.target);
        }
        else if($(evt.target).hasClass("remove-feed")) {
            removeFeed($(evt.target).parent());
        } else{
            undoFeed($(evt.target).parent());
        }
    }
});

function selectFeed(feed){
    $(".feed-list").find(".bg-primary").removeClass("bg-primary");
    $(feed).addClass("bg-primary");
}

function removeFeed(feedItem){
    feedItem.children().eq(1).addClass("strike-item").fadeTo("fast", 0.5);
    feedItem.children().eq(0).removeClass("glyphicon-minus-sign remove-feed").addClass("glyphicon-plus-sign undo-remove-feed");
}

function undoFeed(feedItem){
    feedItem.children().eq(1).removeClass("strike-item").fadeTo("fast", 1);
    feedItem.children().eq(0).removeClass("glyphicon-plus-sign undo-remove-feed").addClass("glyphicon-minus-sign remove-feed");
}
Template.manageFeeds.events({
    "click .feed-list > li > span": function(evt){
        if(!$(evt.target).hasClass("glyphicon")) {
            selectFeed(evt.target);
        }

    }
});

function selectFeed(feed){
    $(".feed-list").find(".bg-primary").removeClass("bg-primary");
    $(feed).addClass("bg-primary");
}
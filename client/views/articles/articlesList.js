Template.articlesList.helpers({
  articles: function(){
    return Articles.find({}, {sort: {pubdate: -1}, limit: 50});
  }
});

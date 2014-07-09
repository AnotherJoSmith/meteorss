Template.articlesList.helpers({
  articles: function(){
    return Articles.find({});
  }
});

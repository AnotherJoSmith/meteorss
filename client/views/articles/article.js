Template.article.helpers({
  domain: function(){
    var a = document.createElement('a');
    if(this.origlink){
      a.href = this.origlink;
    }
		else {
      a.href = this.link;
    }
		return a.hostname;
  },

  localDate: function(){
    return this.pubdate.toLocaleString();
  }
});

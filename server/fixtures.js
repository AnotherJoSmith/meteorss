if(Feeds.find().count() === 0){
  Feeds.insert({
    "url": "http://feeds.bbci.co.uk/news/world/rss.xml"
  });
}

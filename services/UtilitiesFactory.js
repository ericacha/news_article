newsArticle.factory('UtilitiesFactory', function() {
  var factory = {};
  factory.findById = function(collection, id) {
    for (var i = 0; i < collection.length; i++) {
      if (collection[i].id == id) {
        return collection[i];
      }
    }
    return null;
  };
  return factory;
});

//loops through the articles and returns the articles id

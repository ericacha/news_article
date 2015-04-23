newsArticle.factory('ArticlesFactory', function ArticlesFactory() {
  var factory = {};
  factory.articles = [];
  factory.addArticle = function() {
    // factory.articles.push({ user: factory.userName, title:factory.artTitle, site:factory.artSite, id: factory.articles.length + 1, comments: [] ,vote:factory.vote});
    factory.articles.push({ user: factory.userName, title:factory.artTitle, site:factory.artSite, id: factory.articles.length + 1, comments: [] ,likes:0});
    factory.userName = null;
    factory.artTitle = null;
    factory.artSite = null;
  };

  return factory;
});

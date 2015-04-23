var newsArticle = angular.module('newsArticle', ['ui.router']);
newsArticle.config(function($stateProvider) {
  $stateProvider.state('home', {
    url: "",
    templateUrl: "partials/home.html"
  });

  $stateProvider.state('articles', {
    url: "/articles",
    templateUrl: "partials/articles.html",
    controller: 'ArticlesCtrl'
  });

  $stateProvider.state('articles.comments', {
    url: "/:articleId", //this variable is from article.html where we assigned it on articles.comments
    templateUrl: "partials/articles.comments.html",
    controller: 'CommentsCtrl'
  });


});

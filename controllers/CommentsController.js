newsArticle.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, ArticlesFactory, UtilitiesFactory) {
  $scope.article = UtilitiesFactory.findById(ArticlesFactory.articles, $stateParams.articleId);
    $scope.addComment = function() {
    $scope.article.comments.push({ name: $scope.commentor, text:$scope.commentText});
    $scope.commentor = null;
    $scope.commentText = null;
  }
});

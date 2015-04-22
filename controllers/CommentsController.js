newsRoster.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, NewsFactory, UtilitiesFactory) {
    //   the method includes an argument we are plugging in (collection, id) = courses and id
    $scope.page = UtilitiesFactory.findById(NewsFactory.pages, $stateParams.pageId );
    $scope.addComment = function() {
        alert($scope.page.webPage);
        $scope.page.comments.push({ user:$scope.commentName, text: $scope.commentText, vote: $scope.commentVote });
        $scope.commentName = null;
        $scope.commentText = null;
        $scope.commentVote = null;


    }

});

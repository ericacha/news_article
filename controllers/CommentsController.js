newsRoster.controller('CommentsCtrl', function CommentsCtrl($scope, $stateParams, NewsFactory, UtilitiesFactory) {
    //   the method includes an argument we are plugging in (collection, id) = courses and id
    $scope.page = UtilitiesFactory.findById(NewsFactory.pages, $stateParams.pageId );
    $scope.addComments = function() {
        $scope.page.comments.push({ commentName:$scope.commentName, text: $scope.commentText, vote: $scope.commentVote });
        $scope.commentName = null;
        $scope.commentText = null;
        $scope.commentVote = null;


    }

});

newsRoster.controller('PagesCtrl', function PagesCtrl($scope, NewsFactory) {
    $scope.pages = NewsFactory.pages;
    $scope.NewsFactory = NewsFactory;
});

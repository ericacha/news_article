var newsRoster = angular.module('newsRoster', ['ui.router']);

    newsRoster.config(function($stateProvider) {
        $stateProvider.state('home', {
            url: "",
            templateUrl:"partials/home.html"
        });

        $stateProvider.state('pages', {
            url: "/pages",
            templateUrl:"partials/pages.html",
            controller: 'PagesCtrl'
        });

        $stateProvider.state('pages.comments', {
            url: "/:pageId",
            templateUrl:"partials/pages.comments.html",
            controller: 'CommentsCtrl'
        });

});

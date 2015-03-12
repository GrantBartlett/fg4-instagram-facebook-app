angular.module('fg4InstagramApp').config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: "app/components/home/homeView.html",
            controller: "HomeIndexController",
            controllerAs: "HomeCtrl"
        })

        .when('/recent', {
            templateUrl: "app/components/recent/recentView.html"
        })

});
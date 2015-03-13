angular.module('fg4InstagramApp').config(function ($routeProvider) {
    $routeProvider

        .when('/', {
            templateUrl: "app/components/home/homeView.html",
            controller: "HomeController",
            controllerAs: "HomeCtrl"
        })
});
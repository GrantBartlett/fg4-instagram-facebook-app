'use strict';

angular.module('fg4InstagramApp').controller('HomeController', ['$scope', '$http' , '$rootScope', 'feed', 'image', function ($scope, $http, $rootScope, feed, image) {

    $scope.instagramFeed = [];

    feed.success(function (data) { $scope.instagramFeed = data.data; });

    $scope.imgLoadedEvents = image;

}]);
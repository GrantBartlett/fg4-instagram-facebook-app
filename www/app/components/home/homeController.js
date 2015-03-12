'use strict';

var clientId = 'a6c4d47e96454db99bffbc3e508799c9',
    userId = '1638052746';


angular.module('fg4InstagramApp')

    .controller('HomeIndexController', function ($scope, $http) {

        $scope.instagramFeed = [];

        $http.jsonp('https://api.instagram.com/v1/users/' + userId + '/media/recent/?client_id=' + clientId + '&callback=JSON_CALLBACK')
            .success(function (data) {
                $scope.instagramFeed = data.data;
                console.log(data);
            })
    });


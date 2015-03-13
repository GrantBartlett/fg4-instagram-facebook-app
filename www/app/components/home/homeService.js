'use strict';

angular.module('fg4InstagramApp')
    .factory('api', function () {

    var clientId = 'a6c4d47e96454db99bffbc3e508799c9',
        userId = '1638052746';

    return {
        clientId : clientId,
        userId : userId
    }

})
    .factory('feed', function ($http, api){

    // Fetch and push new data into array
    return $http.jsonp('https://api.instagram.com/v1/users/' + api.userId + '/media/recent/?client_id=' + api.clientId + '&callback=JSON_CALLBACK');


    })

    .factory('image', function ($rootScope){

        return {
            done: function (instance) {
                angular.element(instance.elements[0]).addClass('loaded');
                $rootScope.packery.layout();
            },

            fail: function (instance) {
                // Do stuff
                //console.log("Fail, images not loaded. " + $scope.imagesHaveLoaded);
            }
        }

    })
;
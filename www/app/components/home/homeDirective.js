'use strict';

angular.module('fg4InstagramApp').directive('packeryListing', ['$rootScope', function ($rootScope) {
    return {
        restrict: 'A',
        link: function (scope, element, attrs) {

            console.log("We have permission to load Packery now!");
            if ($rootScope.packery === undefined || $rootScope.packery === null) {
                console.log('Init Packery Awesomeness!');
                $rootScope.packery = new Packery(element[0].parentElement, {itemSelector: '.col-md-4'});
                $rootScope.packery.bindResize();
                $rootScope.packery.appended(element[0]);
                $rootScope.packery.items.splice(1, 1); // hack to fix a bug where the first element was added twice in two different positions
            }
            else {
                $rootScope.packery.appended(element[0]);
            }



        }
    };
}]);
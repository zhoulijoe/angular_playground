'use strict';

angular.module('myangularApp')
  .controller('AboutCtrl', ['$scope', '$location', '$anchorScroll', function ($scope, $location, $anchorScroll) {
    $scope.scrollTo = function(hash) {
      if ($location.hash() !== hash) {
        $location.hash(hash);
      } else {
        $anchorScroll();
      }
    };
  }]);

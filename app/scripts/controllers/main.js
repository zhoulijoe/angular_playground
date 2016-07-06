'use strict';

/**
 * @ngdoc function
 * @name myangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myangularApp
 */
angular.module('myangularApp')
  .controller('MainCtrl', function ($scope, $resource, ENV, API_BASE_URL) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

    $scope.env = ENV;

    $scope.btnClicked = function() {
      $resource(API_BASE_URL + 'accounts/users/:userId/').get({userId: 1}).$promise
        .then(function(response) {
          $scope.apiResult = 'User: {id: ' + response.id + ', fullName: ' + response.fullName + '}';
        });
    };
  });

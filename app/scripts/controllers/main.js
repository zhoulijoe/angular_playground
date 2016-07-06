'use strict';

/**
 * @ngdoc function
 * @name myangularApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myangularApp
 */
angular.module('myangularApp')
  .controller('MainCtrl', function ($scope, ENV) {
    $scope.ENV = ENV;

    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });

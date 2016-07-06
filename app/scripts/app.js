'use strict';

/**
 * @ngdoc overview
 * @name myangularApp
 * @description
 * # myangularApp
 *
 * Main module of the application.
 */
angular
  .module('myangularApp', [
    'ngAnimate',
    'ngAria',
    'ngCookies',
    'ngMessages',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'config'
  ])
  .config(function ($locationProvider, $resourceProvider) {
    $locationProvider.html5Mode(true);
    $resourceProvider.defaults.stripTrailingSlashes = false;
  })
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

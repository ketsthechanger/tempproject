'use strict';

/**
 * @ngdoc overview
 * @name group1CapstoneApp
 * @description
 * # group1CapstoneApp
 *
 * Main module of the application.
 */
angular
  .module('group1CapstoneApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      //.when('/', {
      //  templateUrl: 'views/listDishes.html',
      //  controller: 'MainCtrl',
      //  controllerAs: 'main'
      //})
      .when('/listJourneys', {
        templateUrl: 'views/listJourneys.html',
        controller: 'listJourneysCtrl',
        controllerAs: 'listJourneys'
      })
      .when('/listDishes', {
        templateUrl: 'views/listDishes.html',
        controller: 'listDishesCtrl',
        controllerAs: 'listDishes'
      })
      .when('/listChallenges', {
        templateUrl: 'views/listChallenges.html',
        controller: 'listChallengesCtrl',
        controllerAs: 'listChallenges'
      })
      .otherwise({
        redirectTo: 'views/404.html'
      });
  });

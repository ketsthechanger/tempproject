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
    'ngTouch',
    'ngStorage' //Tomo Add
  ])
  .config(function ($routeProvider) {
    $routeProvider
    //.when('/', {
    //  templateUrl: 'views/listDishes.html',
    //  controller: 'MainCtrl',
    //  controllerAs: 'main'
    //})
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })//Tomo Add
      .when('/listJourneys', {
        templateUrl: 'views/listJourneys.html',
        controller: 'listJourneysCtrl',
        controllerAs: 'listJourneys'
      })
      .when('/listDishes/:journey', { //Tomo Modify--WHen you select "American" on journey list , ":journey"'s value will be "American"
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

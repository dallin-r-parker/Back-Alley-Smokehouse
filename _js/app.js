angular.module('backAlley', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './_js/home/home.html',
        controller: 'homeCtrl'

      })
      .state('menu', {
        url: '/menu',
        templateUrl: './_js/menu/menu.html',
        controller: 'menuCtrl'

      })
      .state('bag', {
        url: '/bag',
        templateUrl: './_js/bag/bag.html',
        controller: 'bagCtrl'

      })
      .state('swag', {
        url: '/swag',
        templateUrl: './_js/swag/swag.html',
        controller: 'swagCtrl'

      })
      .state('about', {
        url: '/about',
        templateUrl: './_js/about/about.html',
        controller: 'aboutCtrl'

      })


})

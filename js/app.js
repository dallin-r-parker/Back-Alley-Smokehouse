angular.module('backAlley', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $urlRouterProvider.otherwise('/');

  $stateProvider
      .state('home', {
        url: '/',
        templateUrl: './js/home/home.html',
        controller: 'homeCtrl'

      })
      .state('menu', {
        url: '/menu',
        templateUrl: './js/menu/menu.html',
        controller: 'menuCtrl'

      })
      .state('bag', {
        url: '/bag',
        templateUrl: './js/bag/bag.html',
        controller: 'bagCtrl'

      })
      .state('contact', {
        url: '/contact',
        templateUrl: './js/contact/contact.html',
        controller: 'contactCtrl'

      })



})

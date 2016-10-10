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
      .state('contact', {
        url: '/contact',
        templateUrl: './_js/contact/contact.html',
        controller: 'contactCtrl'

      })
    


})

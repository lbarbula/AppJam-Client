angular
  .module('aprilFools', ['ui.router', 'ui.materialize'])
  .config(['$stateProvider', '$urlRouterProvider', '$locationProvider', function($stateProvider, $urlRouterProvider, $locationProvider){
    $urlRouterProvider.otherwise('/')
    $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'templates/home.html',
      controller: 'home-controller'
    }).state('add', {
      url: '/add',
      templateUrl: 'templates/add.html',
      controller: 'post-controller'
    })
    $locationProvider.html5Mode(true)
  }])

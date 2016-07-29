angular
  .module('aprilFools')
  .controller('home-controller', ['$scope', 'prankFactory', function($scope, prankFactory) {
    $scope.view = {}
    $scope.view.message = "Hello World!"
  }])

angular
  .module('aprilFools')
  .controller('home-controller', ['$scope', 'prankFactory', function($scope, prankFactory) {
    $scope.view = {}
    $scope.show = function () {
      $scope.view.visible = true
    }
    $scope.generate = function () {
      prankFactory.get
      .then(function(data){
        console.log(data)
        $scope.view.data = prankFactory.random(data)
        console.log($scope.view.data)
      })
    }
    prankFactory.get
    .then(function(data){
      console.log(data)
      $scope.view.data = prankFactory.random(data)
      console.log($scope.view.data)
    })  
  }])

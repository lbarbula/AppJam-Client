angular
  .module('aprilFools')
  .controller('home-controller', ['$scope', 'prankFactory', function($scope, prankFactory) {
    $scope.view = {}
    $scope.prank = {}
    $scope.show = function () {
      $scope.view.visible = true
    }
    $scope.generate = function () {
      prankFactory.get
      .then(function(data){
        $scope.view.data = prankFactory.random(data)
      })
    }
    $scope.addPrank = function (body) {
      prankFactory.post(body)
      $scope.prank = {}
    }
    $scope.regenerate = function () {
      window.location.reload()
    }
  }])

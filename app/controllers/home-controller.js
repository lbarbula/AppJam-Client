angular
  .module('aprilFools')
  .controller('home-controller', ['$scope', 'prankFactory', function($scope, prankFactory) {
    $scope.view = {}
    $scope.view.data = prankFactory.get
      .then(function(data){
        console.log(data)
        return data
      })
  }])

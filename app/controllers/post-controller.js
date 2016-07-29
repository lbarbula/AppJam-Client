angular
  .module('aprilFools')
  .controller('post-controller', ['$scope', 'prankFactory', function($scope, prankFactory){
    $scope.view = {}
    prankFactory.get
      .then(function(data){
        $scope.view.data = data
      })
      $scope.delete = (id) => {
        prankFactory.delete(id)
      }
  }])

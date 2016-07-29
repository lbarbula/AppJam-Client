angular
  .module('aprilFools')
  .controller('post-controller', ['$scope', function($scope){
    $scope.view = {}
    $scope.view.message = "post world"
  }])

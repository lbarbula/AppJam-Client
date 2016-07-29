angular
  .module('aprilFools')
  .controller('post-controller', ['$scope', 'prankFactory', function($scope, prankFactory){
    $scope.view = {}
    console.log('running page2')
    prankFactory.get()
      .then(function(data){
        $scope.view.data = data
      })
    $scope.delete = (id) => {
      prankFactory.delete(id)
        .then(function () {
          prankFactory.get()
          .then(function(data){
            console.log("data", data);
            $scope.view.data = data
          })
        })
    }
    $scope.editPrank = function (body) {
      console.log(body)
      prankFactory.put(body)
        .then(function(){
          prankFactory.get()
            .then(function(data){
              $scope.view.data = data
            })
        })
    }
  }])

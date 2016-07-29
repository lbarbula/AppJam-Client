angular
  .module('aprilFools')
  .factory('prankFactory', ['$http', function($http){
    return  {
      get: $http.get('')
        .then(function(data){
          console.log(data)
        })
    }
  }])

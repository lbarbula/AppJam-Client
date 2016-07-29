angular
  .module('aprilFools')
  .factory('prankFactory', ['$http', function($http){
    return  {
      get: $http.get('data.json')
        .then(function(data){
          let results = data.data
          return results
        })
    }
  }])

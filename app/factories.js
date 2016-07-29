angular
  .module('aprilFools')
  .factory('prankFactory', ['$http', function($http){
    return  {
      get: $http.get('https://appjamserv.herokuapp.com/')
        .then(function(data){
          let results = data.data
          return results
        }),
      random: (array)=> {
        return array[Math.floor(Math.random() * array.length)];
    },
      post: (body) => {
        $http.post('https://appjamserv.herokuapp.com/', body)
      }
  }
  }])

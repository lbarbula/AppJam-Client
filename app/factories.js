angular
  .module('aprilFools')
  .factory('prankFactory', ['$http','$q', function($http, $q){
    return  {
      get: function () {

      return $http.get('https://appjamserv.herokuapp.com/')
        .then(function(data){
          let results = data.data
          return $q.resolve(results)
        })
      },
      random: (array)=> {
        return array[Math.floor(Math.random() * array.length)];
    },
      post: (body) => {
        $http.post('https://appjamserv.herokuapp.com/', body)
      },
      delete: (id) => {
        return $http.delete('https://appjamserv.herokuapp.com/' + id)
      },
      put: (body) => {
        return $http.put('https://appjamserv.herokuapp.com/' + body.id, body)
      }
  }
  }])

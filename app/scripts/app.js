/**
* Created by James on 14/03/15.
*/

angular.module('Proverbial', ['ngRoute', 'ngResource']);

angular.module('Proverbial').factory('proverbs', ['$http', function($http) {

  this.lang = 'en';

  return $http.get("../source/en.json");
  
}]);

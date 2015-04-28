/**
* Created by James on 14/03/15.
*/

angular.module('Proverbial', ['ngRoute', 'ngResource']);

angular.module('Proverbial').factory('proverbs', function() {
  $http.get("../source/" + this.lang + ".json")
  .success(function(response) {
    $scope.proverbs = response;
  });
});

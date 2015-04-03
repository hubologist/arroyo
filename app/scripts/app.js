/**
 * Created by James on 14/03/15.
 */

angular.module('Proverbial', ['ngRoute', 'ngResource']);

angular.module('Proverbial').controller('proverbial', ['$scope', '$http', function($scope, $http) {

  this.lang = "en";

  this.selectLang = function(lang) {
    this.lang = lang;
  };

  this.activeLang = function(lang) {
    return this.lang === lang;
  }

  this.gallerySize = 25;

  this.randomize = function(arr) {
    for(var j, x, i = arr.length; i; j = Math.floor(Math.random() * i), x = arr[--i], arr[i] = arr[j], arr[j] = x);
    return arr;
  }

  $http.get("../source/" + this.lang + ".json")
    .success(function(response) {
      $scope.proverbs = response;
    });

  $scope.click = function(lang) {
    var response = $http.get("../source/" + lang + ".json");

    this.lang = lang || "en";

    response.success(function(response) {
      console.log("User selected: " + lang),
      $scope.proverbs = response;
    });
    response.error(function(data, status, headers, config) {
      alert("There was an error processing your request.");
    });

  };

}]);

angular.module('Proverbial')
.controller('IndexCtrl', ['$scope', '$http', function($scope, $http) {

  this.lang = "en";

  this.selectLang = function(lang) {
    this.lang = lang;
  };

  this.activeLang = function(lang) {
    return this.lang === lang;
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

}])
.controller('ProverbCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {

  $http.get("../source/en.json")
  .success(function(response) {
    $scope.proverb = response[$routeParams.id];
  });

}]);

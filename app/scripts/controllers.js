angular.module('Proverbial')
.controller('IndexCtrl', ['$scope', '$http', 'proverbs', function($scope, $http, proverbs) {


    this.lang = "en";

    this.selectLang = function(lang) {
        this.lang = lang;
    };

    console.log("Attempting to load all proverbs. Selected language: " + this.lang);

    this.activeLang = function(lang) {
        return this.lang === lang;
    }

    proverbs.success(function(data){
        $scope.proverbs = data;
    });


}])
.controller('ProverbCtrl', ['$scope', '$http', '$routeParams', 'proverbs', function($scope, $http, $routeParams, proverbs) {
    // Defining previous and next proverb IDs to allow for navigation
    current = parseInt($routeParams.id);
    $scope.backward = current - 1;
    $scope.forward = current + 1;

    // Checking in
    console.log("Attempting to load single proverb. ID: " + current);

    // Getting our data from the proverbs factory
    proverbs.success(function(data){
        $scope.proverb = data[current];
    });
}]);

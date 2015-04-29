angular.module('Proverbial')
.controller('NavCtrl', ['$rootScope', '$scope', function($rootScope, $scope) {

}])
.controller('IndexCtrl', ['$scope', '$rootScope', '$http', '$routeParams', function($scope, $rootScope, $http, $routeParams) {

    // Checking in
    console.log("Attempting to load all proverbs. Selected language:" + $routeParams.lang);

    // Unloading proverb data
    $scope.lang = $routeParams.lang;

    $http.get("../source/" + $routeParams.lang + ".json").success(function(data) {
        $scope.proverbs = data;
    });

}])
.controller('ProverbCtrl', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams) {
    // Defining previous and next proverb IDs to allow for navigation
    current = parseInt($routeParams.id);
    $scope.backward = current - 1;
    $scope.forward = current + 1;
    $scope.lang = $routeParams.lang;

    // Checking in
    console.log("Attempting to load single proverb. lang: " + $routeParams.lang + " ID: " + $routeParams.id);

    // Checking in
    $http.get("../source/" + $routeParams.lang + ".json").success(function(data) {
        $scope.proverb = data[$routeParams.id];
    });
}]);

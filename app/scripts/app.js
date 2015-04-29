/**
* Created by James on 14/03/15.
*/

angular.module('Proverbial', ['ngRoute', 'ngResource']);

/*
angular.module('Proverbial')
.factory('proverbs', ['$http', '$rootScope', function($http, $rootScope) {
    alert($rootScope.lang);
    return $http.get("../source/" + $rootScope.lang +".json");
}]);

angular.module('Proverbial').factory('Proverbs', ['$http', function($http) {
    return function() {
        $http.get("../source/en.json");
    };
}]);
*/

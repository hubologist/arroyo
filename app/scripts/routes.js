/**
 * Created by James on 17/03/15.
 */

angular.module('Proverbial').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      redirectTo: '/one'
    })
    .when('/one', {
      templateUrl: "app/templates/one/index.html",
      controller: "oneController"
    })
    .when('/all', {
      templateUrl: "app/templates/all/index.html",
      controller: "allController"
    })
});

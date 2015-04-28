/**
 * Created by James on 17/03/15.
 */

angular.module('Proverbial').config(function($routeProvider) {
  $routeProvider
    .when('/', {
      templateUrl: 'templates/index.html',
      controller: 'IndexCtrl'
    })
    .when('/proverb/:id', {
      templateUrl: 'templates/proverb.html',
      controller: 'ProverbCtrl'
    })
});

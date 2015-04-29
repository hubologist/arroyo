/**
* Created by James on 17/03/15.
*/

angular.module('Proverbial').config(function($routeProvider) {
    $routeProvider
    .when('/:lang/:id', {
        templateUrl: 'templates/proverb.html',
        controller: 'ProverbCtrl'
    })
    .when('/:lang', {
        templateUrl: 'templates/index.html',
        controller: 'IndexCtrl'
    })
    .when('/', {
        templateUrl: 'templates/index.html',
        controller: 'IndexCtrl'
    })

});

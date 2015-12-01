'use strict';

// Declare app level module which depends on views, and components
angular.module('kanban', [
  'ngRoute',
  'kanban.board',
  'dndLists'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/board'});
}]);

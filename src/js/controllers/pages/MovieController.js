define([
  'angular',
  'directives/PersonButton',
  'directives/PlanetButton',
  'directives/StarshipButton',
  'directives/VehicleButton'
], function (angular, personButton, planetButton, starshipButton, vehicleButton) {
  var scope = {};
  scope.moduleName = 'Movie';
  scope.pageTitle = 'Filmes Star Wars';
  scope.controllerName = scope.moduleName + 'Controller';
  scope.slug = '/movie/:slug';
  scope.templateName = 'movie.html';
  scope.app = angular.module(scope.moduleName, [personButton.moduleName, planetButton.moduleName, starshipButton.moduleName, vehicleButton.moduleName]);

  scope.app.controller(scope.controllerName, function ($scope, $stateParams, $rootScope) {
    var i;
    $scope.scope = scope;
    $scope.slug = $stateParams.slug;
  });
  return scope;
});
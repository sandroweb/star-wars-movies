define([
  'angular',
  'services/PlanetService',
  'directives/MovieButton',
  'directives/PersonButton',
], function (angular, planetService, movieButton, personButton) {
  var scope = {};
  scope.moduleName = 'Planet';
  scope.pageTitle = 'Filmes Star Wars';
  scope.controllerName = scope.moduleName + 'Controller';
  scope.slug = '/planet/:id';
  scope.templateName = 'planet.html';
  scope.app = angular.module(scope.moduleName, [planetService.moduleName, movieButton.moduleName,personButton.moduleName]);

  scope.app.controller(scope.controllerName, function ($scope, $stateParams, $rootScope, PlanetService) {
    var i;
    $scope.scope = scope;
    $scope.id = $stateParams.id;
    $scope.data = {};
    PlanetService.getPlanetByAPIUrl(PlanetService.getPlanetApiUrlById($scope.id), function (response) {
      $scope.data = response;
    });
  });
  return scope;
});
define([
  'angular',
  'services/StarshipService',
  'directives/MovieButton',
], function (angular, starshipService, movieButton) {
  var scope = {};
  scope.moduleName = 'Starship';
  scope.pageTitle = 'Filmes Star Wars';
  scope.controllerName = scope.moduleName + 'Controller';
  scope.slug = '/starship/:id';
  scope.templateName = 'starship.html';
  scope.app = angular.module(scope.moduleName, [starshipService.moduleName, movieButton.moduleName]);

  scope.app.controller(scope.controllerName, function ($scope, $stateParams, $rootScope, StarshipService) {
    var i;
    $scope.scope = scope;
    $scope.id = $stateParams.id;
    $scope.data = {};
    StarshipService.getStarshipByAPIUrl(StarshipService.getStarshipApiUrlById($scope.id), function (response) {
      $scope.data = response;
      // console.log($scope.data);
    });
  });
  return scope;
});
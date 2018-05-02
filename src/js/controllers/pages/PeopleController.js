define([
  'angular',
  'services/PeopleService',
  'services/PlanetService',
  'directives/MovieButton',
  'directives/StarshipButton',
  'directives/VehicleButton',
], function (angular, peopleService, planetService, movieButton, starshipButton, vehicleButton) {
  var scope = {};
  scope.moduleName = 'People';
  scope.pageTitle = 'Filmes Star Wars';
  scope.controllerName = scope.moduleName + 'Controller';
  scope.slug = '/people/:id';
  scope.templateName = 'people.html';
  scope.app = angular.module(scope.moduleName, [peopleService.moduleName, planetService.moduleName, movieButton.moduleName, starshipButton.moduleName, vehicleButton.moduleName]);

  scope.app.controller(scope.controllerName, function ($scope, $stateParams, $rootScope, PeopleService, PlanetService) {
    var i;
    $scope.scope = scope;
    $scope.id = $stateParams.id;
    $scope.data = {};
    PeopleService.getPeopleByAPIUrl(PeopleService.getPeopleApiUrlById($scope.id), function (response) {
      $scope.data = response;
      PlanetService.getPlanetByAPIUrl($scope.data.homeworld, function (response) {
        $scope.data.homeworldObj = response;
      });
    });

  });
  return scope;
});
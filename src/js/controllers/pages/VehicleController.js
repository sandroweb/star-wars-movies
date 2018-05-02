define([
  'angular',
  'services/VehicleService',
  'directives/MovieButton',
], function (angular, vehicleService, movieButton) {
  var scope = {};
  scope.moduleName = 'Vehicle';
  scope.pageTitle = 'Filmes Star Wars';
  scope.controllerName = scope.moduleName + 'Controller';
  scope.slug = '/vehicle/:id';
  scope.templateName = 'vehicle.html';
  scope.app = angular.module(scope.moduleName, [vehicleService.moduleName, movieButton.moduleName]);

  scope.app.controller(scope.controllerName, function ($scope, $stateParams, $rootScope, VehicleService) {
    var i;
    $scope.scope = scope;
    $scope.id = $stateParams.id;
    $scope.data = {};
    VehicleService.getVehicleByAPIUrl(VehicleService.getVehicleApiUrlById($scope.id), function (response) {
      $scope.data = response;
      // console.log($scope.data);
    });
  });
  return scope;
});
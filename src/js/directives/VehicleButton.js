define([
  'angular',
  'services/VehicleService'
], function (angular, vehicleService) {
  var scope = {};
  scope.moduleName = 'VehicleButton';
  scope.directiveName = 'vehicleButton';
  scope.app = angular.module(scope.moduleName, [vehicleService.moduleName]);
  scope.app.directive(scope.directiveName, function ($http, $rootScope, VehicleService) {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        $scope.data = {
          name: '...',
          link: null
        };
        VehicleService.getVehicleByAPIUrl($attr.url, function (response) {
          $scope.data = response;
        });
      },
      templateUrl: 'src/template/directives/vehicle-button.html'
    };
  });
  return scope;
});
define([
  'angular',
  'services/PlanetService'
], function (angular, planetService) {
  var scope = {};
  scope.moduleName = 'PlanetButton';
  scope.directiveName = 'planetButton';
  scope.app = angular.module(scope.moduleName, [planetService.moduleName]);
  scope.app.directive(scope.directiveName, function ($http, $rootScope, PlanetService) {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        $scope.data = {
          name: '...',
          link: null
        };
        PlanetService.getPlanetByAPIUrl($attr.url, function (response) {
          $scope.data = response;
        });
      },
      templateUrl: 'src/template/directives/planet-button.html'
    };
  });
  return scope;
});
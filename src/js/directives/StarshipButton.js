define([
  'angular',
  'services/StarshipService'
], function (angular, starshipService) {
  var scope = {};
  scope.moduleName = 'StarshipButton';
  scope.directiveName = 'starshipButton';
  scope.app = angular.module(scope.moduleName, [starshipService.moduleName]);
  scope.app.directive(scope.directiveName, function ($http, $rootScope, StarshipService) {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        $scope.data = {
          name: '...',
          link: null
        };
        StarshipService.getStarshipByAPIUrl($attr.url, function (response) {
          $scope.data = response;
        });
      },
      templateUrl: 'src/template/directives/starship-button.html'
    };
  });
  return scope;
});
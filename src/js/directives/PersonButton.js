define([
  'angular',
  'services/PeopleService',
  'services/GooglePictureService'
], function (angular, peopleService) {
  var scope = {};
  scope.moduleName = 'PersonButton';
  scope.directiveName = 'personButton';
  scope.app = angular.module(scope.moduleName, [peopleService.moduleName]);
  scope.app.directive(scope.directiveName, function ($http, $rootScope, PeopleService) {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        $scope.data = {
          name: '...',
          link: null
        };
        PeopleService.getPeopleByAPIUrl($attr.url, function (response) {
          $scope.data = response;
        });
      },
      templateUrl: 'src/template/directives/person-button.html'
    };
  });
  return scope;
});
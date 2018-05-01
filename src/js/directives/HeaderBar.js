define([
  'angular'
], function (angular) {
  var scope = {};
  scope.moduleName = 'HeaderBar';
  scope.directiveName = 'headerBar';
  scope.app = angular.module(scope.moduleName, []);
  scope.app.directive(scope.directiveName, function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        
      },
      templateUrl: 'src/template/directives/header-bar.html'
    };
  });
  return scope;
});
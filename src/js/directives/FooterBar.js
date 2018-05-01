define([
  'angular'
], function (angular) {
  var scope = {};
  scope.moduleName = 'FooterBar';
  scope.directiveName = 'footerBar';
  scope.app = angular.module(scope.moduleName, []);
  scope.app.directive(scope.directiveName, function () {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        
      },
      templateUrl: 'src/template/directives/footer-bar.html'
    };
  });
  return scope;
});
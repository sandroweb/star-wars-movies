define([
  'angular'
], function (angular) {
  var scope = {};
  scope.moduleName = 'HttpStatus404';
  scope.pageTitle = 'Http Status 404';
  scope.controllerName = scope.moduleName + 'Controller';
  scope.slug = '/404';
  scope.templateName = 'http-status/404.html';
  scope.app = angular.module(scope.moduleName, []);

  scope.app.controller(scope.controllerName, function ($scope) {
    $scope.scope = scope;
  });
  return scope;
});
define([
  'angular'
], function (angular) {
  var scope = {};
  scope.moduleName = 'Home';
  scope.pageTitle = 'Filmes Star Wars';
  scope.controllerName = scope.moduleName + 'Controller';
  scope.slug = '/';
  scope.templateName = 'home.html';
  scope.app = angular.module(scope.moduleName, []);

  scope.app.controller(scope.controllerName, function ($scope) {
    $scope.scope = scope;
  });
  return scope;
});
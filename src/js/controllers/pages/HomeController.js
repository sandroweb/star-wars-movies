define([
  'angular',
  'directives/MovieButton'
], function (angular, movieButton) {
  var scope = {};
  scope.moduleName = 'Home';
  scope.pageTitle = 'Filmes Star Wars';
  scope.controllerName = scope.moduleName + 'Controller';
  scope.slug = '/home';
  scope.templateName = 'home.html';
  scope.app = angular.module(scope.moduleName, [movieButton.moduleName]);

  scope.app.controller(scope.controllerName, function ($scope) {
    $scope.scope = scope;
  });
  return scope;
});
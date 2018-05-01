define([
  'angular',
  'angularUIRouter',
  'controllers/pages/HttpStatus404Controller',
  'controllers/pages/HomeController',
  'controllers/pages/MovieController',
], function (angular, angularUIRouter, HttpStatus404Controller, HomeController, MovieController) {
  var moduleName = 'RoutesModule',
    templatesDirectory = 'src/template/',
    app = angular.module(moduleName, [
      'ui.router',
      HttpStatus404Controller.moduleName,
      HomeController.moduleName,
      MovieController.moduleName
    ]);

  app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/404');

    $locationProvider.hashPrefix('');

    $stateProvider.state(HttpStatus404Controller.moduleName, {
      url: HttpStatus404Controller.slug,
      views: {
        'main-content': {
          templateUrl: templatesDirectory + HttpStatus404Controller.templateName,
          controller: HttpStatus404Controller.controllerName
        }
      }
    });

    $stateProvider.state(HomeController.moduleName, {
      name: HomeController.moduleName,
      url: HomeController.slug,
      views: {
        'main-content': {
          templateUrl: templatesDirectory + HomeController.templateName,
          controller: HomeController.controllerName
        }
      }
    });

    $stateProvider.state(MovieController.moduleName, {
      name: MovieController.moduleName,
      url: MovieController.slug,
      views: {
        'main-content': {
          templateUrl: templatesDirectory + MovieController.templateName,
          controller: MovieController.controllerName
        }
      }
    });

  });
  return moduleName;
});

define([
  'angular',
  'angularUIRouter',
  'controllers/pages/HttpStatus404Controller',
  'controllers/pages/HomeController',
], function (angular, angularUIRouter, HttpStatus404Controller, HomeController) {
  var moduleName = 'RoutesModule',
    templatesDirectory = 'src/template/',
    app = angular.module(moduleName, [
      'ui.router',
      HttpStatus404Controller.moduleName,
      HomeController.moduleName
    ]);

  app.config(function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider
      .otherwise('/404');


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
  });
  return moduleName;
});

define([
  'angular',
  'angularUIRouter',
  'controllers/pages/HomeController',
  'controllers/pages/MovieController',
  'controllers/pages/PeopleController',
  'controllers/pages/StarshipController',
  'controllers/pages/PlanetController',
  'controllers/pages/VehicleController',
], function (angular, angularUIRouter, HomeController, MovieController, PeopleController, StarshipController, PlanetController, VehicleController) {
  var moduleName = 'RoutesModule',
    templatesDirectory = 'src/template/',
    app = angular.module(moduleName, [
      'ui.router',
      HomeController.moduleName,
      MovieController.moduleName,
      PeopleController.moduleName,
      StarshipController.moduleName,
      PlanetController.moduleName,
      VehicleController.moduleName
    ]);

  app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {
    $urlRouterProvider
      .otherwise('/home');

    $locationProvider.hashPrefix('');

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

    $stateProvider.state(PeopleController.moduleName, {
      name: PeopleController.moduleName,
      url: PeopleController.slug,
      views: {
        'main-content': {
          templateUrl: templatesDirectory + PeopleController.templateName,
          controller: PeopleController.controllerName
        }
      }
    });

    $stateProvider.state(StarshipController.moduleName, {
      name: StarshipController.moduleName,
      url: StarshipController.slug,
      views: {
        'main-content': {
          templateUrl: templatesDirectory + StarshipController.templateName,
          controller: StarshipController.controllerName
        }
      }
    });

    $stateProvider.state(PlanetController.moduleName, {
      name: PlanetController.moduleName,
      url: PlanetController.slug,
      views: {
        'main-content': {
          templateUrl: templatesDirectory + PlanetController.templateName,
          controller: PlanetController.controllerName
        }
      }
    });

    $stateProvider.state(VehicleController.moduleName, {
      name: VehicleController.moduleName,
      url: VehicleController.slug,
      views: {
        'main-content': {
          templateUrl: templatesDirectory + VehicleController.templateName,
          controller: VehicleController.controllerName
        }
      }
    });

  });
  return moduleName;
});

define([
  'angular'
], function (angular) {
  require([
    'vendors/bower/angular-slugify/angular-slugify',
    'directives/HeaderBar',
    'directives/FooterBar',
    'config/routes',
  ], function (angularSlugify, headerBar, footerBar, configRoutes) {
    var refreshInterval,
      intervalTimes,
      equalizer,
      app = angular.module('app', ['slugifier', headerBar.moduleName, footerBar.moduleName, configRoutes]);

    app.controller('DataController', function ($scope, $http, $filter, $rootScope) {
      
      $rootScope.movies = [];
      $http.get('https://swapi.co/api/films/').then(function (response) {
        var i,
          slug;
        $rootScope.moviesByIndex = []
        $rootScope.movies = {};
        for (i in response.data.results) {
          slug = $filter('slugify')(response.data.results[i].title);
          $rootScope.movies[slug] = response.data.results[i];
          $rootScope.movies[slug].slug = slug;
          $rootScope.movies[slug].link = '#/movie/' + slug;
          $rootScope.moviesByIndex.push($rootScope.movies[slug]);
        }
        console.log($rootScope.movies);
      });
    });

    angular.bootstrap(document, ['app']);
  });
});

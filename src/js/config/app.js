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
      // $scope.scope = scope;

      // $rootScope.getPeopleIdByUrl = function (url) {
      //   var urlArr = url.split('/');
      //   return urlArr[urlArr.length - 2];
      // };

      // $rootScope.getPeopleUrlById = function (id) {
      //   return '#/people/' + id;
      // };

      $rootScope.movies = [];
      $http.get('https://swapi.co/api/films/').then(function (response) {
        var i,
          slug;
        $rootScope.movies = {};
        for (i in response.data.results) {
          slug = $filter('slugify')(response.data.results[i].title);
          $rootScope.movies[slug] = response.data.results[i];
          $rootScope.movies[slug].slug = slug;
          $rootScope.movies[slug].url = '#/movies/' + slug;
        }
        console.log($rootScope.movies);
      });
    });

    angular.bootstrap(document, ['app']);
  });
});

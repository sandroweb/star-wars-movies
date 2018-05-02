define([
  'angular',
], function (angular) {
  var scope = {};
  scope.moduleName = 'MovieService';
  scope.app = angular.module(scope.moduleName, []);
  scope.app.service(scope.moduleName, function ($http, $rootScope) {
    var self = this;

    this.getMovieIdByUrl = function (url) {
      var urlArr = url.split('/');
      return urlArr[urlArr.length - 2];
    };

    this.getMovieLinkById = function (id) {
      return '#/movie/' + id;
    };

    this.getMovieApiUrlById = function (id) {
      return 'https://swapi.co/api/films/' + id + '/';
    };

    this.getMovieByAPIUrl = function (url, callback) {
      var movieIndex = parseInt(self.getMovieIdByUrl(url)) - 1,
        interval;
      
      if ($rootScope.moviesByIndex && $rootScope.moviesByIndex.length > 0) {
        callback($rootScope.moviesByIndex[movieIndex]);
      } else {
        interval  = window.setInterval(function () {
          if ($rootScope.moviesByIndex && $rootScope.moviesByIndex.length > 0) {
            callback($rootScope.moviesByIndex[movieIndex], true);
            window.clearInterval(interval);
          }
        }, 500);
      }
    }

    this.getMovieBySlug = function (slug, callback) {
      var interval;

      if ($rootScope.movies && $rootScope.movies != {}) {
        callback($rootScope.movies[slug]);
      } else {
        interval  = window.setInterval(function () {
          if ($rootScope.movies && $rootScope.movies.length > 0) {
            callback($rootScope.movies[slug], true);
            window.clearInterval(interval);
          }
        }, 500);
      }
    }
  });

  return scope;
});
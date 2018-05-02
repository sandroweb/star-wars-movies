define([
  'angular',
], function (angular) {
  var scope = {};
  scope.moduleName = 'PlanetService';
  scope.app = angular.module(scope.moduleName, []);
  scope.app.service(scope.moduleName, function ($http, $rootScope) {
    var self = this;
    $rootScope.planets = $rootScope.planets || {};
    this.getPlanetIdByUrl = function (url) {
      var urlArr = url.split('/');
      return urlArr[urlArr.length - 2];
    };

    this.getPlanetLinkById = function (id) {
      return '#/planet/' + id;
    };

    this.getPlanetApiUrlById = function (id) {
      return 'https://swapi.co/api/planets/' + id + '/';
    };

    this.getPlanetByAPIUrl = function (url, callback) {
      if ($rootScope.planets[url]) {
        callback($rootScope.planets[url]);
      } else {
        $http.get(url, { cache: true }).then(function (response) {
          var id = self.getPlanetIdByUrl(url),
            link = self.getPlanetLinkById(id);
          response.data.id = id;
          response.data.link = link;
          $rootScope.planets[url] = response.data;
          callback(response.data);
        });
      }
    }
  });

  return scope;
});
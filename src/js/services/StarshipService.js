define([
  'angular',
], function (angular) {
  var scope = {};
  scope.moduleName = 'StarshipService';
  scope.app = angular.module(scope.moduleName, []);
  scope.app.service(scope.moduleName, function ($http, $rootScope) {
    var self = this;
    $rootScope.starships = $rootScope.starships || {};
    this.getStarshipIdByUrl = function (url) {
      var urlArr = url.split('/');
      return urlArr[urlArr.length - 2];
    };

    this.getStarshipLinkById = function (id) {
      return '#/starship/' + id;
    };

    this.getStarshipApiUrlById = function (id) {
      return 'https://swapi.co/api/starships/' + id + '/';
    };

    this.getStarshipByAPIUrl = function (url, callback) {
      if ($rootScope.starships[url]) {
        callback($rootScope.starships[url]);
      } else {
        $http.get(url, { cache: true }).then(function (response) {
          var id = self.getStarshipIdByUrl(url),
            link = self.getStarshipLinkById(id);
          response.data.id = id;
          response.data.link = link;
          $rootScope.starships[url] = response.data;
          callback(response.data);
        });
      }
    }
  });

  return scope;
});
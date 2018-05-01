define([
  'angular',
], function (angular, AlertController) {
  var scope = {};
  scope.moduleName = 'StarshipService';
  scope.app = angular.module(scope.moduleName, []);
  scope.app.service(scope.moduleName, function ($http, $rootScope) {
    var self = this;
    $rootScope.starship = $rootScope.starship || {};
    this.getStarshipIdByUrl = function (url) {
      var urlArr = url.split('/');
      return urlArr[urlArr.length - 2];
    };

    this.getStarshipLinkById = function (id) {
      return '#/starships/' + id;
    };

    this.getStarshipByAPIUrl = function (url, callback) {
      if ($rootScope.starship[url]) {
        callback($rootScope.starship[url]);
      } else {
        console.log(url);
        $http.get(url, { cache: true }).then(function (response) {
          var id = self.getStarshipIdByUrl(url),
            link = self.getStarshipLinkById(id);
          response.data.id = id;
          response.data.link = link;
          $rootScope.starship[url] = response.data;
          callback(response.data);
        });
      }
    }
  });

  return scope;
});
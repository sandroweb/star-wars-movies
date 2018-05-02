define([
  'angular',
], function (angular) {
  var scope = {};
  scope.moduleName = 'VehicleService';
  scope.app = angular.module(scope.moduleName, []);
  scope.app.service(scope.moduleName, function ($http, $rootScope) {
    var self = this;
    $rootScope.vehicles = $rootScope.vehicles || {};
    this.getVehicleIdByUrl = function (url) {
      var urlArr = url.split('/');
      return urlArr[urlArr.length - 2];
    };

    this.getVehicleLinkById = function (id) {
      return '#/vehicle/' + id;
    };

    this.getVehicleApiUrlById = function (id) {
      return 'https://swapi.co/api/vehicles/' + id + '/';
    };

    this.getVehicleByAPIUrl = function (url, callback) {
      if ($rootScope.vehicles[url]) {
        callback($rootScope.vehicles[url]);
      } else {
        $http.get(url, { cache: true }).then(function (response) {
          var id = self.getVehicleIdByUrl(url),
            link = self.getVehicleLinkById(id);
          response.data.id = id;
          response.data.link = link;
          $rootScope.vehicles[url] = response.data;
          callback(response.data);
        });
      }
    }
  });

  return scope;
});
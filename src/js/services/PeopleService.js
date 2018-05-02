define([
  'angular',
], function (angular) {
  var scope = {};
  scope.moduleName = 'PeopleService';
  scope.app = angular.module(scope.moduleName, []);
  scope.app.service(scope.moduleName, function ($http, $rootScope) {
    var self = this;
    $rootScope.people = $rootScope.people || {};
    this.getPeopleIdByUrl = function (url) {
      var urlArr = url.split('/');
      return urlArr[urlArr.length - 2];
    };

    this.getPeopleLinkById = function (id) {
      return '#/people/' + id;
    };

    this.getPeopleApiUrlById = function (id) {
      return 'https://swapi.co/api/people/' + id + '/';
    };

    this.getPeopleByAPIUrl = function (url, callback) {
      if ($rootScope.people[url]) {
        callback($rootScope.people[url]);
      } else {
        $http.get(url, { cache: true }).then(function (response) {
          var id = self.getPeopleIdByUrl(url),
            link = self.getPeopleLinkById(id);
          response.data.id = id;
          response.data.link = link;
          $rootScope.people[url] = response.data;
          callback(response.data);
        });
      }
    }
  });

  return scope;
});
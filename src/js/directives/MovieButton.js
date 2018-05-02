define([
  'angular',
  'services/MovieService'
], function (angular, movieService) {
  var scope = {};
  scope.moduleName = 'MovieButton';
  scope.directiveName = 'movieButton';
  scope.app = angular.module(scope.moduleName, [movieService.moduleName]);
  scope.app.directive(scope.directiveName, function ($http, $rootScope, MovieService) {
    return {
      restrict: 'E',
      link: function ($scope, $element, $attr) {
        $scope.data = {
          title: '...',
          link: null
        };
        if ($attr.url) {
          MovieService.getMovieByAPIUrl($attr.url, function (response, needRender) {
            $scope.data = response;
            if (needRender) {
              $scope.$apply();
            }
          });
        } else if ($attr.slug) {
          MovieService.getMovieBySlug($attr.slug, function (response, needRender) {
            $scope.data = response;
            if (needRender) {
              $scope.$apply();
            }
          });
        }
      },
      templateUrl: 'src/template/directives/movie-button.html'
    };
  });
  return scope;
});
define([
  'angular',
], function (angular) {
  var scope = {};
  scope.getSearchUrl = function (term) {
    return 'https://www.googleapis.com/customsearch/v1?q=' + escape(term) + '&key=AIzaSyC34QH_itl0FGHSN85wTbEwOHewgjUULig&imageSize=medium&cx=013004472123043811264:cnutbz0iwh8&num=1';
  };

  scope.moduleName = 'GooglePictureService';
  scope.app = angular.module(scope.moduleName, []);
  scope.app.service(scope.moduleName, function ($http, $rootScope) {
    var self = this;
    $rootScope.images = $rootScope.images || {};
    
    this.getPictureUrl = function (term, callback) {
      if ($rootScope.images[term]) {
        callback($rootScope.images[term]);
      } else {
        $http.get(scope.getSearchUrl(term), { cache: true }).then(function (response) {
          var imageObj = response.data.items[0].pagemap.cse_thumbnail,
            image;
          if (!imageObj) {
            imageObj = response.data.items[0].pagemap.cse_image;
          }
          image = imageObj[0].src;
          // console.log(response.data.items[0].pagemap.cse_image[0]);
          $rootScope.images[term] = image;
          callback($rootScope.images[term]);
        });
      }
    }
  });

  return scope;
});
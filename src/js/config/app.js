define([
  'angular'
], function (angular) {
  require([
    'directives/HeaderBar',
    'directives/FooterBar',
    'config/routes',
  ], function (headerBar, footerBar, configRoutes) {
    var refreshInterval,
      intervalTimes,
      equalizer,
      app = angular.module('app', [headerBar.moduleName, footerBar.moduleName, configRoutes]);

    angular.bootstrap(document, ['app']);

  });
});

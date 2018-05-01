require.config(function () {
  var config = {};

  config.baseUrl = 'src/js/';

  config.paths = {};
  config.paths.bootstrap = ['jquery'];
  config.paths.bootstrap = ['vendors/bower/bootstrap/dist/js/bootstrap.min'];
  config.paths.angular = ['vendors/bower/angular/angular.min'];
  config.paths.angularUIRouter = ['vendors/bower/angular-ui-router/release/angular-ui-router.min'];

  config.paths.app = ['config/app'];

  config.shim = {
    jquery: {
      exports : '$'
    },
    bootstrap: {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    angular: {
      exports : 'angular'
    }
  };

  config.deps = [
    'jquery',
    'bootstrap',
    'app'
  ];

  return config;
}());

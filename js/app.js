(function() {
  'use strict';

  angular
    .module('swingLyncApp', [
      'ngRoute',
      'ngCookies',
      'ngPassword',
      'daterangepicker',
      'ngTable',
      'ui.bootstrap',
      'ngAnimate',
      'ngSanitize',
      'mgcrea.ngStrap',
      'angular-momentjs',
      'angularSpinner'
    ])
    .config(config)
    .constant('DATE_FORMAT', 'YYYY-MM-DD')
    .constant('TIME_FORMAT', 'HH:mm')
    .constant('API_URL', 'http://192.168.0.28/api/')
    .factory('httpRequestInterceptor', function () {
      return {
        request: function (config) {
          config.headers['Authorization'] = 'Basic d2VudHdvcnRobWFuOkNoYW5nZV9tZQ==';
          config.headers['Accept'] = 'application/json;odata=verbose';
          return config;
        }
      };
    });

  config.$inject = ['$routeProvider', '$momentProvider', '$modalProvider'];

  function config($routeProvider, $momentProvider, $modalProvider) {
    angular
      .extend($modalProvider.defaults, {
        html: true
      });
  }
})();
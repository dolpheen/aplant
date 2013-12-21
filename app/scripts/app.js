/* jshint indent:4 */
'use strict';

angular.module('aPlantApp', [
        'ngCookies',
        'ngResource',
        'ngSanitize',
        'ngRoute',
        'ui.bootstrap',
        'controllers',
        'services',
        'filters',
        'directives'
    ])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/', {
                templateUrl: 'partials/main',
                controller: 'MainCtrl'
            })
            .when('/equipmentList', {
                templateUrl: 'partials/equipment-list.html',
                controller: 'EquipmentListCtrl'
            })
            .when('/bootstrap', {
                templateUrl: 'partials/bootstrap.html',
                controller: 'BootstrapCtrl'
            })
            .otherwise({
                redirectTo: '/'
            });
    });

angular.module('controllers', []);
angular.module('services', []);
angular.module('filters', []);
angular.module('directives', []);

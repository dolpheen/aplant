/* jshint indent:4 */

'use strict';

angular.module('aPlantApp')
   // Dropdown controller
    .controller('DropdownCtrl', function ($scope) {
        $scope.items = [
            {text:'Редактировать', icon: 'icon-edit', action: 'edit'},
            {text:'Добавить', icon: 'icon-plus', action: 'add'},
            {text:'Удалить', icon: 'icon-remove', action: 'remove'}
        ];
    })
    .controller('MainCtrl', function ($scope, $http) {
        $http.get('/api/awesomeThings').then(function(response) {
            $scope.awesomeThings = response.data;
        });
    })
    //Bootstrap test controller
    .controller('BootstrapCtrl', function ($scope) {
        $scope.test = 'Hello, world!';
    });







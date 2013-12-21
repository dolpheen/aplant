/* jshint indent:4 */
/* global PLANTJS */

'use strict';

/**
 * Created by Vadim on 17.12.13.
 */
angular.module('controllers').
    controller('EquipmentListCtrl',['$scope', '$http', '$modal', 'EquipmentResource', function ($scope, $http, $modal, EquipmentResource) {
        /**
         *  Get equipment data from the server
         */
        $scope.equipments = [];
        $scope.equipments = EquipmentResource.query(function () {
            $scope.equipments[0].$save()
        });


        /**
         * Click event for context menu. Opens modal dialog
         * @param $event
         * @param data
         */
        $scope.contextClick = function ($event, data) {
            var modalInstance = $modal.open({
                templateUrl: 'myModalContent.html',
                controller: 'ModalInstanceCtrl',
                scope: $scope,
                resolve: {
                    data: function () {
                        return { event : $event, item:data };
                    }
                }
            });

            modalInstance.result.then(function (selectedItem) {
                $scope.selected = selectedItem;
            }, function () {
                console.log('Modal dismissed at: ' + new Date());
            });
        };
    }])
    .controller('ModalInstanceCtrl', function ($scope, $modalInstance, $http, data) {
        /**
         data.event = Click event
         data.item = Specification object
         */
        $scope.data = data.item;

        $scope.method = {
            name : data.event.target.type,
            edit: false,
            add: false,
            remove: false,
            caption: ''
        };

        switch( $scope.method.name){
            case 'edit':
                $scope.method.caption = 'Редактирование';
                $scope.method.edit = true;
                break;
            case 'add':
                $scope.method.caption = 'Добавить';
                $scope.method.add = true;
                break;
            case 'remove':
                $scope.method.caption = 'Удалить';
                $scope.method.remove = true;
                break;
        }

        $scope.ok = function () {
            // Trying to find specification object
            $scope.equipments.forEach(function(equip){
                    equip.specs.forEach(function(spec, index){
                        if(spec === data.item){
                            console.log('Find: ' + spec.name.rus + ' at: ' + index);
                            if($scope.method.remove){
                                /*equip.specs.splice(index, 1);
                                $http.delete('/api/equipment/param', {params: {param1:'Hi!'}});*/


                            }
                        }
                    });
                }
            );
            $modalInstance.close();
        };

        $scope.cancel = function () {
            $modalInstance.dismiss('cancel');
        };
    });



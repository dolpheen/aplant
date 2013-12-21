/**
 * Created by Кирилл on 20.12.13.
 */
/* jshint indent:4 */

'use strict';

angular.module('services').factory('EquipmentResource', function ($resource) {
    return $resource(
        "/api/equipment/:id",
        {id: "@id" },
        {
            "update": {method: "PUT"},
            "reviews": {'method': 'GET', 'params': {'reviews_only': "true"}, isArray: true}
        }
    );
});

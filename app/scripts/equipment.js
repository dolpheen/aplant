/**
 * Created by Vadim on 03.12.13.
 */

/* jshint indent: 4 */

'use strict';

var PLANTJS = PLANTJS||{};


PLANTJS.Equipment = function(){
    this.id = 0;                    // Unique ID of the equipment
    this.parent = null;             // Parent equipment (typeof equipment)
    this.children = [];             // Children of this equipment (typeof equipment)
    this.genData = [];              // Equipment general data (like manufacturer, model, etc...)
    this.features = [];             // Features (Is asset?, inventarny nomer, etc..)
    this.specs = [];                // Specification of equipment
    this.documents = [];            // Documents available for the equipment
    this.images = [];               // Images filenames for the equipment
};

PLANTJS.Equipment.prototype = {
    /* Adds general data to equipment and also make a named property*/
    addGenData: function(){
        if(arguments[0]){
            var temp = Array.isArray(arguments[0]) ? arguments[0]: arguments;
            temp.forEach(function(item){
                this.genData.push(item);
                this.genData[item.name.eng] = item.value;
            }, this);
        }
    },

    /* Adds specification data to equipment*/
    addSpecs: function(){
        if(arguments[0]){
            var temp = Array.isArray(arguments[0]) ? arguments[0]: arguments;
            temp.forEach(function(item){
                this.specs.push(item);
            }, this);
        }
    },
    /* Adds specification data to equipment*/
    addImages: function(){
        if(arguments[0]){
            var temp = Array.isArray(arguments[0]) ? arguments[0]: arguments;
            temp.forEach(function(item){
                this.images.push(item);
            }, this);
        }
    }
};

PLANTJS.IntString = function(eng, rus){
    this.eng = eng;
    this.rus = rus;
};









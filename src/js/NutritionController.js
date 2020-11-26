(function () {
    'use strict';

    angular
        .module('myapp')
        .controller('NutritionController', NutritionController);

    NutritionController.$inject = [];

    /* @ngInject */
    function NutritionController() {
        let vm = this;
        vm.title = 'NutritionController';

        activate();

        ////////////////

        function activate() {
            console.log('im here');
            vm.test = 'NutritionController';
        }
    }

})();


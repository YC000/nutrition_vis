(function () {
    'use strict';

    angular
        .module('myapp')
        .controller('NutritionController', NutritionController);

    NutritionController.$inject = ['DataFactory', '$scope'];

    /* @ngInject */
    function NutritionController(DataFactory, $scope) {
        let vm = this;
        vm.title = 'NutritionController';
        vm.chosenProduct = [];
        vm.availableProduct = [];
        vm.productToAdd = {};
        vm.sliders = [];

        vm.addProduct = addProduct;
        vm.setSlider = setSlider;

        activate();

        ////////////////

        function activate() {
            vm.availableProduct = getAvailableProduct();
            console.log(DataFactory);
            console.log(vm.availableProduct);
            console.log(vm.productToAdd);
        }

        function getAvailableProduct() {
            return DataFactory.products;
        }

        function addProduct() {
            vm.chosenProduct.push(vm.productToAdd);
            vm.productToAdd = {};
        }

        function setSlider(product, chosenProductIdx) {
            // get stepsArray
            let stepArr = [];
            product.sizes.forEach(size => {
                stepArr.push({value: size.value, legend: size.name});
            });

            vm.sliders[chosenProductIdx] = {
                value: stepArr[0].value,
                options: {
                    showSelectionBar: true,
                    showTicksValues: true,
                    stepsArray: stepArr
                }
            };
        }
    }

})();


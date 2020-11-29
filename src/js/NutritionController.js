(function () {
    'use strict';

    angular
        .module('myapp')
        .controller('NutritionController', NutritionController);

    NutritionController.$inject = ['DataFactory'];

    /* @ngInject */
    function NutritionController(DataFactory) {
        let vm = this;
        vm.title = 'NutritionController';
        vm.chosenProduct = [];
        vm.availableProduct = [];
        vm.productToAdd = {};

        vm.addProduct = addProduct;

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

        function getProductContext(productName) {

        }

        function addProduct() {
            vm.chosenProduct.push(vm.productToAdd);
            vm.productToAdd = {};
        }
    }

})();


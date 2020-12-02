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
        vm.nutritionSlider = [];

        vm.addProduct = addProduct;
        vm.setSlider = setSlider;
        vm.setDailyPercent = setDailyPercent;
        vm.getProductNb = getProductNb;

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
            if (vm.productToAdd.hasOwnProperty('productName')) {
                vm.chosenProduct.push(vm.productToAdd);
                vm.productToAdd = {};
            }
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

            $scope.$watch(`vm.sliders[${chosenProductIdx}].value`, function (newVal, oldVal) {
                setNutritionSize(product, chosenProductIdx);
            })
        }

        function setNutritionSize(product, i) {
            let sizeChosen = vm.sliders[i].value;
            product.sizeChosen = {};

            product.sizes.forEach(size => {
                if (size.value === sizeChosen) {
                    product.sizeChosen = size;
                }
            });

            setNutritionSlider();
        }

        function setNutritionSlider() {
            vm.chosenProduct.forEach((product, product_i) => {
                product.sizeChosen.nutrition.forEach((el, nut_i) => {

                    if (vm.nutritionSlider[product_i] === undefined) {
                        vm.nutritionSlider[product_i] = [];
                    }

                    let [floor, ceil] = getNutritionRange(el.id);

                    vm.nutritionSlider[product_i][nut_i] =  {
                        value: el.value,
                        options: {
                            ceil: ceil,
                            floor: floor,
                            showTicks: true,
                            readOnly: true,
                            translate: function(value, sliderId, label) {
                                switch (label) {
                                    case 'model':
                                        return el.displayValue;
                                    default:
                                        return value;
                                }
                            },
                            getTickColor: function (value) {
                                if (value < 3)
                                    return 'red';
                                if (value < 6)
                                    return 'orange';
                                if (value < 9)
                                    return 'yellow';
                                return '#2AE02A';
                            }
                        }
                    };
                })
            })
            console.log("vm.nutritionSlider", vm.nutritionSlider);
        }

        function getNutritionRange(nutrientId) {
            if (!nutrientId) {
                // assume it to be calories
                return [0, 2000];
            }

            switch (nutrientId) {
                case 'totalFat':
                    return [0, 65];
                case "saturatedFat":
                    return [0, 20];
                case "transFat":
                    return [0, 2];
                case "cholesterol":
                    return [0, 300];
                case "sodium":
                    return [0, 2400];
                case "totalCarbs":
                    return [0, 300];
                case "dietaryFiber":
                    return [0, 25];
                case "sugars":
                    return [0, 50];
                case "protein":
                    return [0, 50];
                case "caffeine":
                    return [0, 400];
                default:
                    // assume it to be calories
                    return [0, 2000];
            }
        }

        function setDailyPercent(product, nut_i) {
            if (product.sizeChosen.nutrition[nut_i].hasOwnProperty('dailyPercentValue')
                && product.sizeChosen.nutrition[nut_i].dailyPercentValue !== null) {
                let percent = Math.round(product.sizeChosen.nutrition[nut_i].dailyPercentValue * 100 * 10) / 10
                return `${percent}%`;
            }
            return "";
        }

        function getProductNb(prod_i) {
            if (vm.chosenProduct.length > 1) {
                return `(product ${prod_i + 1})`;
            }

            return "";
        }
    }

})();


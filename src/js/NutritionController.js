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
        vm.graphType = "categoryCompare";
        vm.nutritionSliderItem = [{
            minVal: 10,
            maxVal: 20,
            options: {
                floor: 0,
                ceil: 100,
                step: 10,
                showTicks: true
            }
        }];

        vm.addProduct = addProduct;
        vm.setSlider = setSlider;
        vm.setDailyPercent = setDailyPercent;
        vm.getProductNb = getProductNb;

        activate();

        ////////////////

        function activate() {
            vm.availableProduct = getAvailableProduct();
            console.log(DataFactory);
        }

        function getAvailableProduct() {
            return Object.assign([], DataFactory.products);
        }

        function addProduct() {
            if (vm.productToAdd.hasOwnProperty('productName')) {
                vm.chosenProduct.push(vm.productToAdd);
                vm.availableProduct = vm.availableProduct.filter(el => el.productName !== vm.productToAdd.productName);
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
            setNutritionItemSlider();
        }

        function setNutritionItemSlider() {
            // set product nutrient visualization
            vm.chosenProduct[0].sizeChosen.nutrition.forEach((nut, nut_i) => {

                if (vm.nutritionSliderItem[nut_i] === undefined) {
                    vm.nutritionSliderItem[nut_i] = {};
                }

                // get the max value possible for each nutrient
                let [floor, ceil] = getNutritionRange(nut.id);

                vm.nutritionSliderItem[nut_i] = {
                    minVal: nut.value,
                    maxVal: vm.chosenProduct[1].sizeChosen.nutrition[nut_i].value,
                    options: {
                        floor: floor,
                        ceil: ceil
                    }
                };
            })

        }

        function setNutritionSlider() {
            vm.chosenProduct.forEach((product, product_i) => {
                // determine the range of category
                let categoryNut = {};
                DataFactory.category[product.categoryName].meta.sizes.forEach(size => {
                    if (size.value === product.sizeChosen.value) {
                        categoryNut = size;
                    }
                })

                // determine the range of subCategory
                let subcatNut = {};
                DataFactory.subcategory[product.subcategoryName].meta.sizes.forEach(size => {
                    if (size.value === product.sizeChosen.value) {
                        subcatNut = size;
                    }
                })

                // set product nutrient visualization
                product.sizeChosen.nutrition.forEach((nut, nut_i) => {

                    if (vm.nutritionSlider[product_i] === undefined) {
                        vm.nutritionSlider[product_i] = [];
                    }

                    // get the max value possible for each nutrient
                    let [floor, ceil] = getNutritionRange(nut.id);

                    // get category and sub category ranges
                    let catMin = categoryNut[nut.id].minValue;
                    let catMax = categoryNut[nut.id].maxValue;
                    let subcatMin = subcatNut[nut.id].minValue;
                    let subcatMax = subcatNut[nut.id].maxValue;

                    // color scale for range
                    // dividing color follows: https://www.canada.ca/en/health-canada/services/understanding-food-labels/percent-daily-value.html
                    // https://www.sciencedirect.com/science/article/pii/S0749379712003200?via%3Dihub#bib3
                    let [catColor, subcatColor] = getColor('blue');
                    let percent;

                    if (nut.id !== 'calories') {

                        if (nut.id === 'transFat') {
                            // if transFat, use the % for saturated fat
                            percent = product.sizeChosen.nutrition[nut_i-1].dailyPercentValue;
                        } else if (!nut.hasOwnProperty("dailyPercentValue") || nut.dailyPercentValue === null) {
                            percent = nut.value / ceil;
                        } else {
                            percent = nut.dailyPercentValue;
                        }

                        if (percent < 0.05) {
                            if (nut.id === 'dietaryFiber' || nut.id === 'protein') {
                                // bad, i.e. red
                                [catColor, subcatColor] = getColor('red');
                            } else {
                                // low, i.e. green
                                [catColor, subcatColor] = getColor('green');
                            }
                        } else if (percent < 0.15) {
                            // medium, i.e. yellow
                            [catColor, subcatColor] = getColor('amber');
                        } else {
                            if (nut.id === 'dietaryFiber' || nut.id === 'protein') {
                                // good, i.e. green
                                [catColor, subcatColor] = getColor('green');
                            } else {
                                // high, i.e. red
                                [catColor, subcatColor] = getColor('red');
                            }
                        }
                    }

                    // slider visualization
                    vm.nutritionSlider[product_i][nut_i] =  {
                        value: nut.value,
                        options: {
                            ceil: ceil,
                            floor: floor,
                            showTicks: true,
                            readOnly: true,
                            precision: 1,
                            step: getTickStep(ceil),
                            translate: function(value, sliderId, label) {
                                switch (label) {
                                    case 'model':
                                        return nut.displayValue;
                                    default:
                                        return value;
                                }
                            },
                            getTickColor: function (value) {
                                if (value >= subcatMin && value <= subcatMax){
                                    return subcatColor;
                                }
                                if (value >= catMin && value <= catMax) {
                                    return catColor;
                                }
                                return 'white';
                            }
                        }
                    };
                })
            })
        }

        function getColor(colorName) {
            switch (colorName) {
                case 'red':
                    return ["#EF5350", "#C62828"];
                case 'green':
                    return ["#66BB6A", "#2E7D32"];
                case 'amber':
                    return ["#FFCA28", "#FF8F00"];
                default:
                    return ["#29B6F6", "#0277BD"];
            }
        }

        function getTickStep(ceil) {
            // make the ticks color smooth
            let step = 1;
            if (ceil < 5) {
                step = 0.01;
            } else if (ceil < 50) {
                step = 0.1;
            } else if (ceil < 100) {
                step = 0.5;
            }

            return step;
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
                    // range: https://www.heartandstroke.ca/healthy-living/healthy-eating/reduce-sugar
                    return [0, 50];
                case "protein":
                    return [0, 50];
                case "caffeine":
                    // range: https://www.canada.ca/en/health-canada/services/food-nutrition/food-safety/food-additives/caffeine-foods/foods.html
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

        function getProductNb(product, prod_i) {
            if (vm.chosenProduct.length > 1) {
                return product.productName;
            }

            return "";
        }
    }

})();


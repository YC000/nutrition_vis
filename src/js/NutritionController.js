(function () {
    'use strict';

    angular
        .module('myapp')
        .controller('NutritionController', NutritionController);

    NutritionController.$inject = ['DataFactory'];

    /* @ngInject */
    function NutritionController(DataFactory) {
        let vm = this;
        let data = {};

        vm.title = 'NutritionController';
        vm.chosenProduct = [];
        vm.availableProduct = [];
        vm.productToAdd = {};
        vm.sliders = [];
        vm.nutritionSlider = [];
        vm.isSelectedProd = false;

        vm.addProduct = addProduct;
        vm.setSlider = setSlider;
        vm.getDailyPercent = getDailyPercent;
        vm.getProductNb = getProductNb;
        vm.getPercentColor = getPercentColor;

        activate();

        ////////////////

        function activate() {
            data = DataFactory.getData();
            console.log(data);
            vm.availableProduct = getAvailableProduct();
        }

        function getAvailableProduct() {
            return Object.assign([], data.products);
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
            let stepArr = [{value: 0}];
            product.sizes.forEach(size => {
                stepArr.push({value: size.value, legend: size.name});
            });

            vm.sliders[chosenProductIdx] = {
                value: stepArr[0].value,
                options: {
                    showSelectionBar: true,
                    showTicksValues: true,
                    stepsArray: stepArr,
                    customValueToPosition: function(val, minVal, maxVal) {
                        val = (stepArr[val].value / stepArr[stepArr.length-1].value);
                        minVal = (stepArr[minVal].value / stepArr[stepArr.length-1].value);
                        maxVal = (stepArr[maxVal].value / stepArr[stepArr.length-1].value);
                        let range = maxVal - minVal;
                        return (val - minVal) / range;
                    },
                    customPositionToValue: function(percent, minVal, maxVal) {

                        let val = percent * stepArr[stepArr.length-1].value;
                        // get the index of the stepArr from val
                        for (let i = 1; i < stepArr.length; i++) {
                            // threshold is in between two lines, to determine which index val belongs to
                            let threshold = (stepArr[i].value - stepArr[i-1].value) / 2 + stepArr[i-1].value;
                            if (val < threshold) {
                                return i-1;
                            }
                        }
                        return stepArr.length-1;
                    },onEnd: function(id) {
                        setNutritionSize(product, chosenProductIdx);
                    }
                }
            };
        }

        function setNutritionSize(product, i) {
            if (vm.sliders[i].value === 0) {
                product.isSizeSelected = false;
                vm.isSelectedProd --;
                return;
            }

            product.isSizeSelected = true;
            vm.isSelectedProd ++;
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
                // skip the product that there is no size specified
                if (!product.isSizeSelected) {
                    return;
                }

                // determine the range of category
                let categoryNut = {};
                data.category[product.categoryName].meta.sizes.forEach(size => {
                    if (size.value === product.sizeChosen.value) {
                        categoryNut = size;
                    }
                })

                // determine the range of subCategory
                let subcatNut = {};
                data.subcategory[product.subcategoryName].meta.sizes.forEach(size => {
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
                    let [floor, ceil] = DataFactory.getNutritionRange(nut.id);

                    // get category and sub category ranges
                    let catMin = categoryNut[nut.id].minValue;
                    let catMax = categoryNut[nut.id].maxValue;
                    let subcatMin = subcatNut[nut.id].minValue;
                    let subcatMax = subcatNut[nut.id].maxValue;

                    // color scale for range
                    let [catColor, subcatColor] = DataFactory.getColorRange('blue');

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
                                        return `<b>${nut.displayValue}</b>`;
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

        function getDailyPercent(product, nut_i) {
            if (product.sizeChosen.nutrition[nut_i].hasOwnProperty('dailyPercentValue')
                && product.sizeChosen.nutrition[nut_i].dailyPercentValue !== null) {
                let percent = Math.round(product.sizeChosen.nutrition[nut_i].dailyPercentValue * 100 * 10) / 10
                return `${percent}%`;
            }
            return "";
        }

        function getPercentColor(product, nut_i) {
            return product.sizeChosen.nutrition[nut_i].percentColor;
        }

        function getProductNb(product, prod_i) {
            if (vm.chosenProduct.length > 1) {
                return product.productName;
            }

            return "";
        }
    }

})();


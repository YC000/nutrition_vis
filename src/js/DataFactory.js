(function () {
    'use strict';

    angular
        .module('myapp')
        .factory('DataFactory', DataFactory);

    DataFactory.$inject = [];

    /* @ngInject */
    function DataFactory() {

        let data = {
            "category": {
                "Blended Beverages": {
                    "categoryName": "Blended Beverages",
                    "meta": {}
                }
            },
            "subcategory": {
                "Coffee Frappuccino": {
                    "subcategoryName": "Coffee Frappuccino",
                    "categoryName": "Blended Beverages",
                    "meta": {}
                },
                "Creme Frappuccino": {
                    "subcategoryName": "Creme Frappuccino",
                    "categoryName": "Blended Beverages",
                    "meta": {}
                }
            },
            "products": [
                {
                    "categoryName": "Blended Beverages",
                    "subcategoryName": "Coffee Frappuccino",
                    "productName": "Pumpkin Spice Coffee Frappuccino® Blended Beverage",
                    "description": "We take pumpkin and traditional fall spice flavours and blend them with coffee, milk and ice, then top it all off with whipped cream and pumpkin-pie spice. It's your favourite fall latte in a cool, Frappuccino® blended form.",
                    "imageURI": "https://globalassets.starbucks.com/assets/6757a00170b04e1c8a76fdc8eefd37d1.jpg",
                    "sizes": [
                        {
                            "name": "Tall",
                            "value": 354,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 290 Cals"
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 11,
                                    "dailyPercentValue": 0.141,
                                    "id": "totalFat",
                                    "displayValue": " 11 g",
                                    "dailyValue": "14%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 7,
                                    "dailyPercentValue": 0.35,
                                    "id": "saturatedFat",
                                    "displayValue": " 7 g",
                                    "dailyValue": "35%"
                                },
                                {
                                    "displayName": "+ Trans",
                                    "unitOfMeasure": "g",
                                    "value": 0.4,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.4 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Cholesterol",
                                    "unitOfMeasure": "mg",
                                    "value": 35,
                                    "dailyPercentValue": 0.1167,
                                    "id": "cholesterol",
                                    "displayValue": " 35 mg",
                                    "dailyValue": "12%"
                                }, {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 200,
                                    "dailyPercentValue": 0.087,
                                    "id": "sodium",
                                    "displayValue": " 200 mg",
                                    "dailyValue": "9%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 46,
                                    "dailyPercentValue": 0.1673,
                                    "id": "totalCarbs",
                                    "displayValue": " 46 g",
                                    "dailyValue": "17%"
                                },
                                {
                                    "displayName": "Fibre",
                                    "unitOfMeasure": "g",
                                    "value": 0,
                                    "dailyPercentValue": 0,
                                    "id": "dietaryFiber",
                                    "displayValue": " 0 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Sugars",
                                    "unitOfMeasure": "g",
                                    "value": 45,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 45 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 4,
                                    "dailyPercentValue": 0.08,
                                    "id": "protein",
                                    "displayValue": " 4 g",
                                    "dailyValue": "8%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 70,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 70 mg",
                                    "dailyValue": null
                                }
                            ]
                        },
                        {
                            "name": "Grande",
                            "value": 473,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 420 Cals"
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 14,
                                    "dailyPercentValue": 0.1795,
                                    "id": "totalFat",
                                    "displayValue": " 14 g",
                                    "dailyValue": "18%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 9,
                                    "dailyPercentValue": 0.45,
                                    "id": "saturatedFat",
                                    "displayValue": " 9 g",
                                    "dailyValue": "45%"
                                },
                                {
                                    "displayName": "+ Trans",
                                    "unitOfMeasure": "g",
                                    "value": 0.5,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.5 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Cholesterol",
                                    "unitOfMeasure": "mg",
                                    "value": 45,
                                    "dailyPercentValue": 0.15,
                                    "id": "cholesterol",
                                    "displayValue": " 45 mg",
                                    "dailyValue": "15%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 280,
                                    "dailyPercentValue": 0.1217,
                                    "id": "sodium",
                                    "displayValue": " 280 mg",
                                    "dailyValue": "12%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 67,
                                    "dailyPercentValue": 0.2436,
                                    "id": "totalCarbs",
                                    "displayValue": " 67 g",
                                    "dailyValue": "24%"
                                },
                                {
                                    "displayName": "Fibre",
                                    "unitOfMeasure": "g",
                                    "value": 0,
                                    "dailyPercentValue": 0,
                                    "id": "dietaryFiber",
                                    "displayValue": " 0 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Sugars",
                                    "unitOfMeasure": "g",
                                    "value": 66,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 66 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 6,
                                    "dailyPercentValue": 0.12,
                                    "id": "protein",
                                    "displayValue": " 6 g",
                                    "dailyValue": "12%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 100,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 100 mg",
                                    "dailyValue": null
                                }
                            ]
                        },
                        {
                            "name": "Venti",
                            "value": 709,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 500 Cals"
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 16,
                                    "dailyPercentValue": 0.2051,
                                    "id": "totalFat",
                                    "displayValue": " 16 g",
                                    "dailyValue": "21%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 10,
                                    "dailyPercentValue": 0.5,
                                    "id": "saturatedFat",
                                    "displayValue": " 10 g",
                                    "dailyValue": "50%"
                                },
                                {
                                    "displayName": "+ Trans",
                                    "unitOfMeasure": "g",
                                    "value": 0.5,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.5 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Cholesterol",
                                    "unitOfMeasure": "mg",
                                    "value": 50,
                                    "dailyPercentValue": 0.1667,
                                    "id": "cholesterol",
                                    "displayValue": " 50 mg",
                                    "dailyValue": "17%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 360,
                                    "dailyPercentValue": 0.1565,
                                    "id": "sodium",
                                    "displayValue": " 360 mg",
                                    "dailyValue": "16%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 83,
                                    "dailyPercentValue": 0.3018,
                                    "id": "totalCarbs",
                                    "displayValue": " 83 g",
                                    "dailyValue": "30%"
                                },
                                {
                                    "displayName": "Fibre",
                                    "unitOfMeasure": "g",
                                    "value": 0,
                                    "dailyPercentValue": 0,
                                    "id": "dietaryFiber",
                                    "displayValue": " 0 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Sugars",
                                    "unitOfMeasure": "g",
                                    "value": 81,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 81 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 7,
                                    "dailyPercentValue": 0.14,
                                    "id": "protein",
                                    "displayValue": " 7 g",
                                    "dailyValue": "14%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 135,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 135 mg",
                                    "dailyValue": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "categoryName": "Blended Beverages",
                    "subcategoryName": "Coffee Frappuccino",
                    "productName": "Mocha Cookie Crumble Frappuccino® Blended Beverage",
                    "description": "Frappuccino® Roast coffee, mocha sauce and Frappuccino® chips blended with milk and ice, layered on top of whipped cream and chocolate cookie crumble and topped with vanilla whipped cream, mocha drizzle and even more chocolate cookie crumble. Each sip is as good as the last . . . all the way to the end.",
                    "imageURI": "https://globalassets.starbucks.com/assets/ea022353c794405abfa0451b8302b3ec.jpg",
                    "sizes": [
                        {
                            "name": "Tall",
                            "value": 354,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 340 Cals"
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 16,
                                    "dailyPercentValue": 0.2051,
                                    "id": "totalFat",
                                    "displayValue": " 16 g",
                                    "dailyValue": "21%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 11,
                                    "dailyPercentValue": 0.55,
                                    "id": "saturatedFat",
                                    "displayValue": " 11 g",
                                    "dailyValue": "55%"
                                },
                                {
                                    "displayName": "+ Trans",
                                    "unitOfMeasure": "g",
                                    "value": 0.5,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.5 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Cholesterol",
                                    "unitOfMeasure": "mg",
                                    "value": 40,
                                    "dailyPercentValue": 0.1333,
                                    "id": "cholesterol",
                                    "displayValue": " 40 mg",
                                    "dailyValue": "13%"
                                }, {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 200,
                                    "dailyPercentValue": 0.087,
                                    "id": "sodium",
                                    "displayValue": " 200 mg",
                                    "dailyValue": "9%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 46,
                                    "dailyPercentValue": 0.1673,
                                    "id": "totalCarbs",
                                    "displayValue": " 46 g",
                                    "dailyValue": "17%"
                                },
                                {
                                    "displayName": "Fibre",
                                    "unitOfMeasure": "g",
                                    "value": 2,
                                    "dailyPercentValue": 0.0714,
                                    "id": "dietaryFiber",
                                    "displayValue": " 2 g",
                                    "dailyValue": "7%"
                                },
                                {
                                    "displayName": "Sugars",
                                    "unitOfMeasure": "g",
                                    "value": 41,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 41 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 4,
                                    "dailyPercentValue": 0.08,
                                    "id": "protein",
                                    "displayValue": " 4 g",
                                    "dailyValue": "8%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 65,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 65 mg",
                                    "dailyValue": null
                                }
                            ]
                        },
                        {
                            "name": "Grande",
                            "value": 473,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 470 Cals"
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 23,
                                    "dailyPercentValue": 0.2949,
                                    "id": "totalFat",
                                    "displayValue": " 23 g",
                                    "dailyValue": "29%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 15,
                                    "dailyPercentValue": 0.75,
                                    "id": "saturatedFat",
                                    "displayValue": " 15 g",
                                    "dailyValue": "75%"
                                },
                                {
                                    "displayName": "+ Trans",
                                    "unitOfMeasure": "g",
                                    "value": 0.5,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.5 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Cholesterol",
                                    "unitOfMeasure": "mg",
                                    "value": 55,
                                    "dailyPercentValue": 0.1833,
                                    "id": "cholesterol",
                                    "displayValue": " 55 mg",
                                    "dailyValue": "18%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 260,
                                    "dailyPercentValue": 0.113,
                                    "id": "sodium",
                                    "displayValue": " 260 mg",
                                    "dailyValue": "11%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 63,
                                    "dailyPercentValue": 0.2291,
                                    "id": "totalCarbs",
                                    "displayValue": " 63 g",
                                    "dailyValue": "23%"
                                },
                                {
                                    "displayName": "Fibre",
                                    "unitOfMeasure": "g",
                                    "value": 2,
                                    "dailyPercentValue": 0.0714,
                                    "id": "dietaryFiber",
                                    "displayValue": " 2 g",
                                    "dailyValue": "7%"
                                },
                                {
                                    "displayName": "Sugars",
                                    "unitOfMeasure": "g",
                                    "value": 57,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 57 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 6,
                                    "dailyPercentValue": 0.12,
                                    "id": "protein",
                                    "displayValue": " 6 g",
                                    "dailyValue": "12%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 95,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 95 mg",
                                    "dailyValue": null
                                }
                            ]
                        },
                        {
                            "name": "Venti",
                            "value": 709,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 590 Cals"
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 26,
                                    "dailyPercentValue": 0.3333,
                                    "id": "totalFat",
                                    "displayValue": " 26 g",
                                    "dailyValue": "33%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 17,
                                    "dailyPercentValue": 0.85,
                                    "id": "saturatedFat",
                                    "displayValue": " 17 g",
                                    "dailyValue": "85%"
                                },
                                {
                                    "displayName": "+ Trans",
                                    "unitOfMeasure": "g",
                                    "value": 0.5,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.5 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Cholesterol",
                                    "unitOfMeasure": "mg",
                                    "value": 60,
                                    "dailyPercentValue": 0.2,
                                    "id": "cholesterol",
                                    "displayValue": " 60 mg",
                                    "dailyValue": "20%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 360,
                                    "dailyPercentValue": 0.1565,
                                    "id": "sodium",
                                    "displayValue": " 360 mg",
                                    "dailyValue": "16%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 84,
                                    "dailyPercentValue": 0.3055,
                                    "id": "totalCarbs",
                                    "displayValue": " 84 g",
                                    "dailyValue": "31%"
                                },
                                {
                                    "displayName": "Fibre",
                                    "unitOfMeasure": "g",
                                    "value": 3,
                                    "dailyPercentValue": 0.1071,
                                    "id": "dietaryFiber",
                                    "displayValue": " 3 g",
                                    "dailyValue": "11%"
                                },
                                {
                                    "displayName": "Sugars",
                                    "unitOfMeasure": "g",
                                    "value": 76,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 76 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 8,
                                    "dailyPercentValue": 0.16,
                                    "id": "protein",
                                    "displayValue": " 8 g",
                                    "dailyValue": "16%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 130,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 130 mg",
                                    "dailyValue": null
                                }
                            ]
                        }
                    ]
                }
            ]
        };

        return data;


    }

})();

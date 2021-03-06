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
                    "meta": {
                        "sizes": []
                    }
                }
            },
            "subcategory": {
                "Coffee Frappuccino": {
                    "subcategoryName": "Coffee Frappuccino",
                    "categoryName": "Blended Beverages",
                    "meta": {
                        "sizes": []
                    }
                },
                "Creme Frappuccino": {
                    "subcategoryName": "Creme Frappuccino",
                    "categoryName": "Blended Beverages",
                    "meta": {
                        "sizes": []
                    }
                }
            },
            "products": [
                {
                    "categoryName": "Blended Beverages",
                    "subcategoryName": "Coffee Frappuccino",
                    "productName": "Pumpkin Spice Coffee Frappuccino® Blended Beverage",
                    "description": "We take pumpkin and traditional fall spice flavours and blend them with coffee, milk and ice, then top it all off with whipped cream and pumpkin-pie spice. It's your favourite fall latte in a cool, Frappuccino® blended form.",
                    "imageURI": "https://globalassets.starbucks.com/assets/64dd01090fd34a2ea55a4aea78de2683.jpg",
                    "sizes": [
                        {
                            "name": "Tall",
                            "value": 354,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 290 Cals",
                                    "value": 290
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
                                },
                                {
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
                                    "displayValue": " 420 Cals",
                                    "value": 420
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
                                    "displayValue": " 500 Cals",
                                    "value": 500
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
                    "imageURI": "https://globalassets.starbucks.com/assets/e4d9e996eb64453eb3ac7adb570c9b7b.jpg",
                    "sizes": [
                        {
                            "name": "Tall",
                            "value": 354,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 340 Cals",
                                    "value": 340
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
                                },
                                {
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
                                    "displayValue": " 470 Cals",
                                    "value": 470
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
                                    "displayValue": " 590 Cals",
                                    "value": 590
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
                },
                {
                    "categoryName": "Blended Beverages",
                    "subcategoryName": "Coffee Frappuccino",
                    "productName": "Peppermint Mocha Frappuccino®",
                    "description": "A delectable blend of chocolate-pepperminty perfection in every cool sip—Frappuccino® Roast coffee, mocha sauce, peppermint-flavoured syrup, milk and ice, topped with whipped cream and dark chocolate curls.",
                    "imageURI": "https://globalassets.starbucks.com/assets/dc30ae94a9204fc99a73a5f4d71db900.jpg",
                    "sizes": [
                        {
                            "name": "Tall",
                            "value": 354,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 300 Cals",
                                    "value": 300
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
                                    "value": 0.3,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.3 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Cholesterol",
                                    "unitOfMeasure": "mg",
                                    "value": 30,
                                    "dailyPercentValue": 0.1,
                                    "id": "cholesterol",
                                    "displayValue": " 30 mg",
                                    "dailyValue": "10%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 170,
                                    "dailyPercentValue": 0.0739,
                                    "id": "sodium",
                                    "displayValue": " 170 mg",
                                    "dailyValue": "7%"
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
                                    "value": 1,
                                    "dailyPercentValue": 0.0357,
                                    "id": "dietaryFiber",
                                    "displayValue": " 1 g",
                                    "dailyValue": "4%"
                                },
                                {
                                    "displayName": "Sugars",
                                    "unitOfMeasure": "g",
                                    "value": 44,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 44 g",
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
                                    "value": 75,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 75 mg",
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
                                    "displayValue": " 430 Cals",
                                    "value": 430
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
                                    "value": 45,
                                    "dailyPercentValue": 0.15,
                                    "id": "cholesterol",
                                    "displayValue": " 45 mg",
                                    "dailyValue": "15%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 240,
                                    "dailyPercentValue": 0.1043,
                                    "id": "sodium",
                                    "displayValue": " 240 mg",
                                    "dailyValue": "10%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 68,
                                    "dailyPercentValue": 0.2473,
                                    "id": "totalCarbs",
                                    "displayValue": " 68 g",
                                    "dailyValue": "25%"
                                },
                                {
                                    "displayName": "Fibre",
                                    "unitOfMeasure": "g",
                                    "value": 1,
                                    "dailyPercentValue": 0.0357,
                                    "id": "dietaryFiber",
                                    "displayValue": " 1 g",
                                    "dailyValue": "4%"
                                },
                                {
                                    "displayName": "Sugars",
                                    "unitOfMeasure": "g",
                                    "value": 64,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 64 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 5,
                                    "dailyPercentValue": 0.1,
                                    "id": "protein",
                                    "displayValue": " 5 g",
                                    "dailyValue": "10%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 110,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 110 mg",
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
                                    "displayValue": " 530 Cals",
                                    "value": 530
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 17,
                                    "dailyPercentValue": 0.2179,
                                    "id": "totalFat",
                                    "displayValue": " 17 g",
                                    "dailyValue": "22%"
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
                                    "value": 50,
                                    "dailyPercentValue": 0.1667,
                                    "id": "cholesterol",
                                    "displayValue": " 50 mg",
                                    "dailyValue": "17%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 320,
                                    "dailyPercentValue": 0.1391,
                                    "id": "sodium",
                                    "displayValue": " 320 mg",
                                    "dailyValue": "14%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 86,
                                    "dailyPercentValue": 0.3127,
                                    "id": "totalCarbs",
                                    "displayValue": " 86 g",
                                    "dailyValue": "31%"
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
                                    "value": 82,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 82 g",
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
                                    "value": 140,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 140 mg",
                                    "dailyValue": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "categoryName": "Blended Beverages",
                    "subcategoryName": "Coffee Frappuccino",
                    "productName": "Peppermint White Chocolate Mocha Frappuccino®",
                    "description": "A delectable blend of chocolate-pepperminty perfection in every cool sip—Frappuccino® Roast coffee, mocha sauce, peppermint-flavoured syrup, milk and ice, topped with whipped cream and dark chocolate curls.",
                    "imageURI": "https://globalassets.starbucks.com/assets/3408a37425274b6497f1c2f807d7bdca.jpg",
                    "sizes": [
                        {
                            "name": "Tall",
                            "value": 354,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 310 Cals",
                                    "value": 310
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
                                    "value": 0.3,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.3 g",
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
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 190,
                                    "dailyPercentValue": 0.0826,
                                    "id": "sodium",
                                    "displayValue": " 190 mg",
                                    "dailyValue": "8%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 48,
                                    "dailyPercentValue": 0.1745,
                                    "id": "totalCarbs",
                                    "displayValue": " 48 g",
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
                                    "value": 47,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 47 g",
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
                                    "displayValue": " 460 Cals",
                                    "value": 460
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
                                    "value": 75,
                                    "dailyPercentValue": 0.2727,
                                    "id": "totalCarbs",
                                    "displayValue": " 75 g",
                                    "dailyValue": "27%"
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
                                    "value": 74,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 74 g",
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
                                    "displayValue": " 550 Cals",
                                    "value": 550
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 18,
                                    "dailyPercentValue": 0.2308,
                                    "id": "totalFat",
                                    "displayValue": " 18 g",
                                    "dailyValue": "23%"
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
                                    "value": 91,
                                    "dailyPercentValue": 0.3309,
                                    "id": "totalCarbs",
                                    "displayValue": " 91 g",
                                    "dailyValue": "33%"
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
                                    "value": 89,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 89 g",
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
                },
                {
                    "categoryName": "Blended Beverages",
                    "subcategoryName": "Creme Frappuccino",
                    "productName": "Eggnog Crème Frappuccino®",
                    "description": "Rich, creamy eggnog mixed with Frappuccino® blended crème, hints of subtle spice, milk and ice, and then topped with whipped cream and nutmeg—a joyful sip reimagined.",
                    "imageURI": "https://globalassets.starbucks.com/assets/846e4b181b884e9fb5d7692a8fdf0efd.jpg",
                    "sizes": [
                        {
                            "name": "Tall",
                            "value": 354,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 280 Cals",
                                    "value": 280
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 13,
                                    "dailyPercentValue": 0.1667,
                                    "id": "totalFat",
                                    "displayValue": " 13 g",
                                    "dailyValue": "17%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 8,
                                    "dailyPercentValue": 0.4,
                                    "id": "saturatedFat",
                                    "displayValue": " 8 g",
                                    "dailyValue": "40%"
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
                                    "value": 65,
                                    "dailyPercentValue": 0.2167,
                                    "id": "cholesterol",
                                    "displayValue": " 65 mg",
                                    "dailyValue": "22%"
                                },
                                {
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
                                    "value": 36,
                                    "dailyPercentValue": 0.1309,
                                    "id": "totalCarbs",
                                    "displayValue": " 36 g",
                                    "dailyValue": "13%"
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
                                    "value": 35,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 35 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 5,
                                    "dailyPercentValue": 0.1,
                                    "id": "protein",
                                    "displayValue": " 5 g",
                                    "dailyValue": "10%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 0,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 0 mg",
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
                                    "displayValue": " 400 Cals",
                                    "value": 400
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 18,
                                    "dailyPercentValue": 0.2308,
                                    "id": "totalFat",
                                    "displayValue": " 18 g",
                                    "dailyValue": "23%"
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
                                    "value": 90,
                                    "dailyPercentValue": 0.3,
                                    "id": "cholesterol",
                                    "displayValue": " 90 mg",
                                    "dailyValue": "30%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 290,
                                    "dailyPercentValue": 0.1261,
                                    "id": "sodium",
                                    "displayValue": " 290 mg",
                                    "dailyValue": "13%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 52,
                                    "dailyPercentValue": 0.1891,
                                    "id": "totalCarbs",
                                    "displayValue": " 52 g",
                                    "dailyValue": "19%"
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
                                    "value": 51,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 51 g",
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
                                    "value": 0,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 0 mg",
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
                                    "displayValue": " 520 Cals",
                                    "value": 520
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 21,
                                    "dailyPercentValue": 0.2692,
                                    "id": "totalFat",
                                    "displayValue": " 21 g",
                                    "dailyValue": "27%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 13,
                                    "dailyPercentValue": 0.65,
                                    "id": "saturatedFat",
                                    "displayValue": " 13 g",
                                    "dailyValue": "65%"
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
                                    "value": 115,
                                    "dailyPercentValue": 0.3833,
                                    "id": "cholesterol",
                                    "displayValue": " 115 mg",
                                    "dailyValue": "38%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 400,
                                    "dailyPercentValue": 0.1739,
                                    "id": "sodium",
                                    "displayValue": " 400 mg",
                                    "dailyValue": "17%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 72,
                                    "dailyPercentValue": 0.2618,
                                    "id": "totalCarbs",
                                    "displayValue": " 72 g",
                                    "dailyValue": "26%"
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
                                    "value": 70,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 70 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 11,
                                    "dailyPercentValue": 0.22,
                                    "id": "protein",
                                    "displayValue": " 11 g",
                                    "dailyValue": "22%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 0,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 0 mg",
                                    "dailyValue": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "categoryName": "Blended Beverages",
                    "subcategoryName": "Creme Frappuccino",
                    "productName": "Salted Caramel Mocha Crème Frappuccino® Blended Beverage",
                    "description": "We combine mocha sauce and toffeenut syrup with milk and ice, then finish it off with sweetened whipped cream, caramel sauce and a blend of turbinado sugar and sea salt for a sweet and salty celebration.",
                    "imageURI": "https://globalassets.starbucks.com/assets/8e0b1749cfad49f085e3efff636aef58.jpg",
                    "sizes": [
                        {
                            "name": "Tall",
                            "value": 354,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 290 Cals",
                                    "value": 290
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
                                    "value": 0.3,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.3 g",
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
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 290,
                                    "dailyPercentValue": 0.1261,
                                    "id": "sodium",
                                    "displayValue": " 290 mg",
                                    "dailyValue": "13%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 43,
                                    "dailyPercentValue": 0.1564,
                                    "id": "totalCarbs",
                                    "displayValue": " 43 g",
                                    "dailyValue": "16%"
                                },
                                {
                                    "displayName": "Fibre",
                                    "unitOfMeasure": "g",
                                    "value": 1,
                                    "dailyPercentValue": 0.0357,
                                    "id": "dietaryFiber",
                                    "displayValue": " 1 g",
                                    "dailyValue": "4%"
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
                                    "value": 5,
                                    "dailyPercentValue": 0.1,
                                    "id": "protein",
                                    "displayValue": " 5 g",
                                    "dailyValue": "10%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 5,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 5 mg",
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
                                    "displayValue": " 410 Cals",
                                    "value": 410
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
                                    "value": 55,
                                    "dailyPercentValue": 0.1833,
                                    "id": "cholesterol",
                                    "displayValue": " 55 mg",
                                    "dailyValue": "18%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 390,
                                    "dailyPercentValue": 0.1696,
                                    "id": "sodium",
                                    "displayValue": " 390 mg",
                                    "dailyValue": "17%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 61,
                                    "dailyPercentValue": 0.2218,
                                    "id": "totalCarbs",
                                    "displayValue": " 61 g",
                                    "dailyValue": "22%"
                                },
                                {
                                    "displayName": "Fibre",
                                    "unitOfMeasure": "g",
                                    "value": 1,
                                    "dailyPercentValue": 0.0357,
                                    "id": "dietaryFiber",
                                    "displayValue": " 1 g",
                                    "dailyValue": "4%"
                                },
                                {
                                    "displayName": "Sugars",
                                    "unitOfMeasure": "g",
                                    "value": 58,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 58 g",
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
                                    "value": 10,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 10 mg",
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
                                    "displayValue": " 490 Cals",
                                    "value": 490
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 17,
                                    "dailyPercentValue": 0.2179,
                                    "id": "totalFat",
                                    "displayValue": " 17 g",
                                    "dailyValue": "22%"
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
                                    "value": 60,
                                    "dailyPercentValue": 0.2,
                                    "id": "cholesterol",
                                    "displayValue": " 60 mg",
                                    "dailyValue": "20%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 490,
                                    "dailyPercentValue": 0.213,
                                    "id": "sodium",
                                    "displayValue": " 490 mg",
                                    "dailyValue": "21%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 77,
                                    "dailyPercentValue": 0.28,
                                    "id": "totalCarbs",
                                    "displayValue": " 77 g",
                                    "dailyValue": "28%"
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
                                    "value": 73,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 73 g",
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
                                    "value": 10,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 10 mg",
                                    "dailyValue": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "categoryName": "Blended Beverages",
                    "subcategoryName": "Creme Frappuccino",
                    "productName": "Double Chocolaty Chip Crème Frappuccino® Blended Beverage",
                    "description": "Rich mocha-flavoured sauce meets up with chocolaty chips, milk and ice for a blender bash. Top it off with sweetened whipped cream and mocha drizzle for a real party in your mouth.",
                    "imageURI": "https://globalassets.starbucks.com/assets/41daf68bcbf84ee68b7d23e0b820127f.jpg",
                    "sizes": [
                        {
                            "name": "Tall",
                            "value": 354,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 290 Cals",
                                    "value": 290
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
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 190,
                                    "dailyPercentValue": 0.0826,
                                    "id": "sodium",
                                    "displayValue": " 190 mg",
                                    "dailyValue": "8%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 36,
                                    "dailyPercentValue": 0.1309,
                                    "id": "totalCarbs",
                                    "displayValue": " 36 g",
                                    "dailyValue": "13%"
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
                                    "value": 33,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 33 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 5,
                                    "dailyPercentValue": 0.1,
                                    "id": "protein",
                                    "displayValue": " 5 g",
                                    "dailyValue": "10%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 10,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 10 mg",
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
                                    "displayValue": " 400 Cals",
                                    "value": 400
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 19,
                                    "dailyPercentValue": 0.2436,
                                    "id": "totalFat",
                                    "displayValue": " 19 g",
                                    "dailyValue": "24%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 13,
                                    "dailyPercentValue": 0.65,
                                    "id": "saturatedFat",
                                    "displayValue": " 13 g",
                                    "dailyValue": "65%"
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
                                    "value": 270,
                                    "dailyPercentValue": 0.1174,
                                    "id": "sodium",
                                    "displayValue": " 270 mg",
                                    "dailyValue": "12%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 52,
                                    "dailyPercentValue": 0.1891,
                                    "id": "totalCarbs",
                                    "displayValue": " 52 g",
                                    "dailyValue": "19%"
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
                                    "value": 48,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 48 g",
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
                                    "value": 15,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 15 mg",
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
                                    "displayValue": " 510 Cals",
                                    "value": 510
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
                                    "value": 360,
                                    "dailyPercentValue": 0.1565,
                                    "id": "sodium",
                                    "displayValue": " 360 mg",
                                    "dailyValue": "16%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 69,
                                    "dailyPercentValue": 0.2509,
                                    "id": "totalCarbs",
                                    "displayValue": " 69 g",
                                    "dailyValue": "25%"
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
                                    "value": 63,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 63 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 9,
                                    "dailyPercentValue": 0.18,
                                    "id": "protein",
                                    "displayValue": " 9 g",
                                    "dailyValue": "18%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 20,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 20 mg",
                                    "dailyValue": null
                                }
                            ]
                        }
                    ]
                },
                {
                    "categoryName": "Blended Beverages",
                    "subcategoryName": "Coffee Frappuccino",
                    "productName": "Coffee Frappuccino® Blended Beverage",
                    "description": "Coffee meets milk and ice in a blender for a rumble-and-tumble togetherness to create one of our most-beloved original Frappuccino® blended beverages.",
                    "imageURI": "https://globalassets.starbucks.com/assets/2cf55066b3ec4547b452aebffe0870cf.jpg",
                    "sizes": [
                        {
                            "name": "Tall",
                            "value": 354,
                            "unit": "mL",
                            "nutrition": [
                                {
                                    "displayName": "Calories",
                                    "displayValue": " 160 Cals",
                                    "value": 160
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 2.5,
                                    "dailyPercentValue": 0.0321,
                                    "id": "totalFat",
                                    "displayValue": " 2.5 g",
                                    "dailyValue": "3%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 1.5,
                                    "dailyPercentValue": 0.075,
                                    "id": "saturatedFat",
                                    "displayValue": " 1.5 g",
                                    "dailyValue": "7%"
                                },
                                {
                                    "displayName": "+ Trans",
                                    "unitOfMeasure": "g",
                                    "value": 0.1,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.1 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Cholesterol",
                                    "unitOfMeasure": "mg",
                                    "value": 10,
                                    "dailyPercentValue": 0.0333,
                                    "id": "cholesterol",
                                    "displayValue": " 10 mg",
                                    "dailyValue": "3%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 160,
                                    "dailyPercentValue": 0.0696,
                                    "id": "sodium",
                                    "displayValue": " 160 mg",
                                    "dailyValue": "7%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 31,
                                    "dailyPercentValue": 0.1127,
                                    "id": "totalCarbs",
                                    "displayValue": " 31 g",
                                    "dailyValue": "11%"
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
                                    "value": 31,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 31 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 3,
                                    "dailyPercentValue": 0.06,
                                    "id": "protein",
                                    "displayValue": " 3 g",
                                    "dailyValue": "6%"
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
                                    "displayValue": " 230 Cals",
                                    "value": 230
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 3,
                                    "dailyPercentValue": 0.0385,
                                    "id": "totalFat",
                                    "displayValue": " 3 g",
                                    "dailyValue": "4%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 2,
                                    "dailyPercentValue": 0.1,
                                    "id": "saturatedFat",
                                    "displayValue": " 2 g",
                                    "dailyValue": "10%"
                                },
                                {
                                    "displayName": "+ Trans",
                                    "unitOfMeasure": "g",
                                    "value": 0.1,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.1 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Cholesterol",
                                    "unitOfMeasure": "mg",
                                    "value": 10,
                                    "dailyPercentValue": 0.0333,
                                    "id": "cholesterol",
                                    "displayValue": " 10 mg",
                                    "dailyValue": "3%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 230,
                                    "dailyPercentValue": 0.1,
                                    "id": "sodium",
                                    "displayValue": " 230 mg",
                                    "dailyValue": "10%"
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
                                    "value": 3,
                                    "dailyPercentValue": 0.06,
                                    "id": "protein",
                                    "displayValue": " 3 g",
                                    "dailyValue": "6%"
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
                                    "displayValue": " 310 Cals",
                                    "value": 310
                                },
                                {
                                    "displayName": "Fat",
                                    "unitOfMeasure": "g",
                                    "value": 5,
                                    "dailyPercentValue": 0.0641,
                                    "id": "totalFat",
                                    "displayValue": " 5 g",
                                    "dailyValue": "6%"
                                },
                                {
                                    "displayName": "Saturated",
                                    "unitOfMeasure": "g",
                                    "value": 2.5,
                                    "dailyPercentValue": 0.125,
                                    "id": "saturatedFat",
                                    "displayValue": " 2.5 g",
                                    "dailyValue": "13%"
                                },
                                {
                                    "displayName": "+ Trans",
                                    "unitOfMeasure": "g",
                                    "value": 0.1,
                                    "dailyPercentValue": null,
                                    "id": "transFat",
                                    "displayValue": " 0.1 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Cholesterol",
                                    "unitOfMeasure": "mg",
                                    "value": 15,
                                    "dailyPercentValue": 0.05,
                                    "id": "cholesterol",
                                    "displayValue": " 15 mg",
                                    "dailyValue": "5%"
                                },
                                {
                                    "displayName": "Sodium",
                                    "unitOfMeasure": "mg",
                                    "value": 300,
                                    "dailyPercentValue": 0.1304,
                                    "id": "sodium",
                                    "displayValue": " 300 mg",
                                    "dailyValue": "13%"
                                },
                                {
                                    "displayName": "Carbohydrate",
                                    "unitOfMeasure": "g",
                                    "value": 60,
                                    "dailyPercentValue": 0.2182,
                                    "id": "totalCarbs",
                                    "displayValue": " 60 g",
                                    "dailyValue": "22%"
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
                                    "value": 59,
                                    "dailyPercentValue": null,
                                    "id": "sugars",
                                    "displayValue": " 59 g",
                                    "dailyValue": null
                                },
                                {
                                    "displayName": "Protein",
                                    "unitOfMeasure": "g",
                                    "value": 5,
                                    "dailyPercentValue": 0.1,
                                    "id": "protein",
                                    "displayValue": " 5 g",
                                    "dailyValue": "10%"
                                },
                                {
                                    "displayName": "Caffeine",
                                    "unitOfMeasure": "mg",
                                    "value": 125,
                                    "dailyPercentValue": null,
                                    "maximum": {
                                        "displayName": "Caffeine Range",
                                        "unitOfMeasure": "mg",
                                        "value": 0,
                                        "dailyPercentValue": null
                                    },
                                    "id": "caffeine",
                                    "displayValue": " 125 mg",
                                    "dailyValue": null
                                }
                            ]
                        }
                    ]
                }
            ]
        };


        data.products.forEach(product => {
            if (!product.hasOwnProperty('categoryName') || !data.category.hasOwnProperty(product.categoryName)
                || !product.hasOwnProperty('subcategoryName') || !data.subcategory.hasOwnProperty(product.subcategoryName)) {
                return;
            }

            product.sizes.forEach((size_obj, size_i) => {
                if (data.category[product.categoryName].meta.sizes.length <= size_i) {
                    data.category[product.categoryName].meta.sizes[size_i] = {
                        "name": size_obj.name,
                        "value": size_obj.value,
                        "unit": size_obj.unit
                    };
                }

                if (data.subcategory[product.subcategoryName].meta.sizes.length <= size_i) {
                    data.subcategory[product.subcategoryName].meta.sizes[size_i] = {
                        "name": size_obj.name,
                        "value": size_obj.value,
                        "unit": size_obj.unit
                    };
                }

                let catMetaSizeObj = data.category[product.categoryName].meta.sizes[size_i];
                let subcatMetaSizeObj = data.subcategory[product.subcategoryName].meta.sizes[size_i];

                size_obj.nutrition.forEach((nut, nut_i) => {
                    if (nut_i === 0) {
                        // add the id for calories
                        nut["id"] = "calories";
                    }

                    // find range for category
                    if (!catMetaSizeObj.hasOwnProperty(nut.id)){
                        catMetaSizeObj[nut.id] = {
                            "minValue": nut.value,
                            "maxValue": nut.value
                        }
                    } else {
                        // find the smallest minValue
                        if (catMetaSizeObj[nut.id].minValue > nut.value) {
                            catMetaSizeObj[nut.id].minValue = nut.value;
                        }

                        // find the largest maxValue
                        if (catMetaSizeObj[nut.id].maxValue < nut.value) {
                            catMetaSizeObj[nut.id].maxValue = nut.value;
                        }
                    }

                    // find range for sub category
                    if (!subcatMetaSizeObj.hasOwnProperty(nut.id)){
                        subcatMetaSizeObj[nut.id] = {
                            "minValue": nut.value,
                            "maxValue": nut.value
                        }
                    } else {
                        // find the smallest minValue
                        if (subcatMetaSizeObj[nut.id].minValue > nut.value) {
                            subcatMetaSizeObj[nut.id].minValue = nut.value;
                        }

                        // find the largest maxValue
                        if (subcatMetaSizeObj[nut.id].maxValue < nut.value) {
                            subcatMetaSizeObj[nut.id].maxValue = nut.value;
                        }
                    }
                })
            })
        })

        return data;
    }

})();

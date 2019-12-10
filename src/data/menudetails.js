import breadSandwich from "../images/bread-food-salad-sandwich.jpg";
import spaghettiPasta from "../images/food-dinner-pasta-spaghetti.jpg";
import healthySalad from "../images/food-salad-healthy-lunch.jpg";
import meatMushroom from "../images/meat-vegetables-gemuesepiess-mushrooms-111131.jpeg";
import muffin from "../images/muffin.jpg";
import tomYumSoup from "../images/pexels-photo-48726.jpeg";
import burgerFries from "../images/pexels-photo-70497.jpeg";
import stirFry from "../images/pexels-photo-76093.jpeg";
import spinachSalad from "../images/pexels-photo-169743.jpeg";
import kaleSalad from "../images/salad-healthy-diet-spinach.jpg";
import salmonCake from "../images/salmon-dish-food-meal-46239.jpeg";
import pizza from "../images/vegetables-italian-pizza-restaurant.jpg";

const menuDetails = [
    {
        "id": "1",
        "name": "烤牛肉香煎芝士",
        "image": breadSandwich,
        "price": "￥69",
        "served": ["lunch", "dinner"],
        "spiceLevel": "medium"
    },
    {
        "id": "2",
        "name": "蟹粉捞面",
        "image": spaghettiPasta,
        "price": "￥397",
        "served": ["lunch", "dinner"],
        "spiceLevel": "high"
    },
    {
        "id": "3",
        "name": "龙碗",
        "image": healthySalad,
        "price": "￥58",
        "served": ["lunch","dinner"],
        "spiceLevel": "high"
    },
    {
        "id": "4",
        "name": "荠菜肉丝炒年糕",
        "image": meatMushroom,
        "price": "￥38",
        "served": ["lunch", "dinner"],
        "spiceLevel": "high"
    },
    {
        "id": "5",
        "name": "芝士蛋糕",
        "image": muffin,
        "price": "￥36",
        "served": ["all day"],
        "spiceLevel": "high"
    },
    {
        "id": "6",
        "name": "鸡汤",
        "image": tomYumSoup,
        "price": "￥80",
        "served": ["lunch", "dinner"],
        "spiceLevel": "medium"
    },
    {
        "id": "7",
        "name": "蘑菇味狠浓牛肉汉堡",
        "image": burgerFries,
        "price": "￥98",
        "served": ["breakfast", "lunch", "dinner"],
        "spiceLevel": "medium"
    },
    {
        "id": "8",
        "name": "韵味小炒宁乡花猪肉",
        "image": stirFry,
        "price": "￥59",
        "served": ["lunch", "dinner"],
        "spiceLevel": "high"
    },
    {
        "id": "9",
        "name": "沙拉",
        "image": spinachSalad,
        "price": "￥58",
        "served": ["lunch","dinner"],
        "spiceLevel": "medium"
    },
    {
        "id": "10",
        "name": "豆浆豆苗",
        "image": kaleSalad,
        "price": "￥68",
        "served": ["lunch","dinner"],
        "spiceLevel": "low"
    },
    {
        "id": "11",
        "name": "三文鱼拼盘",
        "image": salmonCake,
        "price": "￥55",
        "served": ["all day"],
        "spiceLevel": "medium"
    },
    {
        "id": "12",
        "name": "玛格丽特",
        "image": pizza,
        "price": "￥38",
        "served": ["lunch", "dinner"],
        "spiceLevel": "high"
    }
];

export default menuDetails;
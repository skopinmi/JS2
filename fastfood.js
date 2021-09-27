'use strict';
// ### Маленький (50 рублей, 20 калорий).
// ### Большой (100 рублей, 40 калорий). 
// ### Гамбургер может быть с одним из нескольких видов начинок (обязательно):
// ### С сыром (+10 рублей, +20 калорий).
// ### С салатом (+20 рублей, +5 калорий).
// ### С картофелем (+15 рублей, +10 калорий). 
// ### Дополнительно гамбургер можно посыпать приправой (+15 рублей, +0 калорий) 
// и полить майонезом (+20 рублей, +5 калорий). 
// ### 3Напишите программу, рассчитывающую стоимость и калорийность гамбургера.
//  Можно использовать примерную архитектуру класса из методички, но можно использовать и свою.


const size = [{title: 'small', price: 50, calories: 20}, 
            {title: 'big', price: 100, calories: 40 }];
const toppings = [{title: 'cheese', price: 10, calories: 20}, 
            {title: 'salad', price: 20, calories: 5 },
            {title: 'potato', price: 15, calories: 10}];
const sauce = [{title: 'sprinkling', price: 15, calories: 0},
        {title: 'mayonnaise', price: 20, calories: 5}];

class Burger {
    constructor (size, topping, sauce) {
        this.size = size;
        this.topping = topping;
        this.sauce = sauce;
    }
    getTotalPrice(){
        return this.size.price + this.topping.price + this.sauce.price;
    }
    getTotalCalories(){
        return this.size.calories + this.topping.calories + this.sauce.calories;
    }
}

//тесе
let myBurger1 = new Burger(size[0], toppings[0], sauce[0]);
console.log(myBurger1);
console.log(myBurger1.getTotalPrice());
console.log(myBurger1.getTotalCalories());
let myBurger2 = new Burger(size[1], toppings[1], sauce[1]);
console.log(myBurger2);
console.log(myBurger2.getTotalPrice());
console.log(myBurger2.getTotalCalories());
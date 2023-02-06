function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {};
    pizza.crustType = crustType;
    pizza.sauceType = sauceType;
    pizza.cheeses = cheeses;
    pizza.toppings = toppings;
    return pizza;
}

var chicagoStyle = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
console.log(chicagoStyle);

var greekStyle = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
console.log(greekStyle);

var nyStyle = pizzaOven("hand tossed", "marinara", ["mozzarella"],["pepperoni"]);
console.log(nyStyle);

var phillyStyle = pizzaOven("thin and crispy", "alfredo sauce", ["provolone", "mozzarella"],["steak", "onions", "mushrooms"]);
console.log(phillyStyle);

var crustTypes = [
    "deep dish",
    "hand tossed",
    "thin and crispy",
    "stuff crust",
    "naan bread"
];

var sauceTypes = [
    "tomato sauce",
    "marinara",
    "bbq sauce",
    "alfredo sauce",
    "nacho cheese",
    "vodka sauce"
];

var cheeses = [
    "mozzarella",
    "cheddar",
    "feta",
    "swiss cheese",
    "blue cheese",
    "provolone",
    "parmesan",
    "pepperjack"
];

var toppings = [
    "pepperoni",
    "sausage",
    "ham",
    "chicken",
    "steak",
    "olives",
    "bell peppers",
    "onions",
    "mushrooms",
    "jalapenos"
];

function randomRange(max, min) {
    return Math.floor(Math.random() * max - min) + min;
}

function randomPick(arr) {
    var i = Math.floor(arr.length * Math.random());
    return arr[i];
}

function randomPizza() {
    var pizza = {};
    pizza.crustType = randomPick(crustTypes);
    pizza.sauceType = randomPick(sauceTypes);
    pizza.cheeses = [];
    pizza.toppings = [];
    for(var i=0; i<randomRange(6, 1); i++) {
        pizza.cheeses.push(randomPick(cheeses));
    }
    for(var i=0; i<randomRange(5, 1); i++) {
        pizza.toppings.push(randomPick(toppings));
    }
    return pizza;
}

console.log(randomPizza());
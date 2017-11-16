var ingredient1 = "bread";
var ingredient2 = "mild cheese";
var ingredient3 = "sharp cheese";
var ingrediant4 = "butter";
var ingredient5 = "tomato";
var ingredient6 = "garlic";

//Examples of Array Literals
var grilledCheeseIngredients = ['bread', 'mild cheese', 'sharp cheese', 'butter', 'tomato', 'garlic'];
var tomatoSauceIngredients = ['tomato', 'garlic', 'olive oil', 'basil', 'oregano'];

var superheroines = ["catwoman", "she-hulk", "mystique"];
superheroines.push("wonder woman"); //'push' added "wonder woman" to the END of the array.
//the array superheroines is now ["catwoman", "she-hulk", "mystique"m "wonder woman"];

var cities = ["New York", "San Francisco"];
cities.unshift("Philadelphia"); //'unshift' added "Philadelphia" to the BEGINNING of the array.
//the array cities is now ["Philadelphia", "New York", "San Francisco"];


//We can also use the SPREAD (represented by '...') operator in Chrome/FireFox/Safari to create
//a new array easily using an older array, but without modifying the older array.
var cities = ["New York", "San Francisico"];

["Philadelphia". ...cities]; //["Philadelphia", "New York", "San Francisco"]; (added to the BEGINNING)
[...cities, "Philadeplphia"];//["New York", "San Francisco", "Philadelphia"]; (added to the END)

//'cities' is still ["New York", "San Francisco"]

// Pete likes to bake some cakes. He has some recipes and ingredients. Unfortunately he is not good in maths. Can you help him to find out, how many cakes he could bake considering his recipes?

// Write a function cakes(), which takes the recipe (object) and the available ingredients (also an object) and returns the maximum number of cakes Pete can bake (integer). For simplicity there are no units for the amounts (e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200). Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({flour: 500, sugar: 200, eggs: 1}, {flour: 1200, sugar: 1200, eggs: 5, milk: 200}); 
// // must return 0
// cakes({apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100}, {sugar: 500, flour: 2000, milk: 2000}); 

function cakes(recipe, available) {
    available_flour = Math.floor(available.flour / recipe.flour);
    available_sugar = Math.floor(available.sugar / recipe.sugar);
    available_eggs = Math.floor(available.eggs / recipe.eggs);
    console.log(available[(1)]);
    
    result = Math.min(available_flour, available_sugar, available_eggs)
    return result >= 0 ? result : 0
}
let recipe = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};
let available = {apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100};

console.log((cakes(recipe, available)));

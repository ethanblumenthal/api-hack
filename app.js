function searchMealByCategory(category) {
  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  $.getJSON(url, function(data) {
    let mealId = data.meals[Math.floor(Math.random() * data.meals.length)].idMeal;
    searchMealDetailsById(mealId);
  });
}

function searchCocktailByIngredient(ingredient) {
  let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${ingredient}`;
  $.getJSON(url, function(data) {
    let cocktailId = data.drinks[Math.floor(Math.random() * data.drinks.length)].idDrink;
    console.log(cocktailId);
  });
}

function searchMealDetailsById(mealId) {
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  $.getJSON(url, function(data) {
    console.log(data.meals);
  });
}

function searchCocktailDetailsById(cocktailId) {

}

function handleSubmit() {
  $('#form').submit((e) => {
    e.preventDefault();
    let category = $('#category').val();
    let ingredient = $('#ingredient').val();
    $('#category').val('');
    $('#ingredient').val('');
    searchMealByCategory(category);
    searchCocktailByIngredient(ingredient);
  });
}
handleSubmit();
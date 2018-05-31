function searchMealByCategory(meal) {
  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${meal}`;
  $.getJSON(url, function(data) {
    let mealId = data.meals[Math.floor(Math.random() * data.meals.length)].idMeal;
    searchMealDetailsById(mealId);
  });
}

function searchDrinkByCategory(drink) {
  let url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${drink}`;
  $.getJSON(url, function(data) {
    let cocktailId = data.drinks[Math.floor(Math.random() * data.drinks.length)].idDrink;
    searchCocktailDetailsById(drinkId);
  });
}

function searchMealDetailsById(mealId) {
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  $.getJSON(url, function(data) {
    console.log(data.meals);
  });
}

function searchCocktailDetailsById(drinkId) {
  let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  $.getJSON(url, function(data) {
    console.log(data.drinks);
  });
}

function handleSubmit() {
  $('#form').submit((e) => {
    e.preventDefault();
    let meal = $('#meal').val();
    let drink = $('#drink').val();
    // $('#meal').val('');
    // $('#drink').val('');
    searchMealByCategory(meal);
    searchDrinkByCategory(drink);
  });
}
handleSubmit();
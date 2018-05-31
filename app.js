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
    let drinkId = data.drinks[Math.floor(Math.random() * data.drinks.length)].idDrink;
    searchDrinkDetailsById(drinkId);
  });
}

function searchMealDetailsById(mealId) {
  let url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  $.getJSON(url, function(data) {
    let mealDetails = data.meals[0];
    renderMealResults(mealDetails);
  });
}

function searchDrinkDetailsById(drinkId) {
  let url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${drinkId}`;
  $.getJSON(url, function(data) {
    let drinkDetails = data.drinks[0];
    renderDrinkResults(drinkDetails);
  });
}

function renderMealResults(mealDetails) {
  $('#mealResults').html(
    `<h1>${mealDetails.strMeal}</h1>
    <img src="${mealDetails.strMealThumb}" />
    <p>${mealDetails.strInstructions}</p>`
  );
}

function renderDrinkResults(drinkDetails) {
  $('#drinkResults').html(
    `<h1>${drinkDetails.strDrink}</h1>
    <img src="${drinkDetails.strDrinkThumb}" />
    <p>${drinkDetails.strInstructions}</p>`
  );
}

function handleSubmit() {
  $('#search').submit((e) => {
    e.preventDefault();
    let meal = $('#meal').val();
    let drink = $('#drink').val();
    searchMealByCategory(meal);
    searchDrinkByCategory(drink);
  });
}
handleSubmit();
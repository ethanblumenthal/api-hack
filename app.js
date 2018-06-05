// SEARCHES FOR A RANDOM PAIRING
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

// SEARCHES FOR DETAILS ABOUT PAIRING
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

// RENDERS DETAILS ABOUT PAIRING TO PAGE
function renderMealResults(mealDetails) {
  $('#mealResults').html(
    `<a href="${mealDetails.strYoutube}">
      <img src="${mealDetails.strMealThumb}" />
      <div class="card-content">
        <h2>${mealDetails.strMeal}</h2>
        <p>${mealDetails.strInstructions}</p>
      </div>
    </a>`
  );
}

function renderDrinkResults(drinkDetails) {
  $('#drinkResults').html(
    `<a href="${drinkDetails.strDrinkThumb}">
      <img src="${drinkDetails.strDrinkThumb}" />
      <div class="card-content">
        <h2>${drinkDetails.strDrink}</h2>
        <p>${drinkDetails.strInstructions}</p>
      </div>
    </a>`
  );
}

// HANDLES USER EVENTS
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
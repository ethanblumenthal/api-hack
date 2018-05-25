function searchMealByCategory(category) {
  let url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`;
  $.getJSON(url, function(data) {
    let mealId = data.meals[Math.floor(Math.random() * data.meals.length)].idMeal;
    console.log(mealId);
  });
}

function searchCocktailByIngredient(ingredient) {

}

function searchMealDetailsById(mealId) {

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
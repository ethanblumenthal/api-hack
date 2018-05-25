function searchMealByCategory(category) {
  // let query = {
  //   location: search,
  //   categories: 'Breweries',
  //   limit: 10,
  //   sort_by: 'rating'
  // }
  // $.getJSON(YELP_URL, query, callback);
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
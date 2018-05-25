function handleSubmit() {
  $('#form').submit((e) => {
    e.preventDefault();
    let meal = $('#meal').val();
    let drink = $('#drink').val();
    $('#meal').val('');
    $('#drink').val('');
    callMealApi(meal);
    callDrinkApi(drink);
    console.log(meal);
    console.log(drink);
  });
}
handleSubmit();
// Business logic
function Pizza(toppings, size, price){
  this.toppings = toppings [];
  this.size = size;
  this.price = 0;
};

Pizza.prototype.calculatePrice = function() {
  const STANDARD = 12;
  var extraToppings = 0;

  if
}

// User interface logic
$(document).ready(function(){
  $("form#form-toppings").submit(function(event){
    event.preventDefault();
    $("input:checkbox[name=toppings]:checked").each(function(){
      var topping = $(this).val();
    });
    var perPizza = new Pizza(pizzaTopping, pizzaSize);
  });
});

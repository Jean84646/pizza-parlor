// Business logic
function Pizza(toppings, size, price) {
  this.arrayToppings = toppings;
  this.pizzaSize = size;
  this.price = 0;
};

var arrayToppings = [];
var pizzaSize = "";

Pizza.prototype.calculatePrice = function() {
  const STANDARD = 12;
  var extraCharge = 0;
debugger;
  if (arrayToppings.length > 1 && pizzaSize === 12) {
    extraCharge += 2;
  } else if (pizzaSize === 14) {
    extraCharge += 4;
  } else if (pizzaSize === 16) {
    extraCharge += 6;
  };
  return STANDARD + extraCharge;
};

// User interface logic
$(document).ready(function() {
  $("form#form-toppings").submit(function(event) {
    event.preventDefault();
      $("input:checkbox[name=toppings]:checked").each(function() {
        var toppings = $(this).val();
        arrayToppings.push(toppings);
      });
      pizzaSize = parseInt($("input:radio[name=size]:checked").val());
      var perPizza = new Pizza(arrayToppings, pizzaSize);

      $("ul#itemize").children().remove();

      arrayToppings.forEach(function(item) {
        $("ul#itemize").append("<li>" + item + "</li>");
      });

      $("ul#itemize").append("<li>" + pizzaSize + ' "' + "</li>");

      perPizza.price = perPizza.calculatePrice();
      $("#total-price").text(perPizza.price);

      arrayToppings = [];

      $("#output-area").show();
      $("#form-toppings").trigger("reset");
  });
});

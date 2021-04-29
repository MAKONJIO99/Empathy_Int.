$(document).ready(function(){
    $("#order").click(function(){
      $("#form1").toggle();
    });
  });
  
  function Results (type,size,crust,toppings) {
    this.type = type;
    this.size= size;
    this.streak= streak;
    this.toppings=toppings;
  };
  Results.prototype.order = function() {
    return "You have made a donation of type  " + this.type + " and chose " + this.toppings + " as donation package, " +" for Support Streak you chose ."+ this.streak
  };
  function TotalPrice (price, quantity, delivery,toppings,crust) {
    this.price= price;
    this.quantity=quantity;
    this.delivery=delivery;
    this.toppings=toppings;
    this.streak=streak;
  };
  TotalPrice.prototype.finalTotal = function () {
    return ( this.price + this.delivery + this.toppings + this.streak )* this.quantity ;
  };
  
  var sizePrices = [1200, 800, 600]
  var priceToppings = [100,120,80,150,200]
  var toppingsName= ["Monthly contribution" , "monthly contribution extra" , "semi-annual" ,"annual", " annual-extra"]
  var streakNames= ["Maximum-package", "Medium-Package", "Access-Package"]
  var streakPrices = [100,120,200]
  var deliveryPrices = [0, 200];
  $(document).ready(function(){
    $('form#form1').submit(function (event) {
        event.preventDefault();
    var pizzaType = $('#type').val();
    var pizzaSize = parseInt($('#size').val());
    var pizzaToppings=parseInt($('#toppings').val());
    var priceStreak =parseInt($('#crust').val());
    var pizzaTop = $('#toppings').val();
    var pizzaQty = parseInt($('#quantity').val());
    var pizzaPick = parseInt($('#delivery').val());
    var price = sizePrices[pizzaSize - 1];
    var DeliveryCost = deliveryPrices[pizzaPick - 1];
    var ToppingsCost = priceToppings[pizzaToppings-1];
    var streakCost = streakPrices[priceStreak-1]
    var topNames = toppingsName[pizzaTop-1]
    var streakName = streakNames[priceStreak-1] 
    newOrder = new Results(pizzaType,pizzaSize, streakName,topNames,streakName);
    newTotal = new TotalPrice(price, pizzaQty, DeliveryCost,ToppingsCost,streakCost);
    if (pizzaPick===1){
        alert( newOrder.order());
        alert("Your total donation is: " + newTotal.finalTotal());
        alert("Thank you for supporting us! " )
        }else{
            if(pizzaPick===2){
               var location= prompt(" What Message Do You Have For Your Sponsored Child? ");
               alert("your Message Is " + location + " The surprise gift is worth 200/= ");
               alert(newOrder.order());
               alert("Your total donation is: " + newTotal.finalTotal());
               alert("Thank you for supporting us!")
            }
        }
  })
  });
  
  
  
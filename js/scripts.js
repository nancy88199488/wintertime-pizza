var price , crustCost, topping_price ;
let total = 0;
function Getpizza(size,crust,topping, total ){
  this.size = size;
  this.crust = crust;
  this.topping = topping;
  this.total = total;
}
$(document).ready(function(){
  $("button.proceed").click(function(event){
   let size = $("#size option:selected").val();
   let crust = $("#crust option:selected").val();
   let topping = [];
   $.each($("input[name='toppings']:checked"), function(){
       topping.push($(this).val());
   });
   console.log(topping.join(", "));
   switch(size){
    case "0":
      price =0;
    break;
    case "large":
       price = 1200;
       console.log(price);
     break;
     case "medium":
       price = 850;
       console.log("The price is "+price);
     break;
     case "small":
       price = 600;
       console.log(price);
     default:
       console.log("error");
   }
   switch(crust){
      case "0":
        crustCost = 0;
      break;
      case "Crispy":
        crustCost = 200;
      break;
      case "Stuffed":
        crustCost = 250;
      break;
      case "Gluten-free":
        crustCost = 180;
      break;
      default:
        console.log("No price");
    }
    let topping_value = topping.length*50;
    console.log("toppins value" + topping_value);
    if((size == "0") && (crust == "0")){
      console.log("nothing selected");
      $("button.proceed").show();
      $("#information").show();
      $("div.choise").hide();
      alert("Please select pizza size and crust");
    }
    else{
      $("button.proceed").hide();
      $("#information").hide();
      $("div.choise").slideDown(1000);
    }
    total = price + crustCost + topping_value;
    console.log(total);
    let checkoutTotal =0;
    checkoutTotal = checkoutTotal + total;
    $("#pizzasize").html( $("#size option:selected").val());
    $("#pizzacrust").html($("#crust option:selected").val());
    $("#pizzatopping").html(topping.join(", "));
    $("#totals").html(total);
    $("button.addPizza").click(function(){
      let size = $("#size option:selected").val();
      let crust = $("#crust option:selected").val();
      let topping = [];
      $.each($("input[name='toppings']:checked"), function(){
          topping.push($(this).val());
      });
      console.log(topping.join(", "));
      switch(size){
        case "0":
          price =0;
        break;
        case "large":
           price = 1200;
           console.log(price);
         break;
         case "medium":
           price = 850;
           console.log("The price is "+price);
         break;
         case "small":
           price = 600;
           console.log(price);
         default:
           console.log("error");
       }
       switch(crust){
          case "0":
            crustCost = 0;
          break;
          case "Crispy":
            crustCost = 200;
          break;
          case "Stuffed":
            crustCost = 150;
          break;
          case "Gluten-free":
            crustCost = 180;
          break;
          default:
            console.log("No price");
        }
        let topping_value = topping.length*50;
        console.log("toppins value" + topping_value);
        total = price + crustCost + topping_value;
        console.log(total);
        checkoutTotal = checkoutTotal + total;
        console.log(checkoutTotal);
      var newOrder = new Getpizza(size, crust,topping,total);
      $("#ordersmade").append('<tr><td id="pizzasize">' + newOrder.size + '</td><td id="pizzacrust">'+newOrder.crust + '</td><td id="pizzatopping">'+newOrder.topping+'</td><td id="totals">'+newOrder.total+'</td></tr>');
      console.log(newOrder);
    });
    $("button#checkout").click(function(){
      $("button#checkout").hide();
      $("button.addPizza").hide();
      $("button.deliver").slideDown(1000);
      $("#addedprice").slideDown(1000);
      console.log("Your total bills is sh. "+checkoutTotal);
      $("#pizzatotal").append("Your bill is sh. "+checkoutTotal);
    });
    $("button.deliver").click(function(){
      $(".pizzatable").hide();
      $(".choise h2").hide();
      $(".delivery").slideDown(1000);
      $("#addedprice").hide();
      $("button.deliver").hide();
      $("#pizzatotal").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("You will pay sh. "+deliceryamount+" on delivery");
      $("#totalbill").append("Your bill plus delivery fee is: "+deliceryamount);
    });
    $("button#final-order").click(function(event){
      event.preventDefault();
      $("#pizzatotal").hide();
      $(".delivery").hide();
      $("button#final-order").hide();
      let deliceryamount= checkoutTotal+150;
      console.log("Final Bill is: "+deliceryamount);
      let person = $("input#fullname").val();
      let email = $("input#email").val();
      let city = $("input#city").val();
      let estate = $("input#estate").val();
      if ($("input#fullname").val() && $("input#email").val() && $("input#city").val() && $("input#estate").val()!=""){
        $("#finallmessage").append(person+", We have recieved your order and it will be delivered to you at " + city + "" +  estate + ". Prepare sh. "+deliceryamount);
        $("#totalbill").hide();
        $("#finallmessage").slideDown(1200);
      }
      else {
        alert("Please fill in the details for delivery!");
        $(".delivery").show();
        $("button#final-order").show();
      }
    });
   event.preventDefault();
  });
});
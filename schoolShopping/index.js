//USE THIS FILE TO CODE YOUR ANSWERS TO THE QUESTIONS

//Test data for the problems
let items = [
    {
      itemName: "Effective Programming Habits",
      type: "book",
      price: 13.99
    },
    {
      itemName: "Creation 3005",
      type: "computer",
      price: 299.99
    },
    {
      itemName: "Finding Your Center",
      type: "book",
      price: 15.00
    }
  ]
  
  // Prompt 1 : cartPrice
function cartPrice(cart) {
  let total = 0;
  for (let i = 0; i < cart.length; i++){
    total += cart[i].price;
  }
  return total;
}
  
  
  // Prompt 2 : mostExpensiveItemName
 function mostExpensiveItemName(cart) {
   let highest = 0;
   let expensive = '';
   for (let i = 0; i < cart.length; i++){
     if (cart[i].price > highest){
       highest = cart[i].price;
       expensive = cart[i].itemName;
     }
   }
   return expensive;
 }
  
  
  // Prompt 3 : priceLookup
function priceLookup(cart, item) {
  let lookupPrice = '';
  for (let i = 0; i < cart.length; i++){
    if (cart[i].itemName === item){
      return cart[i].price;
    }
  }
  return "No item found with that name"
}

  
  //This is to run the tests. You can ignore it but don't delete it!
  require('./index.test.js');(void 0);
  
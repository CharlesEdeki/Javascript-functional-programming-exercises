// This is the same inventory as before. No need to modify it.
let inventory = [
    { candy: "Twizzlers", inStock: 180, weeklyAverage: 200 },
    { candy: "Sour Patch Kids", inStock: 90, weeklyAverage: 100 },
    { candy: "Milk Duds", inStock: 300, weeklyAverage: 170 },
    { candy: "Now and Laters", inStock: 150, weeklyAverage: 40 }
  ];
  
  // write the numberOfCandies function here
  function numberOfCandies(inventory) {
    counter = 0;
    for (let i =0; i < inventory.length; i++){
      if (inventory[i].candy){
        counter += 1;
      }
    }
    return counter;
  }
  
  // example inputs/outputs
  // numberOfCandies(inventory) //-> 4
  // numberOfCandies([]) //-> 0
  
  
  // This is to run the tests. You can ignore it but don't delete it!
  require('./test.js');(void 0);
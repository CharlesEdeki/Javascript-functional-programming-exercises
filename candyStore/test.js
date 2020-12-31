const fs = require('fs')
let code = fs.readFileSync('./index.js', 'utf8')
eval(code)

const inventory = [
  {
    "candy": "Twizzlers",
    "inStock": 180,
    "weeklyAverage": 200
  },
  {
    "candy": "Sour Patch Kids",
    "inStock": 90,
    "weeklyAverage": 100
  },
  {
    "candy": "Milk Duds",
    "inStock": 300,
    "weeklyAverage": 170
  },
  {
    "candy": "Now and Laters",
    "inStock": 150,
    "weeklyAverage": 40
  }
]

test(numberOfCandies(inventory), inventory.length, "'inventory'")
test(numberOfCandies([]), 0, '[]')

function formatExpectation(actual, expected, args) {
   return `When called with ${args}, expected: ${expected}, got: ${actual}.`
}

function test(actual, expected, args) {
  if(actual === expected){
    console.log(`Test passed`, formatExpectation(actual, expected, args))
  }else{
    console.log('Test failed.', formatExpectation(actual, expected, args))
  }
}
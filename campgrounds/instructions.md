# Which campsites are available to reserve for my party and desired view?

People want to know if there are campsites available that will hold their party size with their desired view. Can you help us?

* `number` - the campground number, represented as a string.
* `view` - either 'Ocean' or 'Forest', represented as a string.
* `partySize` - number of people the campground can hold, represented as a number.
* `isReserved` - whether or not the response is an essay question, represented as a boolean.

Data for the campground is stored in an array. For example:

```js
let campgrounds = [
  {
    number: 1,
    view: 'ocean',
    partySize: 8,
    isReserved: false
  },
  {
    number: 5,
    view: 'ocean',
    partySize: 4,
    isReserved: false
  },
  {
    number: 12,
    view: 'ocean',
    partySize: 4,
    isReserved: true
  },
  {
    number: 18,
    view: 'forest',
    partySize: 4,
    isReserved: false
  },
  {
    number: 23,
    view: 'forest',
    partySize: 4,
    isReserved: true
  }
];
```

This is data from 5 of our campsites to show you some of the options, but there are a lot more campsites than this. You can assume that every campsite is an object with these same keys and with values of the same type. 

## How to Complete the Prompt

 Write all of your code in the `index.js` file in the designated space. Do not delete any of the existing code you have been given!

### Prompt: Campground Reserver

Write a function named 'campgroundReserver' that takes three arguments:

* an array of campsites
* a string, either 'ocean' or 'forest'
* a number, representing the party size

It should return an array of the campsite numbers of all available campsites (`isReserved == false`) with the desired view (either `Ocean` or `Forest`) and that are able to hold the party size. 

If no campsite fits the parameters, return a message that says 'Sorry, no campsites with that view are available to host your party.'

For example:
```js
campgroundReserver(campground, 'ocean', 4) //-> [1, 5]
campgroundReserver(campground, 'ocean', 6) //-> [1]
campgroundReserver(campground, 'forest', 3) //-> [18]
campgroundReserver(campground, 'forest', 6) //-> 'Sorry, no campsites with that view are available to host your party'
```
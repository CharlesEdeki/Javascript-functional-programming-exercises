// the same data subset as before - no need to modify it
let campgrounds = [
    { number: 1, view: 'ocean', partySize: 8, isReserved: false },
    { number: 5, view: 'ocean', partySize: 4, isReserved: false },
    { number: 12, view: 'ocean', partySize: 4, isReserved: true },
    { number: 18, view: 'forest', partySize: 4, isReserved: false },
    { number: 23, view: 'forest', partySize: 4, isReserved: true }
  ]
  
  // Prompt: write function findMyCampsites
  function findMyCampsites(campgrounds, view, size){
    let num = [];
    for (let i = 0; i < campgrounds.length; i++){
      if (Object.values(campgrounds[i]).includes(view) && campgrounds[i].isReserved === false){
        if (campgrounds[i].partySize >= size){
          num.push(campgrounds[i].number)
        }
      }
    }
    return num
  }
  

  // This is to run the tests. You can ignore it but don't delete it!
  require('./index.test.js'); (void 0);
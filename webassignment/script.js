// TODO: Modify generateAlienName to randomize characters
// Step 1: incorporate the new encoder and the selectRandom function
// Verify that it works

function generateAlienName(name, encoder) {
    let alienName = "";
    name = name.toLowerCase();
    // loop through each character of the name
    for (let i = 0; i < name.length; i++) {
      // check for a match in the encoder object
      let newCharacter = selectRandom(encoder[name[i]]);
      // if there's a match, add the character to the end of the new name
      if (newCharacter) {
        alienName += newCharacter;
      }
    }
    return alienName;
  }
  
    // create the alien encoder
    let encoder = {
      a: ["å", "œ"],
      b: ["boo", "bb"],
      c: ["krax", "ç"],
      d: ["du", "∂"],
      e: ["i-i", "é"],
      f: ["wa", "ƒ"],
      g: ["k", "˚kay"],
      h: ["ℍ", "^"],
      i: ["-hi", "î"],
      j: ["j", "∆"],
      k: ["k`", "˚"],
      l: ["la", "¬"],
      m: ["meep", "µ"],
      n: ["in", "ñ"],
      o: ["ȫ ", "ø"],
      p: ["plorg", "π"],
      q: ["qlax", "kyo"],
      r: ["ar", "rar"],
      s: ["smork", "ß"],
      t: ["trarg", "†"],
      u: ["oo", "ü"],
      v: ["vyort", "√"],
      w: ["weewo", "∑"],
      x: ["⸖", "≈"],
      y: ["yamska-i'liax", "¥"],
      z: ["Ⱬ", "Ω"]
    };
  
  // grabs a random item from an array
  // selectRandom(encoder["c"])
  function selectRandom(collection) {
    return collection[Math.floor(Math.random() * collection.length)];
  }
  
  // this function grabs the human name from the form
  // calls generateAlienName() function
  // and updates the DOM with the new name
  
  function alienNameSubmit(event) {
    // stop the form from submitting
    event.preventDefault();
    // get the string from the input form
    let name = document.getElementById("human-name").value;
    // call the alien name generator function
    let alienName = generateAlienName(name, encoder);
    // update the DOM with the new name
    let nameElement = document.getElementById("new-name");
    nameElement.innerHTML = "Your alien name is <h3>" + alienName + "</h3>";
    // clear form
    document.getElementById("alien-name-generator-form").reset();
    document.getElementById("submit-name").blur();
  }
  
  // add the alienNameSubmit function to the form
  let alienForm = document.getElementById("alien-name-generator-form");
  alienForm.onsubmit = alienNameSubmit;
  
  // Breaking down problems with functions
  
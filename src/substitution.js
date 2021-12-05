// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope
  const alpha = "abcdefghijklmnopqrstuvwxyz"
  const encoded = {}
  const decoded = {}

  function substitution(input, alphabet, encode = true) {
    // your solution code here
    let result = ""
    let inputs = input.toLowerCase()
    if(!alphabet || alphabet.length != 26) {
      return false }
    
    //The below removes depulicates
      for(let letter of alphabet) {
        if (alphabet.indexOf(letter) != alphabet.lastIndexOf(letter)){
          return false
        }
      }

   alpha.split("").forEach((letter, index) => {
     encoded[letter] = alphabet[index]
     decoded[alphabet[index]] = letter
    })

    if(encode){
      return inputs
      .split("")
      .map((letter) => encoded[letter] || letter)
      .join("")
    }else{
      return inputs
      .split("")
      .map((letter) => decoded[letter] || letter)
      .join("")
    }
}

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };
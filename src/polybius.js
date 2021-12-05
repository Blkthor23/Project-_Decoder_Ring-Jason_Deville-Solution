// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {
  // you can add any code you want within this function scope
  let Map1 = {
    "a": 11, "b": 21, "c": 31, "d":41, "e":51, "f":12, "g":22, "h":32, "i":42, "j":42, "k":52, "l":13, "m":23, "n":33, "o":43, "p":53, "q":14, "r":24, "s":34, "t":44, "u":54, "v":15, "w":25, "x":35, "y":45, "z":55
  }
  
  let Map2 = {11:"a", 21:"b", 31:"c", 41:"d", 51:"e", 12:"f", 22:"g", 32:"h", 42:"(i/j)", 52:"k", 13:"l", 23: "m", 33:"n", 43:"o", 53:"p", 14:"q", 24:"r", 34:"s", 44:"t", 54:"u", 15:"v", 25:"w", 35:"x", 45:"y", 55:"z"}

  function polybius(input, encode = true) {
    // your solution code here
  let result = ""
  for(let i = 0; i < input.length; i++) {
    if(input[i] === " "){
      result += " "
    }else if(encode){
      result += Map1[input[i]]
    }else{
      if(input.length < i + 2){
        return false
      }
      result += Map2[`${input[i]}${input[i + 1]}`]
      i++
    }
  }
  return result
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };

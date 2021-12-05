// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope
  //Accumulator

  function caesar(input, shift, encode = true) {
    // your solution code here
    //error handling: if any of the below is true return false
    let result = "";
    let inputs = input.toLowerCase();

    if (shift === 0 || shift > 25 || shift < -25 || !shift) {
      return false;
     }

    //loop through inputs
    for (let i = 0; i < inputs.length; i++) {
     let assc = inputs.charCodeAt(i);
      if (assc >= 97 && assc <= 122) {
        if (encode) {
          assc += shift;
        } else {
          assc -= shift;
        }
       if (assc < 97) assc += 26;
       if (assc > 122) assc -= 26;
       result += String.fromCharCode(assc);
      } else {
       result += String.fromCharCode(assc);
      }
    }
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };

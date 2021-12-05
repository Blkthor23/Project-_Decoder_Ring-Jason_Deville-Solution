const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar shift submission tests written by Jason Deville", () => {
  describe("Evaluating errors", () => {
    it("should return false if the shift amount is 0", () => {
      const message = "zebra magazine";
      const shift = 0;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is above 25", () => {
      const message = "zebra magazine";
      const shift = 26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });

    it("should return false if the shift amount is less than -25", () => {
      const message = "zebra magazine";
      const shift = -26;
      const actual = caesar(message, shift);

      expect(actual).to.be.false;
    });
  });

  describe("When encoding a message", () => {
    it("When encode is called should return encoded message", () => {
      const message = "Polly";
      const shift = 7;
      const actual = caesar(message, shift);
      const expected = "wvssf";

      expect(actual).to.equal(expected);
    });

    it("Should ignore white space and symbols", () => {
      const message = "Devil star*$";
      const shift = 4;
      const actual = caesar(message, shift);
      const expected = "hizmp wxev*$";

      expect(actual).to.equal(expected);
    });

    it("Converts capital letters to lowercase", () => {
      const message = "Abby Walker";
      const shift = 9;
      const actual = caesar(message, shift);
      const expected = "jkkh fjutna";

      expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
      const message = "petty";
      const shift = 3;
      const actual = caesar(message, shift);
      const expected = "shwwb";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
      const message = "Super Sayian";
      const shift = -4;
      const actual = caesar(message, shift);
      const expected = "oqlan owuewj";

      expect(actual).to.equal(expected);
    });
  });

  describe("When decoding a message", () => {
    it("should decode a message by shifting the letters in the opposite direction", () => {
      const message = "wvssf";
      const shift = 7;
      const actual = caesar(message, shift, false);
      const expected = "polly";

      expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
      const message = "hizmp wxev*$";
      const shift = 4;
      const actual = caesar(message, shift, false);
      const expected = "devil star*$";

      expect(actual).to.equal(expected);
    });

    it("ignore capital letters", () => {
      const message = "jkkh fjutna";
      const shift = 9;
      const actual = caesar(message, shift, false);
      const expected = "abby walker";

      expect(actual).to.equal(expected);
    });

    it("Should wrap to the beginning of the alphabet if it goes past the end of the alphabet", () => {
      const message = "shwwb";
      const shift = 3;
      const actual = caesar(message, shift, false);
      const expected = "petty";

      expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift", () => {
      const message = "oqlan owuewj";
      const shift = -4;
      const actual = caesar(message, shift, false);
      const expected = "super sayian";

      expect(actual).to.equal(expected);
    });
  });
});
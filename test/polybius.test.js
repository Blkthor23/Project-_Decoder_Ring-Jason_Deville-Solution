const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius test written by Jason Deville", () => {
  describe("When encoding a message", () => {
    it("When set to encode, should translate each letter to number pair", () => {
      const message = "hello grader";
      const actual = polybius(message);
      const expected = "3251131343 222411415124";

      expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42", () => {
      const message = "jason jin";
      const actual = polybius(message);
      const expected = "4211344333 424233";

      expect(actual).to.equal(expected);
    });

    it("Spaces should not affect the encoding", () => {
      const message = "spaces do not affect me";
      const actual = polybius(message);
      const expected = "345311315134 4143 334344 111212513144 2351";

      expect(actual).to.equal(expected);
    });
  });

  describe("When decoding a message", () => {
    it("should decode a message by translating each pair of numbers into a letter", () => {
      const message = "3251131343 222411415124";
      const actual = polybius(message, false);
      const expected = "hello grader";

      expect(actual).to.equal(expected);
    });

    it("should translate 42 to both 'i' and 'j'", () => {
      const message = "4211344333 424233";
      const actual = polybius(message, false);

      expect(actual).to.include("i");
      expect(actual).to.include("j");
    });

    it("Spaces should not affect decoding", () => {
      const message = "345311315134 4143 334344 111212513144 2351";
      const actual = polybius(message, false);
      const expected = "spaces do not affect me";

      expect(actual).to.equal(expected);
    });

    it("Should return false if the length isn't even", () => {
      const message = "32511313434";
      const actual = polybius(message, false);

      expect(actual).to.be.false;
    });
  });
});

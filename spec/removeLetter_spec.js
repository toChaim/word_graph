const { removeLetter } = require('../word_graph');

describe('removeLetter',()=>{
  it('should be a function', ()=>{
    expect(typeof removeLetter).toBe('function');
  });
  describe('should return correct values', ()=>{
    it('should return [] for "a"', ()=>{
      let input = "a";
      let output = [];
      let actual = removeLetter(input);
      expect(actual).toEqual(output);
    });
    it('should return ["a"] for "aa"', ()=>{
      let input = "aa";
      let output = ["a"];
      let actual = removeLetter(input);
      expect(actual).toEqual(output);
    });
    it('should return ["a","b"] for "ab"', ()=>{
      let input = "ab";
      let output = ["a","b"].sort();
      let actual = removeLetter(input).sort();
      expect(actual).toEqual(output);
    });
    it('should return ["at","ca","ct"] for "cat"', ()=>{
      let input = "cat";
      let output = ["at","ca","ct"].sort();
      let actual = removeLetter(input).sort();
      expect(actual).toEqual(output);
    });
  });
});
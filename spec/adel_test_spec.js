const { isWord, makeDictionary } = require('../adel');
const dick = {'word': []};

describe("isWord", () => {
  describe('import', ()=>{
    it("is a function", function() {
      expect(typeof isWord).toBe('function');
    });
  });
  describe('returns correct output', ()=>{
    it('returns true given word', ()=>{
      expect(isWord('word', dick)).toBe(true);
    });
    it('returns true given Word', ()=>{
      expect(isWord('Word', dick)).toBe(true);
    });
    it('returns false given zword', ()=>{
      expect(isWord('zword', dick)).toBe(false);
    });
  });
});

describe("makeDictionary", () => {
  describe('import', ()=>{
    it("is a function", function() {
      expect(typeof makeDictionary).toBe('function');
    });
  });
  describe('returns correct output', ()=>{
    it('returns dict given a good file', ()=>{
      const dict = makeDictionary('./words_dictionary.json');
      expect(dict instanceof Promise).toBe(true);
      dict.then(data => {
        expect(Object.keys(dict).length).toBeGreaterThan(1000);
        done();
      });
    });
  });
});
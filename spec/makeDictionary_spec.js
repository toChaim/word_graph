const { makeDictionary } = require('../word_graph');

describe("makeDictionary", () => {
  describe('import', ()=>{
    it("is a function", function() {
      expect(typeof makeDictionary).toBe('function');
    });
  });
  describe('returns correct output', ()=>{
    it('returns dict given a good file', (done)=>{
      const dict = makeDictionary('./words_dictionary.json');
      expect(dict instanceof Promise).toBe(true);
      dict.then(data => { 
        expect(Object.keys(data).length).toBe(370101);
        done();
      })
      .catch(err => {
        done(err);
      });
    });
    it('throws error give bad file name', (done)=>{
        makeDictionary('./words_dictionary.jsonn') 
        .catch((err)=>{
          expect(err.message).toBe("ENOENT: no such file or directory, open './words_dictionary.jsonn'");
          expect(err.code).toBe('ENOENT');
          done();
        });
    });
  });
});
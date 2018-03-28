const { isWord, makeDictionary, makeAnagramer } = require('../adel');
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

describe('makeAnagramer', ()=>{
  it('should be a function', ()=>{
    expect(typeof makeAnagramer).toBe('function');
  });
  it('should return a function', ()=>{
    let anagramer = makeAnagramer();
    expect(typeof anagramer).toBe('function');
  });
  it('anagramer should return correct results for "a"', ()=>{
    let anagramer = makeAnagramer();
    let res = anagramer('a');
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(1);
  });
  it('anagramer should return correct results for "aa"', ()=>{
    let anagramer = makeAnagramer();
    let res = anagramer('aa');
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(1);
  });
  it('anagramer should return correct results for "Aa"', ()=>{
    let anagramer = makeAnagramer();
    let res = anagramer('Aa');
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(2);
  });
  it('anagramer should return correct results for "cca"', ()=>{
    let anagramer = makeAnagramer();
    let res = anagramer('cca');
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(3);
  });
  it('anagramer should return correct results for "Cat"', ()=>{
    let anagramer = makeAnagramer();
    let res = anagramer('Cat');
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(6);
  });
  it('anagramer should return correct results for "zeplin"', ()=>{
    let anagramer = makeAnagramer();
    let res = anagramer('zeplin');
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(720);
  });
  it('anagramer should return correct results for "HATTER"', ()=>{
    let anagramer = makeAnagramer();
    let res = anagramer('HATTER');
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(360);
  });
  it('anagramer should return correct results for "abcdefg"', ()=>{
    let anagramer = makeAnagramer();
    let res = anagramer('abcdefg');
    expect(Array.isArray(res)).toBe(true);
    expect(res.length).toBe(720);
  });
});
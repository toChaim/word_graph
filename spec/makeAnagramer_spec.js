const { makeAnagramer } = require('../word_graph');

describe('makeAnagramer', ()=>{
  it('should be a function', ()=>{
    expect(typeof makeAnagramer).toBe('function');
  });
  it('should return a function', ()=>{
    let anagramer = makeAnagramer();
    expect(typeof anagramer).toBe('function');
  });
  describe('anagramer should return correct results', ()=>{
    it('for "a"', ()=>{
      let anagramer = makeAnagramer();
      let res = anagramer('a');
      expect(Array.isArray(res)).toBe(true);
      expect(res.length).toBe(1);
    });
    it('for "aa"', ()=>{
      let anagramer = makeAnagramer();
      let res = anagramer('aa');
      expect(Array.isArray(res)).toBe(true);
      expect(res.length).toBe(1);
    });
    it('for "Aa"', ()=>{
      let anagramer = makeAnagramer();
      let res = anagramer('Aa');
      expect(Array.isArray(res)).toBe(true);
      expect(res.length).toBe(2);
    });
    it('for "cca"', ()=>{
      let anagramer = makeAnagramer();
      let res = anagramer('cca');
      expect(Array.isArray(res)).toBe(true);
      expect(res.length).toBe(3);
    });
    it('for "Cat"', ()=>{
      let anagramer = makeAnagramer();
      let res = anagramer('Cat');
      expect(Array.isArray(res)).toBe(true);
      expect(res.length).toBe(6);
    });
    it('for "zeplin"', ()=>{
      let anagramer = makeAnagramer();
      let res = anagramer('zeplin');
      expect(Array.isArray(res)).toBe(true);
      expect(res.length).toBe(720);
    });
    it('for "HATTER"', ()=>{
      let anagramer = makeAnagramer();
      let res = anagramer('HATTER');
      expect(Array.isArray(res)).toBe(true);
      expect(res.length).toBe(360);
    });
  });
  describe('memoization should make anagramer faster', ()=>{
    it('more then two times faster secnond time it is called', ()=>{
      let anagramer = makeAnagramer();
      let timeBefore = Date.now();
      expect(anagramer('abcdefg').length).toBe(5040);
      let testRun1Time = Date.now() - timeBefore;
      timeBefore = Date.now();
      expect(anagramer('abcdefg').length).toBe(5040);
      let testRun2Time = (Date.now() - timeBefore)*2;
      expect(testRun2Time).toBeLessThan(testRun1Time);
    });
    it('more then two times faster secnond time it is called on anagram of first call', ()=>{
      let anagramer = makeAnagramer();
      let timeBefore = Date.now();
      expect(anagramer('abcdefg').length).toBe(5040);
      let testRun1Time = Date.now() - timeBefore;
      timeBefore = Date.now();
      expect(anagramer('gfedcba').length).toBe(5040);
      let testRun2Time = (Date.now() - timeBefore)*2;
      expect(testRun2Time).toBeLessThan(testRun1Time);
    });
  });
});
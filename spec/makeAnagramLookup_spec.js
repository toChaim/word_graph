const { makeAnagramLookup } = require('../word_graph');

describe('makeAnagramLookup', ()=>{
  it('should be a function', ()=>{
    expect(typeof makeAnagramLookup).toBe('function');
  });
  it('should return a function', ()=>{
    let anagramer = makeAnagramLookup();
    expect(typeof anagramer).toBe('function');
  });
  describe('anagramer should return correct results', ()=>{
    it('for "a"', (done)=>{
        makeAnagramLookup()
        .then(lookup => {
            let res = lookup('a');
            expect(Array.isArray(res)).toBe(true);
            expect(res.length).toBe(1);
            done();
        })
        .catch(err => {
            done(err);
        });
    });
    it('for "aa"', (done)=>{
        makeAnagramLookup()
        .then(lookup => {
            let res = lookup('aa');
            expect(Array.isArray(res)).toBe(true);
            expect(res.length).toBe(0);
            done();
        })
        .catch(err => {
            done(err);
        });
    });
    it('for "Aa"', (done)=>{
        makeAnagramLookup()
        .then(lookup => {
            let res = lookup('Aa');
            expect(Array.isArray(res)).toBe(true);
            expect(res.length).toBe(0);
            done();
        })
        .catch(err => {
            done(err);
        });
    });
    it('for "Cat"', (done)=>{
        makeAnagramLookup()
        .then(lookup => {
            let res = lookup('Cat');
            expect(Array.isArray(res)).toBe(true);
            expect(res.length).toBe(3);
            done();
        })
        .catch(err => {
            done(err);
        });
    });
    it('for "adnor"', (done)=>{
        makeAnagramLookup()
        .then(lookup => {
            let res = lookup('adnor');
            expect(Array.isArray(res)).toBe(true);
            expect(res.length).toBe(10);
            done();
        })
        .catch(err => {
            done(err);
        });
    });
  });
});

//   describe('memoization should make anagramer faster', ()=>{
//     it('more then two times faster secnond time it is called', ()=>{
//       let anagramer = makeAnagramLookup();
//       let timeBefore = Date.now();
//       expect(anagramer('abcdefgh').length).toBe(40320);
//       let testRun1Time = Date.now() - timeBefore;
//       timeBefore = Date.now();
//       expect(anagramer('abcdefgh').length).toBe(40320);
//       let testRun2Time = (Date.now() - timeBefore)*2;
//       expect(testRun2Time).toBeLessThan(testRun1Time);
//     });
//     it('more then two times faster secnond time it is called on anagram of first call', ()=>{
//       let anagramer = makeAnagramLookup();
//       let timeBefore = Date.now();
//       expect(anagramer('abcdefgh').length).toBe(40320);
//       let testRun1Time = Date.now() - timeBefore;
//       timeBefore = Date.now();
//       expect(anagramer('gfedcbah').length).toBe(40320);
//       let testRun2Time = (Date.now() - timeBefore)*2;
//       expect(testRun2Time).toBeLessThan(testRun1Time);
//     });
//   });
// });
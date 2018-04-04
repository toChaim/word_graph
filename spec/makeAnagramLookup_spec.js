const { makeAnagramLookup } = require('../word_graph');
const dic = {a:1, i:1, at:1, cat:1, act:1, tac:1};

describe('makeAnagramLookup', ()=>{
  it('should be a function', ()=>{
    expect(typeof makeAnagramLookup).toBe('function');
  });
  it('should return an object', ()=>{
    let lookup = makeAnagramLookup(dic);
    expect(typeof lookup).toBe('object');
  });
  describe('should have return correct value', ()=>{
      it('for "a"',()=>{
        let lookup = makeAnagramLookup(dic);
        expect(JSON.stringify(lookup['a'].sort())).toBe(JSON.stringify(['a']));
      });
      it('for "act"',()=>{
        let lookup = makeAnagramLookup(dic);
        expect(JSON.stringify(lookup['act'].sort())).toBe(JSON.stringify(['act','cat','tac']));
      });
      it('for "at"',()=>{
        let lookup = makeAnagramLookup(dic);
        expect(JSON.stringify(lookup['at'].sort())).toBe(JSON.stringify(['at']));
      });
      it('for "aA"',()=>{
        let lookup = makeAnagramLookup(dic);
        expect(lookup['aA']).toBe(undefined);
      });
  });
});
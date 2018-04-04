const isWord = (word, dictionary) => !!dictionary[word.toLowerCase()];

const makeDictionary = (fileName) => {
    const fs = require('fs');
    return new Promise((resolve, reject)=> {
        fs.readFile(fileName, 'utf8', (err, data) => {
            if(err){ reject(err); }
            else{ resolve (JSON.parse(data)); }
        });
    });
};

// function takes a dictionary object with words as keys
// returns an object with keys of sorted letters of words
// values are an array of valid anagram words
const makeAnagramLookup = (dictionary) => {
    let lookup = {};
    
    for(let word in dictionary){
        let key = word.split('').sort().join('');
        if(lookup[key]){
            lookup[key].push(word);
        }
        else{
            lookup[key] = [word];
        }
    }

    return lookup;
};

// makes a memoized anagramer function.
// takes no arguments
// resulting function takes string returns array of anagrams of the string.
const makeAnagramer = function(){
    var memo = {};

    return (word)=>{
        word = word.split('');
        let key = [...word].sort().join('');
        var res = new Set();

        const swap = (index)=>{
            for(let i = index; i < word.length; i++){
                if(index !== i && word[index] === word[i]){ continue; }
                [ word[i], word[index] ]=[ word[index], word[i]];
                swap(index+1);
                [ word[i], word[index] ]=[ word[index], word[i]];
            }
            if(index === word.length - 1){ 
                res.add( word.join('') );
            }
            return [...res];
        };

        memo[key] = memo[key] || swap(0);
        return memo[key];
    };
};

// makes a memoized anagramer function.
// takes no arguments
// resulting function takes string returns array of anagrams of the string.
const makeAnagramer2 = function(){
    var memo = {};

    const anagramer = (word)=>{
        if(word.length === 0){ return []; }
        if(word.length === 1){ return [word]; }
  
        let key = word.split('').sort().join('');
        if(memo[key]){ return memo[key]; }
  
        let res = new Set();
        let possiblities = anagramer(key.slice(0,key.length-1));
  
        for(let w of possiblities){
            for(let i = 0; i <= w.length; i++){
                if(w[i] !== key[key.length-1]){
                    res.add(w.slice(0,i) + key[key.length-1] + w.slice(i));
                }
            }
        }

        memo[key] = [...res];
        return memo[key];
    };

    return anagramer;
};

// removeLetter takes a string
// returns an array of strings each with one letter removed
const removeLetter = (word)=>{
    if(word.length < 2){ return []; }
    var res = []
    for(let i = 0; i < word.length; i++){
        if(word[i] !== word[i+1]){ res.push(word.slice(0,i)+word.slice(i+1,word.length)); }
    }
    return res;
}

module.exports = { isWord, makeDictionary, makeAnagramLookup, makeAnagramer, removeLetter, makeAnagramer2 };
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

// removeLetter takes a string
// returns an array of strings each with one letter removed
const removeLetter = (word)=>{
    // word = word.split('');
    // return word.map((mv,mi) => { return word.filter((fv,fi)=>fi===mi).join(''); });
    if(word.length < 2){ return []; }
    var res = [];
    for(let i = 0; i < word.length; i++){
        res.push(word.slice(0,i)+word.slice(i+1,word.length));
    }
    return res;
}

module.exports = { isWord, makeDictionary, makeAnagramer, removeLetter };
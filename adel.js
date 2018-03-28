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
    
        memo[word] = memo[word] || swap(0);
        return memo[word];
    };
};

module.exports = { isWord, makeDictionary, makeAnagramer };
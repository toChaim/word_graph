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

const makeAnagram = (function(){
    var memo = {};

    return (word)=>{
        word = word.split('');
        var res = [];

        const swap = (index)=>{
            if(index === word.length){ res.push( word.join('') ); }
            for(let i = index; i < word.length; i++){
                if(index !== i && word[index] === word[i]){ continue; }
                [ word[i], word[index] ]=[ word[index], word[i]];
                swap(index+1);
                [ word[i], word[index] ]=[ word[index], word[i]];
            }
        };
    
        memo[word] = memo[word] || swap(0);
        return memo[word];
    };
})();

module.exports = { isWord, makeDictionary };
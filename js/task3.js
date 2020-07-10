"use strict";

const findLongestWord = function(string) {

    const splitTheWords = string.split(' ');
    let longestWord = splitTheWords[0];

    for (let i = 1; i < splitTheWords.length; i += 1) {

        if (splitTheWords[i].length > longestWord.length) {
            longestWord = splitTheWords[i];
        };
    };

    return longestWord;
  };
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'
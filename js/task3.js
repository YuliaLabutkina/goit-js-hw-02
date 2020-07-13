"use strict";

const findLongestWord = (string) => string.split(' ').reduce((acc, word) => {
        return word.length > acc.length ? word : acc;
    });
  
  console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'
  
  console.log(findLongestWord('Google do a roll')); // 'Google'
  
  console.log(findLongestWord('May the force be with you')); // 'force'
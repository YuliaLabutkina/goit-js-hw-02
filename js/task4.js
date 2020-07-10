"use strict";

const formatString = function(string) {
    
    const splitLetters = string.split('');

    if (splitLetters.length < 40) {
        return string;
    } else {
       splitLetters.length = 40;
       const newLine = splitLetters.splice(-3, 3, '.', '.', '.');
       return splitLetters.join('');
    }
  };
  
  console.log(formatString('Curabitur ligula sapien, tincidunt non.'));
  // вернется оригинальная строка
  
  console.log(formatString('Vestibulum facilisis, purus nec pulvinar iaculis.'));
  // вернется форматированная строка
  
  console.log(formatString('Curabitur ligula sapien.'));
  // вернется оригинальная строка
  
  console.log(
    formatString(
      'Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.',
    ),
  );
  // вернется форматированная строка
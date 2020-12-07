/*Задание 3
Напиши фукцнию findLongestWord(string), которая принимает параметром произвольную строку 
(в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.

const findLongestWord = function(string) {
  // твой код
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'*/

console.log('------------------task3 start-------------------');

const findLongestWord = function(string) {
    const wordsArray = string.split(' ');
    let maxWord = wordsArray[0];
    for (let i = 0; i < wordsArray.length; i++) {
        if (maxWord.length < wordsArray[i].length) {
            maxWord = wordsArray[i];
        }
    }
    return maxWord;
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'

console.log('------------------task3 end---------------------');
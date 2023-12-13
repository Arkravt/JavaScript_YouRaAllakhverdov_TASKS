'use strict';

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

const textArea = document.querySelector('textarea');
const button = document.querySelector('button');


const formatTextArea = function () {
   const arrInput = textArea.value.split('\n');
   for (let word of arrInput) {
      let arrFormatedWord = word.trim().toLowerCase().split('_');
      let newWord = arrFormatedWord[0];
      for (let i = 1; i < arrFormatedWord.length; i++) {
         let word = arrFormatedWord[i];
         newWord += word.charAt(0).toUpperCase() + word.slice(1);
      }
      console.log(newWord);
   }
}


// const formatTextArea2 = function () {
//    const arrInput = textArea.value.split('\n');
//    for (let word of arrInput) {
//       word = word.trim().toLowerCase();
//       let index = word.indexOf('_');
//       let firstPart = word.slice(0, index);
//       let secondPart = word.slice(index + 1)[0].toUpperCase() + word.slice(index + 2);
//       console.log(firstPart + secondPart);
//    }
// }


// const formatTextArea3 = function () {
//    const arrInput = textArea.value.split('\n');
//    for (let word of arrInput) {
//       word = word.trim().toLowerCase();
//       let index = word.indexOf('_');
//       let firstLit = word.slice(index + 1)[0].toUpperCase();
//       let partToChange = word.slice(index, index + 2);
//       console.log(word.replace(partToChange, firstLit));
//    }
// }


const formatTextArea4 = function () {
   const arrInput = textArea.value.split('\n');
   for (let word of arrInput) {
      let [firstWord, secondWord] = word.trim().toLowerCase().split('_');

      console.log(
         firstWord + secondWord.replace(
            secondWord[0],
            secondWord[0].toUpperCase())
      );
   }
}


button.addEventListener('click', formatTextArea4);



// underscore_case
//   first_name
// next_Variable
//    Calculate_AGE
// arrived_flight
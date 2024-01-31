'use strict'

// Create new Promise
// const lottery = new Promise(function (resolve, reject) {
// if (Math.random() > 0.5) {
// resolve('Победа ! ');
// } else {
// reject(new Error('Проигрыш !'));
// }
// });

// lottery
// .then((res) => console.log(res))
// .catch((e) => console.error(e));



// обёртка промисом функции setTimeout
const wait = function (seconds) {
   return new Promise(function (resolve) {
      setTimeout(resolve, seconds);
   });
}

wait(1000)
   .then(() => {
      console.log('3...');
      return wait(1000);
   })
   .then(() => {
      console.log('2...');
      return wait(1000);
   })
   .then(() => {
      console.log('1...');
   });





const createImageElement = function (imagePath) {
   return new Promise(function (resolve, reject) {
      const newElem = document.createElement('img');
      newElem.src = imagePath;

      newElem.addEventListener('load', function () {
         document.querySelector('.images').prepend(this);
         resolve(this);
      });

      newElem.addEventListener('error', function () {
         console.log('huy');
      });
   });
}


createImageElement('img/image1.jpg')
   .then(elem => console.log(elem));


























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
      setTimeout(resolve, seconds * 1000);
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




let img;

const createImageElement = function (imagePath) {
   return new Promise(function (resolve, reject) {
      img = document.createElement('img');
      img.src = imagePath;

      img.addEventListener('load', function () {
         document.querySelector('.images').prepend(this);
         resolve(this);
      });

      img.addEventListener('error', function () {
         reject(new Error('картинка не загрузилась !'));
      });
   });
}


createImageElement('img/image1.jpg')
   .then(() => wait(2))
   .then(() => {
      img.style.display = 'none';
      return createImageElement('img/image2.jpg')
   })
   .then(() => wait(2))
   .then(()=> img.style.display = 'none')
   .catch(e => console.error(e));



























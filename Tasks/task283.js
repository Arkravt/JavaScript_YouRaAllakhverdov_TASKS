'use strict'

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



const createImageElement = function (imagePath) {
    return new Promise(function (resolve, reject) {
        const img = document.createElement('img');
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


const loadAndWait = async function () {
    try {
        let img = await createImageElement('img/image1.jpg');
        await wait(2);
        img.style.display = 'none' 

        img = await createImageElement('img/image2.jpg');
        await wait(2);
        img.style.display = 'none'
    } catch (e) {
        console.error(e); 
    }
}

const loadAllImages = async function (imagePathsArray) {
    try {
        const images = imagePathsArray.map(async path => await createImageElement(path));
        const realImages = await Promise.all(images); 
        realImages.forEach(image => image.classList.add('parallel'));
    } catch (e) {
        console.error(e);
    }
}

//loadAndWait();
loadAllImages(['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg']);

'use strict';


const catsJane = [4, 5, 3, 11, 6, 2, 4, 1, 5, 9];
const catsJulia = [2, 4, 5, 1, 13, 2, 15, 8, 3, 7];
const catsJane2 = [3, 5, 9, 14, 1, 2, 6, 8, 3, 10];
const catsJulia2 = [8, 2, 10, 1, 2, 5, 6, 3, 1, 4];


function verifyCats(catsJane, catsJulia) {

    //const catsJaneWithoutDogs = catsJane.slice(1, catsJane.length - 1);
    // ИЛИ
    const catsJaneWithoutDogs = catsJane.slice(1, -1);

    const unitedcats = catsJaneWithoutDogs.concat(catsJulia);

    unitedcats.forEach((catAge, index) => {
        console.log(`Кошка №${index + 1} ${catAge < 2 ? 'еще котенок' : `взрослая ей ${catAge} лет`}`);
    });

}

verifyCats(catsJane, catsJulia);
console.log('-----------------------------------------------------------------');
verifyCats(catsJane2, catsJulia2);

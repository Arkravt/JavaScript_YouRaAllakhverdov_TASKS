'use strict'

const catAges1 = [7, 3, 2, 4, 1, 15, 8, 1, 9, 2];
const catAges2 = [1, 16, 12, 4, 5, 1, 3, 11, 7, 2];

const getAverageHumanAge = function (catAges) {

    const catsUnder18HumanAge = catAges.map(catAge => catAge <= 2 ? catAge * 10 : catAge * 7)
    .filter(age => age > 18);
    const AverageHumanAge = catsUnder18HumanAge.reduce((acc, age) => acc + age, 0);
    // console.log(catAges);
    // console.log(catsUnder18HumanAge);
    // console.log(AverageHumanAge / catsUnder18HumanAge.length);

    return AverageHumanAge / catsUnder18HumanAge.length;
}


;
console.log(getAverageHumanAge(catAges1));
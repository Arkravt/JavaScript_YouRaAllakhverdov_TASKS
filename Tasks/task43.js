'use strict'

const CalculTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;

const arrayOfBills = [11, 20, 47];
const arrayOfTips = [
   CalculTips(arrayOfBills[0]),
   CalculTips(arrayOfBills[1]),
   CalculTips(arrayOfBills[2])
];

const arrayTotal = [
   arrayOfBills[0] + arrayOfTips[0],
   arrayOfBills[1] + arrayOfTips[1],
   arrayOfBills[2] + arrayOfTips[2]
];

console.log(arrayOfBills);
console.log(arrayOfTips);
console.log(arrayTotal);
console.log('task43');
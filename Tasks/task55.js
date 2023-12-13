'use strict'

const calculTips = bill => bill < 20 ? bill * 0.2 : bill * 0.15;

const calculateAverage = arr => {
   let sum = 0;
   for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
   }
   return sum / arr.length;
}


const bills = [31, 95, 276, 540, 27, 205, 11, 1180, 96, 57];
const tips = [];
const total = [];

for (let i = 0; i < bills.length; i++) {
   tips.push(calculTips(bills[i]));
   total.push(tips[i] + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(total);
console.log(calculateAverage(total));



'use strict'

const getAverage = (month1, month2, month3) =>
   (month1 + month2 + month3) / 3;


function printBonus(dept1AverSales, dept2AverSales) {
   let result = 0;
   if (dept1AverSales > dept2AverSales) {
      result = (dept1AverSales - dept2AverSales) / dept2AverSales * 100;

      if (result > 30) {
         console.log(`Dept 1 will get a bonus of ${result} %`);
      }
   }

   else if (dept1AverSales < dept2AverSales) {
      result = (dept2AverSales - dept1AverSales) / dept1AverSales * 100;

      if (result > 30) {
         console.log(`Dept 2 will get a bonus of ${result} %`);
      }
   }

}


const dept1AverSales1 = getAverage(35467, 29842, 38501);
const dept2AverSales1 = getAverage(70533, 50121, 33899);

const dept1AverSales2 = getAverage(50301, 21984, 19207);
const dept2AverSales2 = getAverage(72381, 41562, 29465);

console.log(`dept1AverSales1:  ${dept1AverSales1}`);
console.log(`dept2AverSales1:  ${dept2AverSales1}`);
printBonus(dept1AverSales1, dept2AverSales1);
console.log('//////////////////////////////////////////////////')
console.log(`dept1AverSales2:  ${dept1AverSales2}`);
console.log(`dept2AverSales2:  ${dept2AverSales2}`);
printBonus(dept1AverSales2, dept2AverSales2);
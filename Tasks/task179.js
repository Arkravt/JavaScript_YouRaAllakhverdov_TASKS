'use strict'

const cats = [
   { catWeight: 3, foodWeight: 20, owners: ['Наташа'] },
   { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] },
   { catWeight: 4, foodWeight: 45, owners: ['Алекс', 'Ирина'] },
   { catWeight: 7, foodWeight: 80, owners: ['Борис'] },
];

const normalCountOfFood = function (cat) {
   return (cat.recommendedPortion * 0.9) < cat.catWeight && cat.catWeight < (cat.recommendedPortion * 1.1);
};

// 1.
console.log('**********************TASK 1**********************');
cats.forEach(cat => cat.recommendedPortion = cat.catWeight * 0.75 * 12);
console.log(cats);


// 2.
console.log('**********************TASK 2**********************');
cats
   .filter(cat => cat.owners.includes('Алекс'))
   .forEach(cat => {

      let amountOfFood;
      if (cat.foodWeight < cat.recommendedPortion) {
         amountOfFood = 'little';
      } else if (cat.foodWeight > cat.recommendedPortion) {
         amountOfFood = 'much';
      }

      console.log(`the cat eats too ${amountOfFood}`);
   });


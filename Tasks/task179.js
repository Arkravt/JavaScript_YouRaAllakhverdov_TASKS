'use strict'

const cats = [
   { catWeight: 3, foodWeight: 20, owners: ['Наташа'] }, // 27, 24 - 29,7
   { catWeight: 6, foodWeight: 90, owners: ['Марина', 'Алиса'] }, // 54, 48,6 - 59,4
   { catWeight: 4, foodWeight: 34, owners: ['Алекс', 'Ирина'] }, // 36, 32,4 - 39,6
   { catWeight: 7, foodWeight: 80, owners: ['Борис'] }, // 63, 56,7 - 69,3
];

const isFoodWeightNorml = cat => 
cat.recommendedPortion * 0.9 < cat.foodWeight && cat.foodWeight < cat.recommendedPortion * 1.1;


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
         amountOfFood = 'to little';
      } else if (cat.foodWeight > cat.recommendedPortion) {
         amountOfFood = 'to much';
      } else {
         amountOfFood = `normal`;
      }

      console.log(`the cat eats ${amountOfFood}`);
   });



// 3.
console.log('**********************TASK 3**********************');
const catsEatTooMuchOwners = cats
   .filter(cat => cat.foodWeight > cat.recommendedPortion)
   .flatMap(cat => cat.owners);

const catsEatTooLittleOwners = cats
   .filter(cat => cat.foodWeight < cat.recommendedPortion)
   .flatMap(cat => cat.owners);

console.log(catsEatTooMuchOwners);
console.log(catsEatTooLittleOwners);


// 4.
console.log('**********************TASK 4**********************');
console.log(`${catsEatTooMuchOwners.join(', ')} - хозяева кошек, которые едят слишком много!`);
console.log(`${catsEatTooLittleOwners.join(', ')} - хозяева кошек, которые едят слишком мало!`);


// 5.
console.log('**********************TASK 5**********************');
const catEatsrecomendedCountOfFood = cats.some(cat => cat.recommendedPortion === cat.foodWeight);
console.log(catEatsrecomendedCountOfFood);


// 6.
console.log('**********************TASK 6**********************');
const catEatsNormalCountOfFood = cats.some(isFoodWeightNorml);
console.log(catEatsNormalCountOfFood);


// 7.
console.log('**********************TASK 7**********************');
const catsEatNormal = cats.filter(isFoodWeightNorml);
console.log(catsEatNormal);


// 8.
console.log('**********************TASK 8**********************');
const catsCopy = cats.slice().sort((cat1, cat2) => cat1.recommendedPortion - cat2.recommendedPortion);
console.log(catsCopy);
console.log(cats);




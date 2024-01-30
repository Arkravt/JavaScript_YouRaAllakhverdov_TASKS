'use strcit'
// Old solution 
// const request = new XMLHttpRequest();
// request.open('GET', `https://restcountries.com/v3.1/name/russia`);
// request.send();
// request.addEventListener('load', function () {
//    console.log(JSON.parse(this.responseText));
// });


// // New solution
// const newRequest = fetch(`https://restcountries.com/v3.1/name/russia`)
// .then(response => response.json())
// .then(data => console.log(data[0]))
// .catch(e => console.log(`Метод catch выполняется в случае ошибки ${e}`))
// .finally(() => console.log('метод finally выполняется в любом случае ! '));

//////////////////////////////////////////////////////

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');
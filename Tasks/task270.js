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


const displayCountryByName = function (countryName) {

    fetch(`https://restcountries.com/v3.1/name/${countryName}`)
        .then(response => {
            if (!response.ok) throw new Error(`Ошибка в функции "displayCountryByName": ${response.status}`);
            return response.json();
        })
        .then(data => displayCountryCard(data[0]))
        .catch(e => console.error(`Что то наебнулось. ${e.message}`));
}


const displayCountryByGPS = function (lat, lng) {
    fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=130937554835371118464x54142`)
        //fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(response => {
            if (!response.ok) throw new Error(`Ошибка в функции "displayCountryByGPS": ${response.status}`);
            return response.json();
        })
        .then(data => {
            console.log(`You are in ${data.city}, ${data.country}`);
            return displayCountryByName(data.country);
        })
        .catch(e => console.error(`Что то сломалось. ${e.message}`));
}


const displayCountryCard = function (data) {
    const textHTML = `<article class="country">
    <img class="country__img" src="${data.flags.png}" />
    <div class="country__data">
      <h3 class="country__name">${data.name.official}</h3>
      <h4 class="country__region">${data.region}</h4>
      <p class="country__row"><span>👨‍👩‍👧‍👦</span>${data.population}</p>
      <p class="country__row"><span>🗣️</span>${[...Object.values(data.languages)]}</p> 
      <p class="country__row"><span>💰</span>${[...Object.values(data.currencies).map(elem => elem.name)]}</p>
    </div>
  </article>`;

    countriesContainer.insertAdjacentHTML('beforeend', textHTML);
    countriesContainer.style.opacity = 1;
}


const clickTheButton = function () {
    displayCountryByGPS(35.756, 139.256);
    displayCountryByGPS(48.857, 2.358);
    displayCountryByGPS(40.708, -74.051);
}


btn.addEventListener('click', clickTheButton);


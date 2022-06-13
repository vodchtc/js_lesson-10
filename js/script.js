//1)

function calcSum(...args) {
    const [a, b, ...other] = args;

    console.log(other);

    return a + b;
}

console.log(calcSum(1, 2, 3, 4, 5, 6));

//2)

let drivers = ['Dominic', 'Brian', 'Letty', 'Roman'];
let antagonists = ['Deckard', 'Luke'];

let family = drivers.concat(antagonists);
console.log('concat', family);

family = [];
Array.prototype.push.apply(family, drivers);
Array.prototype.push.apply(family, antagonists);
console.log('push.apply', family);

family = [...drivers, ...antagonists];
console.log('spread', family);

family = [];
family.splice(family.length - 1, 0, ...drivers);
family.splice(family.length - 1, 0, ...antagonists);

console.log('splice', family);

family = [];
drivers.forEach((value) => family.push(value));
antagonists.forEach((value) => family.push(value));

console.log('forEach', family);

//3)

const cars = ['Jeep', 'Jeep', 'Kia', 'BMW', 'BMW', 'BMW', 'Renault'];

let unique = [...new Set(cars)];

console.log(unique);

//4)

const getInfo = (country) => (city) => [city, country];

console.log(getInfo('Россия')('Москва'));

//5)

const time = 1654420481877;

const date = new Date(time);

console.log(date.toLocaleString());

console.log(
    `${date.getFullYear()}/${
    date.getMonth() + 1
  }/${date.getDate()} (${date.getMinutes()}:${date.getSeconds()})`
);
// Массивы
const cars = ["Mazda", "Ford", "BMW", "opel"];
const fib = [1, 1, 2, 3, 5, 8, 13];


function add() {cars.push(21);} // функция
fib.push(21); // Метод добавляет в конец массива
fib.unshift(0); // добавлят первый элемент в массив
const firstItem = cars.shift();   // удаляет первый элемент из массива и возвращает его
const lastItem = cars.pop();   // удаляет последний элемент из массива и возвращает его
cars.reverse() //переворачивает массив
let index = cars.indexOf("BMW");
console.log(index);
console.log(cars[index]);
cars[index] = "GMC";
console.log(cars);


const people = [
    {name: "Samuil", age: 39},
    {name: "Alla", age: 25},
    {name: "Oleg", age: 30}
];

index = people.findIndex(function (person) {
    return person.age === 30;
});  // используется для поиска индекса объекта, а именно по каким-то характеристикам объекта
console.log(people[index]);
// а так сразу получаем человека (не надо искать потом по индексу)
let person = people.find(function (person) {
    return person.age === 30;
});
person = people.find(person => person.age === 30); // сокращенно


let age = 30;
for (const person of people) {
    console.log(person);
    if (person.age === age) {
        console.log(person);
    }
}


const bool = cars.includes("Ford") // если такой элемент в массиве


const upperCaseCars = cars.map(car => car.toUpperCase());  // (преобразовывает данные) переберает массив, что-то с ним делает и возвращает массив
let pow2Fib = fib.map(num => num ** 2);
// и можно еще и вот так
const pow2 = num => num ** 2;
const sqrt = num => Math.sqrt(num);
pow2Fib = fib.map(pow2).map(sqrt);
pow2Fib = fib.map(pow2).map(Math.sqrt);
pow2Fib = fib.filter(num => num > 20); // Фильтруем массив


let summAge = people.reduce(function (acc, person) {
    if (person.age > 25) {
        acc += person.age;
    }
    return acc;
}, 0);
// тоже самое
summAge = people
    .filter(person => person.age > 21)
    .reduce((acc, persone) => {
        acc += persone.age;
        return acc;
    }, 0);








// задача развернуть строку
const text = "Привет! Мы изучаем JavaScript.";
const arrText = text.split("");

let textOut = "";
for (let i = arrText.length - 1; i >= 0; i--) {
    textOut = textOut + arrText[i];
}
console.log(textOut);
// или
arrText.reverse();
textOut = arrText.join(""); // join - соединяет весь массив в одну строку разделяя указаным символом(split - наоборот)
console.log(textOut);

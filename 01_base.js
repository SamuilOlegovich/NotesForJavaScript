


// Переменные
var nameOld = "Samuil"; // устарела
let age = 33;
const name = "Samuil";
const isProgrammer = true;



// Мутирование
console.log("Имя человека " + name + " возраст " + age);
const lastName = prompt("Введите фамилию:"); // спрашивает дополнительные параметры
alert("Имя человека " + name + " фамилия " + lastName + " возраст " + age); // выводит предупреждение



// Операторы
let x;
console.log(typeof isProgrammer); // boolean
console.log(typeof name); //string
console.log(typeof age); //number
console.log(typeof null); //object
console.log(typeof x); //undefined



// Условные операторы
const courseStatus = "pending"; // ready, fail, pending
if (courseStatus === "ready") {
    console.log("Курс уже готов и его можно проходить");
} else if (courseStatus === "pending") {
    console.log("Курс находится в процессе разработки");
} else {
    console.log("Курс не получился");
}
const a = 42;
const b = "42";
const c = a == b; // получим тру так как все приведется к одному типу данных - в строку
const c = a === b; // получим фалсе так как сравнит потипно данные



// Функции
function calculateAge(year) {
    return 2020 - year;
}
console.log(calculateAge(1981));



// Массивы
const carsS = new Array("Mazda", "Ford", "BMW");
const cars = ["Mazda", "Ford", "BMW"];
console.log(cars.length);
console.log(cars[1]);
carsS[1] = "AUDI";
carsS[3] = "GMC";
carsS[carsS.length] = "Opel";



// Циклы
for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
}

for (let car of cars) {
    console.log(car);
}



// Объекты
const person = new Object({});
const personTwo = {
    firstName: "Samuil",
    lastName: "Olegovich",
    year: 1981,
    language: ["ru", "uk", "en"],
    greet: function () {
        console.log(this.firstName);
    }
};

console.log(personTwo);
personTwo.greet(); // вызов метода объекта
personTwo.year = 1982; // меняем переменную объекта
let key = "year";
console.log(personTwo.firstName); // три варианта обращения к переменным объекта
console.log(personTwo["firstName"]);
console.log(personTwo[key]);
personTwo.isProgrammer = true; // добавляем новый ключь в объект
console.log(personTwo);





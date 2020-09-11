// Массивы
const cars = ["Mazda", "Ford", "BMW", "opel"];
const fib = [1, 1, 2, 3, 5, 8, 13, "BMW" ];

function add() {cars.push(21);} // функция
fib.push(21); // Метод добавляет в конец массива
fib.unshift(0); // добавлят первый элемент в массив
const firstItem = cars.shift();   // удаляет первый элемент из массива и возвращает его
const lastItem = cars.pop();   // удаляет последний элемент из массива и возвращает его
cars.reverse() //переворачивает массив
const index = cars.indexOf("BMW");
console.log(index);
console.log(cars[index]);
cars[index] = "GMC";
console.log(cars);


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

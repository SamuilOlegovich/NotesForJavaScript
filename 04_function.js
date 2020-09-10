// Function

// function Declaration
function greet(name) {
    console.log("Привет - ", name)
}

// function Expression
const greet2 = function greet2(name) {
    console.log("Привет 2 - ", name)
}

greet("Лена");
greet2("Лена");

console.log(typeof greet);
console.dir(greet);

//анонимные фушкции
let counter = 0;
// setInterval( function () {
//     console.log(++ counter)
// }, 1000); // интервал повторений

// setTimeout( function () {
//     console.log(++ counter)
//     // clearTimeout(counter);
// }, 1000); // задержка
//
// let interval = setInterval( function () {
//     if (counter === 5) {
//         clearInterval(interval);
//     } else {
//         console.log(++ counter);
//     }
// }, 1000);


// Стрелочные функции
function greet(name) {
    console.log("Привет - ", name);
}

const arrow = (name) => {
    console.log("Привет - ", name);
}

const arrow2 = name => console.log("Привет - ", name);

arrow("Sasha");
arrow2("Sasha");

const pow2 = num => {
    return num ** 2;
}

const pow3 = num => num ** 2;

console.log(pow2(5));
console.log(pow3(5));


// Параметры по умолчанию
const sum = (a, b) => a + b;
console.log(sum(43, 9));
console.log(sum(43)); // выдаст NaN

const sum2 = (a, b = 1) => a + b; //  чтобы не было NaN в случаи не прихода параметра задаем его по умолчанию
console.log(sum2(43)); // 44

const sum3 = (a = 2, b = a * 3) => a + b;
console.log(sum3()); // 8

function sumAll(...all) {
    console.log(all);
    let result = 0;
    for (let num of all) {
        result = result + num;
    }
    console.log(result);
    return result;
}
const  a = sumAll(1, 2, 3, 4, 5);
console.log(a);


// Замыкание
function createMamber(name) {
    return function (lastName) {
        console.log(name + " " + lastName);
    }
}

const logWithLastName = createMamber("Samuil");
console.log(logWithLastName);

console.log(logWithLastName("Petrov")); // Samuil Petrov
console.log(logWithLastName("Popov")); // Samuil Popov








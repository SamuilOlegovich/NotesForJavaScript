


// Number
const num = 42; // integer
const float = 42.42; // float
const pow = 10e3;

console.log("Number.MAX_SAFE_INTEGER", Number.MAX_SAFE_INTEGER);
console.log("Number.MIN_SAFE_INTEGER", Number.MIN_SAFE_INTEGER);
console.log("Math.pow 53", Math.pow(2, 53) - 1);
console.log("MAX_VALUE", Number.MAX_VALUE);
console.log("MIN_VALUE", Number.MIN_VALUE);
console.log("POSITIVE_INFINITY", Number.POSITIVE_INFINITY);
console.log("NEGATIVE_INFINITY", Number.NEGATIVE_INFINITY);
console.log("1 / 0", 1 / 0);
console.log("NaN", Number.NaN)  // not a number
console.log("NaN", 3 / undefined)  // not a number
const n = 3 / undefined;
console.log(isNaN(n));
console.log(isNaN(42));
console.log(isFinite(Infinity));
console.log(isFinite(42));

const stringInt = "42";
const stringFloat = "42.42";
console.log(Number.parseInt(stringInt) + 1);
console.log(Number.parseFloat(stringFloat) + 1);
console.log(parseInt(stringInt) + 2);
console.log(parseFloat(stringFloat) + 2);
console.log(Number(stringInt) + 3);
console.log(Number(stringFloat) + 3);
console.log(+stringInt + 4);
console.log(+stringFloat + 4);

console.log(0.2 + 0.4);  // выведет 0.6000000000000001
console.log((0.2 + 0.4).toFixed(5)); // выводит строка
console.log(+((0.2 + 0.4).toFixed(5))); // теперь будет число
console.log(parseFloat((0.2 + 0.4).toFixed(5))); // теперь будет число



// BigInt
console.log(typeof 86564364787687434367743545757n);
console.log(  86564364787687434367743545757n - 77656435433356665332245577666n);
// console.log(77656435433356665332245577666.0987n); // error
console.log(10n - 4); // error
console.log(parseInt(10n) - 4);
console.log(10n - BigInt(4));



// Math
console.log(Math.E);
console.log(Math.PI);

console.log(Math.sqrt(25));
console.log(Math.pow(5, 3));
console.log(Math.abs(-42));
console.log(Math.max(45, 76, 86, 6));
console.log(Math.min(45, 76, 86, 6));
console.log(Math.floor(7.7));
console.log(Math.ceil(7.7));
console.log(Math.round(7.7));
console.log(Math.trunc(7.7));
console.log(Math.random());



// Example - пример
function getRandomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

console.log(getRandomBetween(10, 42));








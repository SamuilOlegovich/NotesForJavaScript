
// Объекты
const person = {
    age: 17,
    name: "Vasa",
    isProgrammer: true,
    languages: ["en", "ru", "US"],

    "complex key": "complex value",
    ["key_"+ (1 + 3)]: "Computed key", // key_4

    greet() {
         console.log("greet from person");
    },

    info() {
        console.info("Информация про человека по имени: ", this.name);
    }
}

console.log(person.name);
console.log(person["age"]);
console.log(person["complex key"]);
console.log(person);
person.greet();

person.age++;
console.log(person.age);
person.languages.push("by");
console.log(person.languages);

person["key_4"] = undefined;
console.log(person["key_4"]);

delete person["key_4"]; // удаляем переменную (ключь) из объекта
console.log(person);


// const name = person.name;
// const age = person.age;
// const languages = person.languages;
// то же но сокращенно
const {name, age, languages} = person;
const {age: personAge} = person;
console.log(name, age, languages);
console.log(personAge);

// Выводим все данные по объекту в цыкле
console.log("ВЫВОДИТ ВСЕ КЛЮЧИ (ПЕРЕМЕННЫЕ) ОБЪЕКТА");
for (let key in person) {
    console.log(key);
}

console.log("ВЫВОДИТ ВСЕ КЛЮЧИ (ПЕРЕМЕННЫЕ) И ЗНАЧЕНИЯ ПЕРЕМЕННЫХ ОБЪЕКТА");
for (let key in person) {
    console.log("key:", key);
    console.log("value: ", person[key]);
}

console.log("ЧТОБЫ ИЗБЕЖАТЬ ППОПАДАНИЕ МЕТОДОВ ПРОТОТИПОВ(ОБЪЕКТОВ РОДИТЕЛЕЙ) В ВЫВОД СЛЕДУЕТ ДЕЛАТЬ ТАК!");
for (let key in person) {
    if (person.hasOwnProperty(key)) {
        console.log("key:", key);
        console.log("value: ", person[key]);
    }
}

console.log("СОВРЕМЕННЫЙ СПОСОБ ИТЕРАЦИИ ОБЪЕКТА");
// оснавная фишка он не бежит по прототипу - потому не надо писать проверку
const keys = Object.keys(person);
keys.forEach((key) => {
    console.log("key:", key);
    console.log("value: ", person[key]);
});
// еще короче
console.log("ЕЩЕ КОРОЧЕ");
Object.keys(person).forEach((key) => {
    console.log("key:", key);
    console.log("value: ", person[key]);
});


const logger = {
    keys() {
        console.log("Object Keys: ", Object.keys(this));
    },
    keysAndValue() {
        for (let key in this) {
            if (this.hasOwnProperty(key)) {
                console.log("key:", key, " value: ", this[key]);
            }
        }
    },
    keysAndValueTwo() {
        console.log(" --- ");
        Object.keys(this).forEach(key => {
             console.log("key:", key, " value: ", this[key]);
        });
    },
    withParams(top = false, beween = false, botton = false) {
        if (top) {
            console.log("---Start---");
        }
        Object.keys(this).forEach((key, index, array) => {
            console.log("key:", key, " value: ", this[key])
            if (beween && index !== array.length - 1) {
                console.log("-----------------");
            }
        });
        if (botton) {
            console.log("---End---");
        }

    }
}

logger.keys(person); // что сюда не передавай, выведет все равно только данные по объекту LOGGER так как там стоит - this
const bound = logger.keys.bind(logger);
const boundTwo = logger.keys.bind(person);
console.info(bound);
console.info(boundTwo);
//вызываает сразу функцию а не как в примере выше по требованию переменной
logger.keys.call(logger);
logger.keys.call(person);
logger.keysAndValue(person)
logger.keysAndValueTwo(person);
logger.withParams.call(person, true, true, true);
logger.withParams.apply(person, [true, true, true]); // тоже самое только всегда два параметра и второй параметр это массив с теми же параметрами что и были выше


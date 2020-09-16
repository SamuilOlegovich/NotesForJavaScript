
// Объекты
const person = {
    name: "Vasa",
    age: 17,
    isProgrammer: true,
    languages: ["en", "ru", "US"],
    "complex key": "complex value",
    ["key_"+ (1 + 3)]: "Computed key", // key_4
    greet() {
         console.log("greet from person");
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



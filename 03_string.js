// String
const name = "Самуил";
const age = 39;

let output = "Привет! меня зовут " + name + " мне сейчас " + age + " лет.";
console.log(output);
output = `Привет! меня зовут ${name} мне сейчас ${getAge()} лет.`;
console.log(output);
output = `Привет! меня зовут ${name} мне сейчас ${age < 60 ? age : 90} лет.`;
console.log(output);

function getAge() {return age;}

output = `
    <div>This is div</div>
    <p>this is p</p>
`
console.log(output);

console.log(name.length);
console.log(name.toUpperCase());
console.log(name.toLowerCase());
console.log(name.charAt(3));
console.log(name.indexOf("муи"));
console.log(name.startsWith("ьш"));
console.log(name.endsWith("ил"));
console.log(name.repeat(3));

const string = "   password    ";
console.log(string);
console.log(string.trim());
console.log(string.trimLeft());
console.log(string.trimRight());

function logPersone(s, name, age) {
    if (age <= 0) {
        age = "еще не родился";
    }
    console.log(s, name, age);
    console.log(`${s[0]}${name}${s[1]}${age}${s[2]}`);
    return "Info about person";
}

const out = logPersone`Имя: ${name}, Возраст ${age}!`;
const out2 = logPersone`Имя: ${name}, Возраст ${-1}!`;



// DOM
// alert("!");
// window.alert("!");  // одно и то же
// window.confirm("Это ты?");
// window.prompt("Как вас зовут?");

const heading = document.getElementById("hello");
// console.log(heading);
// console.dir(heading); // можно раскрывать и смотреть дериктории, а не просто вывод

console.dir(heading.textContent);

setTimeout(() => {
heading.textContent = "Changed from JavaScript!";
heading.style.color = "red";
heading.style.textAlign = "center";
heading.style.backgroundColor = "gray";
heading.style.padding = "2rem";
}, 1000);

// тоже самое но через функцию
setTimeout(() => {
    addStyiesTo(heading);
}, 2000);


function addStyiesTo(node, text, color = "red", fontSize) {
    node.textContent = text;
    node.style.color = color;
    node.style.textAlign = "center";
    node.style.backgroundColor = "black";
    node.style.padding = "2rem";
    node.style.display = "block";
    node.style.width = "100%";  // нужно для ссылки
    if (fontSize) {
        node.style.fontSize = fontSize;
    }

};

// получаем масив
// const heading2 = document.getElementsByTagName("h2")[0];
//в [] скобках указываем какой элемент нужен из массива, если не указать прийдет вксь псевдомассив
// const heading2 = document.getElementsByClassName("h2-class")[0];
// современный метод этого же. можно забирать по тегу h2, по .h2-class, по id
// выдает только первое совпадение
const heading2 = document.querySelector(".h2-class"); // класс надо указыват с точкой
// получаем  следующий элемент если элементов с одинаковым названием много
let heading3 = heading2.nextElementSibling;
// или можно забрать все элементы с одинаковым тегом
const h2List = document.querySelectorAll("h2")
heading3 = h2List[1];
heading3 = h2List[h2List.length - 1];

addStyiesTo(heading2);
// addStyiesTo(heading3);

setTimeout(()=> {addStyiesTo(heading, "JavaScript")}, 3000);
setTimeout(()=> {addStyiesTo(heading2, "практикуйся", "blue", "2rem")}, 5000);

const link = heading3.querySelector("a");
link.addEventListener("click", (event) => {
   console.log("Click on link", event);
});

setTimeout(()=> {addStyiesTo(heading3.children[0], "и все получится!", "green")}, 7000);



// СОБЫТИЯ
// https://developer.mozilla.org/ru/docs/Web/Events
heading.onclick = () => {
    if (heading.style.color === "red") {
        heading.style.color = "black";
        heading.style.backgroundColor = "#fff";
    } else {
        heading.style.color = "#fff";
        heading.style.backgroundColor = "#000";
    }
}

heading2.addEventListener("dblclick", () => {
    if (heading2.style.color === "blue") {
        heading2.style.color = "black";
        heading2.style.backgroundColor = "#fff";
    } else {
        heading2.style.color = "#fff";
        heading2.style.backgroundColor = "#000";
    }
});

// heading3.



// Асинхронность - Event Loop

const timeout = setTimeout(() => {
    console.log("After timout")
}, 2500); // выводится через 2,5 секунды если обновлять страницу
clearTimeout(timeout); // после вызова этого метода ничего выводится после одного раза уже не будет

const interval = setInterval(() => {
    console.log("After timout")
}, 1500); // тоже самое только интервал
clearInterval(interval);

// это же только переписали по своему в функции
const  delay = (callBack, wait = 1000) => {
    setTimeout(callBack, wait);
}
delay(() => {
    console.log("After 2 seconds");
}, 2000);

// а теперь с использованием Промисов
const delayTwo = (wait = 1000) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            // resolve();
            reject("Что-то пошло не так, повторите попытку.")
        }, wait);
    });
    return promise;
}

delayTwo(2500)
    .then(() => {
        console.log("After 2,5 seconds")
    })
    .catch(err => console.error("Error: ", err))
    .finally(() => console.log("finely"));


const getData = () => new Promise(resolve => resolve(
    [1, 1, 2, 3, 5, 8, 13]));
getData().then(data => console.log(data));


async function asyncExample() {
    try {
        await delayTwo(3000); // await работает только с меткой async
        const data = await getData();
        console.log("Data", data);
    } catch (e) {
        console.log(e);
    } finally {
        console.log("finally");
    }

}

asyncExample();
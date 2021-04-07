"use strict"
const button1El = document.getElementById("1");
const button2El = document.getElementById("2");
const button3El = document.getElementById("3");
const button4El = document.getElementById("4");

button1El.addEventListener("click", func1);
button2El.addEventListener("click", func2);
button3El.addEventListener("click", func3);
button4El.addEventListener("click", func4);

// Задание 1
// Создайте объект, свойствами которого являются ф.и.о человека, 
// его возраст и отметка о прохождении медосмотра (false или true).
// Преобразуйте этот объект в JSON.
// Выведите полученную строку.
// Преобразуйте полученный JSON в новый объект.
// При помощи цикла for.. in выведите все свойства нового  объекта и их значения.

function func1() {
    const human = {
        name: "Григорий",
        lastname: "Ильин",
        suname: "Елисеевич",
        age: 6,
        medical: false,
    };

    let json = JSON.stringify(human);

    console.log(json);

    let unjson = JSON.parse(json);

    console.log(unjson);

    for( key in human){
        console.log( key );
    }
};

// Задание 2

// 1) Напишите скрипт, который определяет,  в какой день недели вы родились, 
// и выводит название этого дня недели.
// 2) Дополните скрипт, чтобы он определял,  
// на какой день недели выпадает ваш день рождения в этом году.
// 3) Дополните скрипт, чтобы он определял ваш возраст на данный момент 
// (Количество полных лет).
// 4)Дополните скрипт,  таким образом, чтобы он вычислял, 
// сколько дней осталось до вашего дня рождения в этом(или следующем) году.

function func2() {
    

    function dayByrthday(day) {
    const dayWeek = ["Воскресенье","Понедельник","Вторник","Среда","Четверг","Пятница","Суббота"];    
    let myBirthday = new Date(day);

    console.log(myBirthday);
   
    console.log(dayWeek[myBirthday.getDay()]);

    }

    const daysTime = 1000 * 3600 * 24;

    let myBirthDayBack = new Date("1989-06-01")

    dayByrthday(myBirthDayBack);

    let birthDayNow = new Date("2021-06-01");

    dayByrthday(birthDayNow);

    console.log("Осталось: " + Math.floor((Date.now() - myBirthDayBack) / (daysTime * 365)) + " года" );

    console.log("Осталось: " + Math.floor((birthDayNow - Date.now() ) / daysTime ) + " дней" );
}

// Задание 3
//  При помощи метода  Date.now(), 
//  определите сколько времени уйдет на вычисление суммы 
//  натуральных чисел от 1 до 1 000 000

function func3() {
    let start = Date.now();
    let sum = 0;

    for(let i = 0; i < 100000; i++) {
        sum += i;
    }

    let end = Date.now();
    console.log(end - start);
}

// Задание 4 (По желанию)
// Напишите функцию, которая принимает в качестве параметра количество дней 
// и возвращает какие  будут год, месяц и число через это количество дней.

function func4() {
    let days = +prompt("Введите кол-во дней");
    let futureDay = new Date( Date.now() + (days * 1000 * 3600 * 24) )

    console.log(futureDay)
}
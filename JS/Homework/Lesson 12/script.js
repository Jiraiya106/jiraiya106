const button1El = document.getElementById("1");
const button2El = document.getElementById("2");
const button3El = document.getElementById("3");
const button4El = document.getElementById("4");

button1El.addEventListener("click", func1);
button2El.addEventListener("click", func2);
button3El.addEventListener("click", func3);
button4El.addEventListener("click", func4);


// Задание 1.
// Выполните задание, используя  метод  Object.values  и  цикл for..of.
// Объект experience содержит сведения о стаже работы 
// каждого сотрудника фирмы (свойства и значения задать самостоятельно). 
// Вычислите средний стаж работы сотрудников,  количество сотрудников, 
// чей стаж не превышает 3 года и 
// количество сотрудников со стажем работы 20 лет и более.

function func1() {
    const old = {
        Ivanov1: 1,
        Ivanov2: 20,
        Ivanov3: 3,
        Ivanov4: 40,
        Ivanov5: 2,
        Ivanov6: 60,
        Ivanov7: 1,
        Ivanov8: 20,
        Ivanov9: 90,
        Ivanov10: 50,
    };
    
    let middleOld = 0;
    let minUser = 0;
    let maxUser = 0;
    for ( let value of Object.values(old) ) {
        middleOld += value;
        if( value <= 3){
            minUser++
        } else maxUser ++
    }

    console.log( middleOld/Object.keys(old).length + ", " + minUser + ", " + maxUser )
}


// Задание 2.
// Выполните задание, используя методы  Object.entries  и Object.fromEntries.
// Объект monitors содержит  значения диагонали мониторов в дюймах.
// Philips:21,   Asus:19,   Samsung:23.5,   LG24MK: 23.6,   LG27GL: 27
// Создайте объект, содержащий значения диагонали этих же мониторов в сантиметрах.
// Определите количество моделей мониторов, содержащихся в объекте monitors


function func2() {
    const monitors = {
        Philips: 21,
        Asus: 19,
        Samsung:23.5,
        LG24MK: 23.6,
        LG27GL: 27
    }

    let santimMonitors = Object.fromEntries( Object.entries(monitors).map( ([key, value]) => [key, 2.54 * value]));
    console.log(santimMonitors);
}

// Задание 3
// Дан объект:
// let user = {
// display:  “1440×900”,
// JavaScript:  “Да”,
// Flash: “32.0”,
// OS: “Windows8”,
// };
// Напишите деструктурирующее присваивание, которое:
// свойство display присвоит в переменную myDisplay
// свойство OS присвоит в переменную myOS.
// свойство c присвоит в переменную myBrowser 
// (Если нет такого свойства, то “Google chrome” по умолчанию);

function func3() {

    const user = {
    display:  "1440×900",
    JavaScript:  "Да",
    Flash: "32.0",
    OS: "Windows8",
    };

    let {
        display: myDisplay,
        JavaScript,
        OS: myOS,
        browser: myBrowser = "Google chrome",
     } = user;

     console.log(`
    myDisplay: ${myDisplay},
    myOS: ${myOS}, 
    myBrowser: ${myBrowser}, 
    JavaScript: ${JavaScript}`);
}

// Задание 4
// В массиве содержатся результаты  6  замеров скорости входящего интернет соединения.
// let speed=[9.73, 9.68, 9.71, 9.74, 9.72, 9.75];
// Напишите деструктурирующее присваивание, которое:
// Переменным max1, max2  и max3   присваивает три максимальные по величине значения из этого массива.
// В массив rest заносит оставшиеся значения скорости.
 

function func4() {

    let speed=[9.73, 9.68, 9.71, 9.74, 9.72, 9.75];

    speed = speed.sort( (a,b) => a - b).reverse();
    [max1, max2, max3, ...rest] = speed;

    console.log(max1, max2, max3, rest);
 }
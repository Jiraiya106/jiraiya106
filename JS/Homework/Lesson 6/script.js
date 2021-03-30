// Задание 1 
// Функция принимает параметр - возраст пользователя. 
// Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

{
    let userAge = +prompt("Введите возраст");

    function showWelcome (a){
        if (a > 16) {
            return console.log("добро пожаловать")
        } else return console.log("вы еще молоды")
    }

    showWelcome(userAge)
}

// Задание 2 
// Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, 
// если меньше 7 – пишет, что число меньше 7. 
// Если 8, 9 – то возвращает соответственно 7 или 8. 
// Реализуйте решение с несколькими return.

{
    let Number = +prompt("Введите число");

    function showNumber (a) {
        if (a >= 10) {
            return console.log(Math.pow(a,2))
        } else if (a == 9 || a == 8){
            switch (a){
                case 8: return console.log(7); break;
                case 9: return console.log(8); break;
                default: return console.log ("ERROR")
            }   
        } else if (Number < 7) {return console.log("Меньше 7")
        } else return console.log("What are fuck??")

        }

    showNumber (Number)
    
}


// Задание 3 
// Напишите функцию calcMin(a,b,с), 
// которая возвращает меньшее из  трех чисел a , b,с.

{
    let a = +prompt("Введите число");
    let b = +prompt("Введите число");
    let c = +prompt("Введите число");

    function calcMin(x,y,z) {
        if (x > y) {
            if(y > z) {
                console.log(`${z}`);
            } else if (y === z) {
                console.log(`${z}`);
            } else {
                console.log(`${y}`);
            }
        } else if (x > z){
            if (x === z) {
                console.log(`${z}`);
            } else {
                console.log(`${z}`);
            }    
        } else {
            if (x < z){
                console.log(`${x}`);
            } else if (x == y == z) 
                console.log("Они равны");
            else {
                console.log("Что за хрень?");
            }
        }
    }

    calcMin (a,b,c)
}

// Задание 4 
// Создайте функцию, которая получает два параметра – число и степень числа.
// Возведите число в степень и выведите с помощью alert

{
    let Number = +prompt("Введите число");
    let Power = +prompt("Введите степень");

    function showPower (a,b) {
       return console.log(Math.pow(a,b));
    }

    showPower(Number, Power);
}

// Задание 5 
// Создайте функцию circle(r), которая получает в качестве аргумента радиус окружности и 
// возвращает её длину. (Длина окружности вычисляется по формуле L=2πR, где R-радиус окружности, 
// а константа π=3.14 );
// Math.PI - возвращает число PI

{
    let Radius = +prompt("Введите радиус")

    function circle(a) {
        let Lenght = 2*Math.PI*a

        return Lenght
    }

        console.log(circle (Radius));
}

// Задание 6 *(по желанию)

// Напишите функцию для вычисления неполного  частного ( целочисленное деление). 
// С её помощью подсчитайте, сколько цифр во введенном числе.

{
    let Number1 = +prompt("Введите первое число");
    let Number2 = +prompt("Введите второе число");

    function getIncompletePrivate (a,b){
        let result = a%b

        return console.log(result.toString().length),
        console.log(a%b);
    }
    
    getIncompletePrivate(Number1, Number2);
}
"use strict"
// Задание 1
// Используя конструкцию if..else, напишите код, который будет спрашивать: 
// «Каково «официальное» название JavaScript?».
// Если посетитель вводит «ECMAScript», то выводить «Верно!», 
// если что-то другое – выводить «Не знаете? «ECMAScript»!».

{
    let question = prompt("Каково «официальное» название JavaScript?");
    if (question === "ECMAScript") {
        console.log("Верно!");
    } else {
        console.log("Не знаете? «ECMAScript»!");
    }
}

// Задание 2
// Используя конструкцию if..else, напишите код, который получает значение prompt, 
// а затем выводит, является число положительным, отрицательным или равным 0 

{
    let NoName = +prompt("Введите число!!!!");
    
    if (NoName > 0) {
            console.log ("+");
        } else if (NoName < 0) {
            console.log ("-");
        } else {
            if (NoName === 0) {
                console.log ("0");
            } else
            console.log ("Что за хренЬ???");
        }
    
}

// Задание 3
// Узнать который сейчас час в Javascript можно следующим образом:
// let date = new Date();
// let  h= date.getHours();
// Составьте скрипт, который спрашивает имя пользователя и приветствует его  по-разному,  
// в зависимости от времени суток. (Доброе утро, бодрый день и т.д)

{
    let date = new Date();
    let  h= date.getHours();
    if (h > 0 && h < 11) {
        console.log ("Доброе утро");
    } else if (h > 11 && h < 14) {
        console.log ("бодрый день");
    } else {
        console.log ("и т.д");
    }
}

// Задание 4
// Даны два  числа, каждое вводится в отдельном модальном окне. 
// Программа должна вывести число 1, если первое число больше второго, число 2, 
// если второе больше первого, или число 0, если они равны.


{
    let FirstNumber = +prompt("Введите первое число");
    let SecondNumber = +prompt("Введите второе число");

    if (FirstNumber > SecondNumber) {
        console.log ("1");
    } else if (FirstNumber < SecondNumber) {
        console.log ("2");
    } else {
        if (FirstNumber === SecondNumber) {
            console.log ("0");
        } else
        console.log ("Что за хренЬ???");
    }
}

// Задание 5
// Даны три  числа, каждое вводится в отдельном модальном окне..
// Выведите наибольшее из данных чисел (программа должна вывести ровно одно целое число).

{
    let FirstNumber = +prompt("Введите первое число");
    let SecondNumber = +prompt("Введите второе число");
    let ThreeNumber = +prompt("Введите третье число");

    if (FirstNumber < SecondNumber) {
        if(SecondNumber < ThreeNumber) {
            console.log("Третье");
        } else if (SecondNumber === ThreeNumber) {
            console.log("Второе = Третье");
        } else {
            console.log("Второе");
        }
    } else if (FirstNumber < ThreeNumber){
        if (FirstNumber === ThreeNumber) {
            console.log("1 = 3");
        } else {
            console.log("3");
        }    
    } else {
        if (FirstNumber > ThreeNumber){
            console.log("1");
        } else if (FirstNumber == SecondNumber == ThreeNumber) 
            console.log("Они равны");
        else {
            console.log("Что за хрень?");
        }
    }
}

// Задание 6
// Требуется определить, можно ли от шоколадки размером n × m долек отломить k долек, 
// если разрешается сделать один разлом по прямой между дольками 
// (то есть разломить шоколадку на два прямоугольника).

{
    let Row = +prompt("Введите n");
    let Colums = +prompt("Введите m");
    let Total = +prompt("Введите к")

    if (Number.isInteger(Row) && Number.isInteger(Colums) && Number.isInteger(Total)) {
    if (Total === Row) {
        console.log("Можно по n");
    } else if (Total === Colums) {
        console.log("Можно по m"); 
    } else {
        console.log("Нельзя");
    }

    } else {
        console.log("Что за хрень?");
    }
}


"use strict"

document.getElementById("1").addEventListener("click", func1);
// document.getElementById("2").addEventListener("click", func2);

// Задание 1

// Напишите функцию printNumbers(from, to), 
// которая будет выводить счётчик каждую секунду в HTML, 
// начиная от from и заканчивая to. 
// Начальные и конечные цифры вводит пользователь в prompt. 
// Сделать проверку, что бы то что ввел пользователь было 
// числом и начальное больше конечного 
// (или наоборот, смотря в какую сторону вы хотите счётчик). 
// В случае неправильного ввода просите пользователя ввести пока 
// не введет правильно.
// Сделайте два варианта решения.
// а. Используя setInterval.
// б. Используя рекурсивный setTimeout.

function func1() {
    let numberFrom = +prompt("Введите число 1");
    let numberTo = +prompt("Введите число 2");

    
    // console.log(conf)
    // function up (a, b) {
    //     a >= b ? a - 1 : alert("Всё!")
    // }

    function printNumbersTimeOut(from, to) {
        if ( Number.isInteger(from) && Number.isInteger(to) ) {
            if( from > to) {
                let countdown = confirm("Ваше первое число больше второго! Мы будем считать в обратную сторону?");
                    if (countdown == true){
                        setTimeout(function down(a, b) {
                            console.log(a);
                            if(a > b){
                                a -= 1;
                                setTimeout( down, 1000, a, b )
                            } else clearTimeout(); 
                           
                        }, 1000, from, to);
                    } if(countdown == false) {
                            alert("Давайте начнем с начала"); 
                            func1()
                        }
            } else {
                setTimeout(function up(a, b) {
                    console.log(a);
                    if(a < b){
                        a += 1;
                        setTimeout( up, 1000, a, b );
                    } else clearTimeout(); 
                   
                }, 1000, from, to);
            }
            

        } else {
            alert("Вы ввели НЕ число. Начнем с начала. Введите именно ЧИСЛО!!! ")
            func1()
        }
    }

    function printNumbersInterval(from,to) {
        if ( Number.isInteger(from) && Number.isInteger(to) ) {
            if( from > to) {
                let countdown = confirm("Ваше первое число больше второго! Мы будем считать в обратную сторону?");
                    if (countdown == true){
                       let interValDown = setInterval(function down() {
                            if(from < to) {
                               clearInterval(interValDown);
                            } else {
                                console.log(from); 
                                from -= 1;
                            }
                        }, 1000, from, to);
                    } if(countdown == false) {
                            alert("Давайте начнем с начала"); 
                            func1();
                        }
            } else {
                let interValUp = setInterval(() => {
                    
                    if(from > to) {
                      clearInterval(interValUp);  
                    } else {console.log(from); 
                            from += 1;} 
                }, 1000, from, to);
            }
        } else {
            alert("Вы ввели НЕ число. Начнем с начала. Введите именно ЧИСЛО!!!");
            func1();
        }
    }

    let choice = confirm("Мы решаем интервалом или таймаутом? Интерал - ОК, Таймаут - Отмена")
    if(choice == true) {
        printNumbersInterval(numberFrom, numberTo);
    } else printNumbersTimeOut(numberFrom, numberTo);
    
}

    window.onload = function(){
        window.setInterval(
            function(){
                let d = new Date();
                document.getElementById("clock").innerHTML = d.toLocaleTimeString();
            }, 1000
        )
    }

const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
const sc = document.querySelector("#sc");


let day = new Date();
let hh = day.getHours() * 30;
let mm = day.getMinutes() * deg;
let ss = day.getSeconds() * deg;


console.log(hr)
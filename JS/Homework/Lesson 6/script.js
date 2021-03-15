// Задание 1 
// Функция принимает параметр - возраст пользователя. 
// Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

// {
//     let userAge = +prompt("Введите возраст");

//     function showWelcome (){
//         if (userAge > 16) {
//             return console.log("добро пожаловать")
//         } else return console.log("вы еще молоды")
//     }

//     showWelcome(userAge)
// }

// Задание 2 
// Пользователь вводит числа. Если число больше 10, то функция возвращает квадрат числа, 
// если меньше 7 – пишет, что число меньше 7. 
// Если 8, 9 – то возвращает соответственно 7 или 8. 
// Реализуйте решение с несколькими return.

// {
//     let Number = +prompt("Введите число");

//     function showNumber () {
//         if (Number >= 10) {
//             return console.log(Math.pow(Number,2))
//         } else if (Number == 9 || Number == 8){
//             switch (Number){
//                 case 8: return console.log(7); break;
//                 case 9: return console.log(8); break;
//                 default: return console.log ("ERROR")
//             }   
//         } else if (Number < 7) {return console.log("Меньше 7")
//         } else return console.log("What are fuck??")

//         }

//     showNumber (Number)
    
// }


// Задание 3 
// Напишите функцию calcMin(a,b,с), 
// которая возвращает меньшее из  трех чисел a , b,с.

// {
//     let a = +prompt("Введите число");
//     let b = +prompt("Введите число");
//     let c = +prompt("Введите число");

//     function calcMin() {
//         if (a > b) {
//             if(b > c) {
//                 console.log(`${c}`);
//             } else if (b === c) {
//                 console.log(`${c}`);
//             } else {
//                 console.log(`${b}`);
//             }
//         } else if (a > c){
//             if (a === c) {
//                 console.log(`${c}`);
//             } else {
//                 console.log(`${c}`);
//             }    
//         } else {
//             if (a < c){
//                 console.log(`${a}`);
//             } else if (a == b == c) 
//                 console.log("Они равны");
//             else {
//                 console.log("Что за хрень?");
//             }
//         }
//     }

//     calcMin (a,b,c)
// }

// Задание 4 
// Создайте функцию, которая получает два параметра – число и степень числа.
// Возведите число в степень и выведите с помощью alert

{
    let Number = +prompt("Введите число");
    let Power = +prompt("Введите степень");

    function showPower () {
       return console.log(Math.pow(Number,Power));
    }

    showPower(Number, Power);
}

"use strict"
// {
//     let question = prompt("Каково «официальное» название JavaScript?");
//     if (question === "ECMAScript") {
//         console.log("Верно!");
//     } else {
//         console.log("Не знаете? «ECMAScript»!");
//     }
// }

// {
//     let NoName = +prompt("Введите число!!!!");
    
//     if (NoName > 0) {
//             console.log ("+");
//         } else if (NoName < 0) {
//             console.log ("-");
//         } else {
//             if (NoName === 0) {
//                 console.log ("0");
//             } else
//             console.log ("Что за хренЬ???");
//         }
    
// }

// {
//     let date = new Date();
//     let  h= date.getHours();
//     if (h < 11) {
//         console.log ("Доброе утро");
//     } else if (h > 11 && h < 14) {
//         console.log ("бодрый день");
//     } else {
//         console.log ("и т.д");
//     }
// }

// {
//     let FirstNumber = +prompt("Введите первое число");
//     let SecondNumber = +prompt("Введите второе число");

//     if (FirstNumber > SecondNumber) {
//         console.log ("1");
//     } else if (FirstNumber < SecondNumber) {
//         console.log ("2");
//     } else {
//         if (FirstNumber === SecondNumber) {
//             console.log ("0");
//         } else
//         console.log ("Что за хренЬ???");
//     }
// }

// {
//     let FirstNumber = +prompt("Введите первое число");
//     let SecondNumber = +prompt("Введите второе число");
//     let ThreeNumber = +prompt("Введите третье число");

//     if (FirstNumber < SecondNumber) {
//         if(SecondNumber < ThreeNumber) {
//             console.log("Третье");
//         } else if (SecondNumber === ThreeNumber) {
//             console.log("Второе = Третье");
//         } else {
//             console.log("Второе");
//         }
//     } else if (FirstNumber < ThreeNumber){
//         if (FirstNumber === ThreeNumber) {
//             console.log("1 = 3");
//         } else {
//             console.log("3");
//         }    
//     } else {
//         if (FirstNumber > ThreeNumber){
//             console.log("1");
//         } else if (FirstNumber == SecondNumber == ThreeNumber) 
//             console.log("Они равны");
//         else {
//             console.log("Что за хрень?");
//         }
//     }
// }

// {
//     let Row = +prompt("Введите n");
//     let Colums = +prompt("Введите m");
//     let Total = +prompt("Введите к")

//     if (Number.isInteger(Row) && Number.isInteger(Colums) && Number.isInteger(Total)) {
//     if (Total === Row) {
//         console.log("Можно по n");
//     } else if (Total === Colums) {
//         console.log("Можно по m"); 
//     } else {
//         console.log("Нельзя");
//     }

//     } else {
//         console.log("Что за хрень?");
//     }
// }


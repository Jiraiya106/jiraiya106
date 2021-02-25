"use strict"
{
    let Number = +prompt("Введите номер месяца?");

    switch(Number){
        case 1: 
        case 2: console.log("Зима"); break;
        case 3:
        case 4:    
        case 5: console.log("Весна"); break;
        case 6:
        case 7:
        case 8: console.log("Лето"); break;
        case 9:
        case 10:
        case 11: console.log("Осень"); break;
        case 12: console.log("Зима"); break;
        default: console.log("ЧТО ЗА ХРЕНЬ?????");
    }
}

{
    let Number = +prompt("Введите число");

    switch(Number){
        case 1: console.log("один"); break;
        case 2: console.log("два"); break;
        case 3:console.log("три"); break;
        case 4: console.log("четыре"); break;   
        case 5: console.log("пять"); break;
        case 6:console.log("шесть"); break;
        case 7:console.log("семь"); break;
        case 8: console.log("восемь"); break;
        case 9:console.log("девять"); break;
        case 10:console.log("ноль"); break;
        default: console.log("ЧТО ЗА ХРЕНЬ?????");
    }
}

{
    let date = new Date();
    let  h= date.getHours();
    
    switch(h){
        case 0: console.log("Полночь"); break;
        case 1: 
        case 2: 
        case 3:
        case 4:console.log("Уже ночь. Иди сапать!!!"); break;    
        case 5: 
        case 6:
        case 7:
        case 8: 
        case 9:
        case 10:
        case 11: console.log("Доброе утро"); break;
        case 12: console.log("Полдень"); break;
        case 13:
        case 14:
        case 15: 
        case 16:console.log("Добрый день"); break;
        case 17:
        case 18: 
        case 19:
        case 20:
        case 21: console.log("Добрый вечер"); break;
        case 22: console.log("Уже ночь. Иди сапать!!!"); break;
        case 23:
        
        default: console.log("ЧТО ЗА ХРЕНЬ?????");
    }

}
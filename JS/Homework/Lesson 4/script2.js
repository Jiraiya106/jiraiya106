"use strict"
// Задание 1
// Дан номер месяца (1 – январь, 2 – февраль, ...). Вывести название соответствующего времени года («зима», «весна» и т. д.).

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

//Задание 2
//Дано целое число в диапазоне от 0 до 9. Вывести строку – название соотвествующей цифры на русском языке (0 – «ноль», 1 – «один», 2 – «два», ...)

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

// Задание 3
// Узнать который сейчас час в Javascript можно следующим образом:
// let date = new Date();
// let  h= date.getHours();
// Составьте скрипт, который спрашивает имя пользователя и приветствует его  по-разному,  в зависимости от времени суток. (Доброе утро, бодрый день и т.д)

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

// Задание 4
// Дано целое число в диапазоне от 1 до 5. 
//Вывести строку – словесное описание соответствующей оценки 
//(1 – «плохо», 2 – «неудовлетворительно», 3 – «удовлетворительно», 4 – «хорошо», 5 – «отлично»)

{
    let Number = +prompt("Введите число");

    switch(Number) {
        case 1: console.log("плохо"); break;
        case 2: console.log("неудовлетворительно"); break;
        case 3: console.log("удовлетворительно"); break;
        case 4: console.log("хорошо"); break;
        case 5: console.log("отлично"); break;
        default: console.log("Число больше возможного"); break;
    }
}

// Задание 5
// Единицы длины пронумерованы следующим образом: 
// 1 – дециметр, 2 – километр, 3 – метр, 4 – миллиметр, 5 – сантиметр. 
// Дан номер единицы длины N и длина отрезка L в этих единицах (вещественное число). 
// Вывести длину данного отрезка в метрах

{
    let LeghtUnits = +prompt("Введите номер единицы измерения");
    let SegmentLeght = +prompt("Введите длинну отрезка");

    switch(LeghtUnits) {
        case 1: console.log(`${SegmentLeght} дециметр`); break;
        case 2: console.log(`${SegmentLeght} километр`); break;
        case 3: console.log(`${SegmentLeght} метр`); break;
        case 4: console.log(`${SegmentLeght} миллиметр`); break;
        case 5: console.log(`${SegmentLeght} сантиметр`); break;
        default: console.log("Нет таких единиц");
    }
}

// Задание 6
// Составить программу, которая печатает номера дней в месяце, 
// если вводится день недели. Считаем, что 1–е число месяца – понедельник, 
// в месяце 30 дней.

{
    let NumberDays = +prompt("Введите число месяца");
           switch(true) {
            case NumberDays === 1 || NumberDays === 8 || NumberDays === 15 || NumberDays === 22 || NumberDays === 29: console.log("Понедельник"); break;
            case NumberDays === 2 || NumberDays === 9 || NumberDays === 16 || NumberDays === 23 || NumberDays === 30: console.log("Вторник"); break;
            case NumberDays === 3 || NumberDays === 10 || NumberDays === 17 || NumberDays === 24: console.log("Среда"); break;
            case NumberDays === 4 || NumberDays === 11 || NumberDays === 18 || NumberDays === 25: console.log("Четверг"); break;
            case NumberDays === 5 || NumberDays === 12 || NumberDays === 19 || NumberDays === 26: console.log("Пятница"); break;
            case NumberDays === 6 || NumberDays === 13 || NumberDays === 20 || NumberDays === 27: console.log("Суббота"); break;
            case NumberDays === 7 || NumberDays === 14 || NumberDays === 21 || NumberDays === 28: console.log("Воскресенье"); break;
            default: console.log("Нет такой даты"); 
        } 
}

// Задание 7* (По желанию)
// Дано целое число в диапазоне от 100 до 999. 
// Вывести строку – словесное описание данного числа, например: 
// 256 – «двести пятьдесят шесть», 814 – «восемьсот четырнадцать».

{
    let Number = +prompt("Введите число");
    let Hundred = 0;
    let Dozens = 0;
    let Units = 0;

    switch (Math.trunc(Number/100)){
        case 1:Hundred = "Сто"; break;
        case 2:Hundred = "Двести"; break;
        case 3:Hundred = "Триста"; break;
        case 4:Hundred = "Четыреста"; break;
        case 5:Hundred = "Пятсот"; break;
        case 6:Hundred = "Шестьсот"; break;
        case 7:Hundred = "Семьсот"; break;
        case 8:Hundred = "Восемьсот"; break;
        case 9:Hundred = "Девятьсот"; break;
        default:Hundred = ""; break;
    }

    if(Number%100 >= 10 && Number%100 < 20){
        switch(Number%100){
            case 10: Dozens = "десять"; break;
            case 11: Dozens = "одинадцать"; break;
            case 12: Dozens = "двенадцать"; break;
            case 13: Dozens = "тринадцать"; break;
            case 14: Dozens = "четырнадцать"; break;
            case 15: Dozens = "пятнадцать"; break;
            case 16: Dozens = "шестнадцать"; break;
            case 17: Dozens = "семнадцать"; break;
            case 18: Dozens = "восемнадцать"; break;
            case 19: Dozens = "девятнадцать"; break;
        }
    }

    if (Number%100 >= 20 && Number%100 <= 99){
       switch (Math.trunc(Number%100/10)){ 
        case 2: Dozens = "двадцать"; break;
        case 3: Dozens = "тридцать"; break;
        case 4: Dozens = "сорок"; break;
        case 5: Dozens = "пятдесят"; break;
        case 6: Dozens = "шестьдесят"; break;
        case 7: Dozens = "семьдесят"; break;
        case 8: Dozens = "восемьдесят"; break;
        case 9: Dozens = "девяносто"; break;
        default: Dozens = ""; break;
       }
    }

    switch (Number%10) {
        case 0: Units = ""; break;
        case 1: Units = "один"; break;
        case 2: Units = "два"; break;
        case 3: Units = "три"; break;
        case 4: Units = "четыре"; break;
        case 5: Units = "пять"; break;
        case 6: Units = "шесть"; break;
        case 7: Units = "семь"; break;
        case 8: Units = "восемь"; break;
        case 9: Units = "девять"; break;
        default: Units = ""; break;
    }


    console.log(`${Hundred} ${Dozens} ${Units}`);
    // console.log(Number%100)
    // console.log(Math.trunc(Number%100/10))
    // console.log(Number%10)
}
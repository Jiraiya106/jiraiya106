"use strict";
// Задание 1    
// Напишите функцию, которая принимает в качестве аргумента значение угла в градусах, 
// и возвращает  значение этого же угла в радианах. 
// (Нужно значение угла в градусах умножить на 3.14 и поделить на 180)

{
    let Deg = +prompt("Введите градусы");

    function showRadDec(a) { 
        return console.log(a*3.14/180);
    }

    showRadDec(Deg);

    let showRadExp = function(a) {
        return console.log(a*3.14/180);
    };

    showRadExp(Deg)
    
   let showRadArrow = (a) => console.log(a*3.14/180);

   showRadArrow(Deg);
}

// Задание 2    
// Напишите функцию,  которая принимает в качестве аргумента 
// два  натуральных числа  ( a и b) 
// и возвращает сумму всех чисел от  a до b

{
    let a = +prompt("Введите число");
    let b = +prompt("Введите число");

    function SumDec(x,z) {
        return console.log(x + z);
    }

    SumDec(a, b);

    let SumExp = function(x,z) {
        return console.log(x + z);
    };

    SumExp(a, b);

    let SumArrow = (x,z) => console.log(x + z);

    SumArrow(a, b);
}

// Задание 3    
// Напишите функцию,  которая принимает в качестве аргумента   
// натуральное  число  возвращает его факториал. 
// Факториал (обозначается !) - это произведение (умножение) всех целых чисел, 
// меньше данного, и его самого. 
// Например, 4! = 1*2*3*4.

{
    let IntArg = +prompt("Введите факториал")

    function FactDeg(a) {
        let IntermeiateResult = 1;
        for (let i = 2; i <= a; i++) {
            IntermeiateResult *= i;
        }
        return IntermeiateResult;
    }

    console.log( FactDeg(IntArg) );

        let FactExp = function(x) {
        let IntermeiateResult = 1;
        for (let i = 2; i <= x; i++) {
            IntermeiateResult *= i;
        }
        return IntermeiateResult;
        }

       console.log( FactExp(IntArg) );

            let FactArrow = (z) => {
                let IntermeiateResult = 1;
                for (let i = 2; i <= z; i++) {
                    IntermeiateResult *= i;
                }
                return IntermeiateResult;
            }

       console.log( FactArrow(IntArg) )
            
}

// Задание 4    
// Используя Функции-«колбэки», создайте  функцию, 
// которая в качестве аргумента получает два числа:  
// стоимость покупки и сумму внесенную  в кассу. 
// А возвращает сумму сдачи с покупки или  сообщение “ Недостаточная сумма для оплаты ”

{
    let ParchaseAmount = +prompt("Введите сумму покупки");
    let PaymentAmount = +prompt("Введите сумму внесенную  в кассу");
    let sum = PaymentAmount - ParchaseAmount;
    
    function Payment(z) {
        
        if ( z >= 0)  Good(z);
        else Bad ();
    }
    function Good(x) {return console.log(`${x}`)}
    function Bad(y) {return console.log("Недостаточная сумма для оплаты")}
    console.log( Payment(sum));
}



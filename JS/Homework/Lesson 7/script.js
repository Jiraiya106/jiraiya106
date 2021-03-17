"use strict";
// Задание 1    
// Напишите функцию, которая принимает в качестве аргумента значение угла в градусах, 
// и возвращает  значение этого же угла в радианах. 
// (Нужно значение угла в градусах умножить на 3.14 и поделить на 180)

{
    let Deg = +prompt("Введите градусы");

    function showRadDec( ) { 
        return console.log(Deg*3.14/180);
    }

    showRadDec(Deg);

    let showRadExp = function() {
        return console.log(Deg*3.14/180);
    };

    showRadExp(Deg)
    
   let showRadArrow = () => console.log(Deg*3.14/180);

   showRadArrow(Deg);
}

// Задание 2    
// Напишите функцию,  которая принимает в качестве аргумента 
// два  натуральных числа  ( a и b) 
// и возвращает сумму всех чисел от  a до b

{
    let a = +prompt("Введите число");
    let b = +prompt("Введите число");

    function SumDec() {
        return console.log(a + b);
    }

    SumDec(a, b);

    let SumExp = function() {
        return console.log(a + b);
    };

    SumExp(a, b);

    let SumArrow = () => console.log(a + b);

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

    function FactDeg() {
        let IntermeiateResult = 1;
        for (let i = 2; i <= IntArg; i++) {
            IntermeiateResult *= i;
        }
        return IntermeiateResult;
    }

    console.log( FactDeg(IntArg) );

        let FactExp = function() {
        let IntermeiateResult = 1;
        for (let i = 2; i <= IntArg; i++) {
            IntermeiateResult *= i;
        }
        return IntermeiateResult;
        }

       console.log( FactExp(IntArg) );

            let FactArrow = () => {
                let IntermeiateResult = 1;
                for (let i = 2; i <= IntArg; i++) {
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
    
    function Payment() {
        
        if ( sum >= 0)  Good(sum);
        else Bad ();
    }
    function Good(sum) {return console.log(`${sum}`)}
    function Bad(sum) {return console.log("Недостаточная сумма для оплаты")}
    console.log( Payment(sum));
}



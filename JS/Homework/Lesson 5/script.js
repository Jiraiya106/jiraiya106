// Задание1.
// Написать цикл для вывода квадратов всех чисел от 1 до 9.
// В итоге вы должны получить такую картину:
// Квадрат 1 = 1
// Квадрат 2 = 4
// Квадрат 3 = 9
// Квадрат 4 = 16
// и т.д.

{
    let Square = 0;
    
    while (Square < 9) {
        console.log(Math.pow(Square,2));
        Square++
    }
}

// Задание2.
// Напишите скрипт, который запрашивает число n и выводит на экран n первых четных чисел. 
// Затем измените программу таким образом, чтобы числа кратные 5 не выводились на экран. 
// (Переход к следующей итерации: continue)

{
    let n = +prompt("Введите число");

    for(let i = 0; i < n; i += 2){
           if(i%5 == 0) continue;
        console.log(`${i}`)
    }
}

// Задание3.
// Напишите скрипт, который вычисляет сумму всех введенных пользователем чисел. 
// Когда пользователь прекратит вводить числа ( нажмет «Отмена») скрипт должен 
// вывести полученную сумму на экран. 
{
    let n, numberSum = 0;
    while (n = +prompt("Введите число")) {
    numberSum += n;
    }
    console.log (numberSum);
}
// Задание4.
// Написать скрипт, который запрашивает ввод натурального числа n и 
// выводит сумму всех чисел от 0 до n

{
    let n = +prompt("Введите натуральное число");
    let m = 0;

    for(let i = 0; i <= n; i++){
        m += i;
    };
    console.log(m);
}

// Задание 5
// Выведите все натуральные делители числа x в порядке возрастания 
// (включая 1 и само число).

{
    let n = +prompt("Введите число");

    for (let i = 1; i <= n;){
        if(n%i == 0){
        console.log(i);
        }
    }
}

// Задание 6
// Вывести на экран все двузначные числа сумма цифр которых делится на  введенное число n.

{
    let n = +prompt("Введите число");

    for(let i = 10; i < 100; i++){
        if((Math.trunc(i/10) + (i%10)) % n == 0){
            console.log(i)
        }
    }
}
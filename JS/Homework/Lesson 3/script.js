'use strict'
{
    let num = 1;
    num += 12;      
    num -= 14;
    num *= 5;
    num /= 7;
    num = ++num;
    num = num--;
    alert(num);
}

{
    let a = 17, b = 10;
    let c = a - b;
    let d = 7;
    let result = c + d;
    console.log(result); 
}

{
    let hour = prompt("Введите час"), minute = prompt("Введите минуты"), sec = prompt("Введите секунды");
    alert(`${hour}:${minute}:${sec}`);
}
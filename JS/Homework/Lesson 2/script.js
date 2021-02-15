"use strict"
{
    let admin;
    let name;
    name = "John";
    admin = name;
    console.log(admin);
}

{
    let name = window.prompt("Как тебя зовут?");
    window.confirm(`Тебя зовут ${name}?`)
}

{
    let $1 = 12.5;
    let $2 = 245;
    let $3 = "Hello";
    let $4 = undefined;
    let $5 = null;
    let $6 = true;
    let $7 = [1,5,7,12,3,'зн;ачение'];
    let $8 = {'Вася':'Имя'};
    let $9 = function() {};
    console.log(typeof $1, $2,$3,$4,$5,$6,$7,$8,$9);
    console.log(typeof $2);
}
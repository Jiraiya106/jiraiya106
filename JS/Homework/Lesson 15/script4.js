"use strict"

// Задание4 
// Откройте веб-страницу Задание4.HTML

// В таблице допущена ошибка. 
// Строка Петрова А.И…. вставлена в таблицу дважды.
// ( 3 и 4 строка). 
// Исправьте эту ошибку при помощи метода   node.remove()

// Вставьте в начале и в конце раздела  tbody  HTML код, 
// чтобы таблица приобрела вид в соответствии с образцом 
// на рисунке

// Залейте  добавленные вами ячейки жёлтым цветом, 
// добавив нужные стили.

let trList = document.querySelectorAll("tr");
let tbodyList = document.querySelector("tbody");

trList[3].remove();

let tbodyListClone = document.getElementById("violet").cloneNode(true);
tbodyList.append(tbodyListClone);

tbodyList.insertAdjacentElement("beforeend", tbodyListClone);

tbodyList.insertAdjacentHTML("afterbegin", "<tr id='start'><td></td><td colspan = 31>График дежурств сотрудников на август 2020</td></tr>");

document.getElementById("start").style.backgroundColor = "yellow";
let violetId = document.querySelectorAll("#violet")[1].style.backgroundColor = "yellow";
console.log(document.querySelectorAll("#violet"))
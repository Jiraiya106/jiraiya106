"use strict"

// Задание 1
// Откройте веб-страницу Задание1.HTML

// Напишите скрипт, который  выводит на экран внутренней 
// HTML код элемента  div и код элемента целиком.
// Дополните  скрипт, чтобы он изменил текст, добавив  
// к нему фразу «Простота — залог надежности»

console.log( document.body.textContent );
console.log( document.body.innerHTML );
console.log( document.body.innerHTML +="<b>Простота - залог здоров<b>" );

let div = document.querySelectorAll("div");

console.log( div )



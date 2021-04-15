"use strict"

// Задание 2

// Откройте веб-страницу Задание2.HTML

// Используя  DOM-свойство «hidden» , 
// сделайте, чтобы этот список не отображался на странице.

// Используя  querySelector и textContent,  
// выведите по отдельности:
// 1)Полнофункциональные языки
// 2)Перечень языков по отдельному признаку
// 3)Неполнофункциональные языки


document.getElementById("languages").hidden = true;
const arr = document.querySelectorAll("ol");
// arr.forEach((index) => console.log(arr[index].textContent))   можно ли сделать через forEach
for(let i = 1; i <= arr.length; i++){
    console.log(arr[i].textContent);
}
console.log(arr[1].parentElement.textContent);
// setTimeout( (...rest) => arr[rest].textContent, 1000 )     или через setTimeout
console.log(document.querySelectorAll("ol"))
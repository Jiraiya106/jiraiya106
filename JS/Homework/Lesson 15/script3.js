"use strict"

// Задание 3

// Откройте веб-страницу Задание3.HTML

// Для элемента  input  задайте значение 
// DOM -свойства  id = "button"

// Проверьте, создался ли при этом атрибут  id 

// Для элемента  input  задайте значение 
// DOM -свойства  value = "Жми"

// Проверьте, создался ли при этом атрибут  value 

// Выведите значение атрибута  maxlength

// Еще раз проверьте,  создался ли  атрибут  value 

// Измените значение атрибута type c text на  button

// Создайте атрибут 'onclick' со значением 
// 'alert("Привет!!!")'

// Кликните по элементу на веб-странице, 
// что бы удостоверится  в том,  что атрибут добавлен

// Удалите атрибут   maxlength

let setinput = document.querySelector("input");

setinput.setAttribute("id", "button")

console.log (setinput.hasAttribute("id") );

setinput.setAttribute("value", "Жми");

console.log(setinput.hasAttribute("value") );

console.log( setinput.getAttribute("maxlength") );

console.log( setinput.hasAttribute("value") );

setinput.setAttribute("type", "button");

setinput.setAttribute("onclick", "alert('Привет!')");

setinput.removeAttribute("maxlength");

const button3El = document.getElementById("3");

button3El.addEventListener("click", func3);


// Задание 3
// Откройте документ Задание3.html  
// Создайте и подключите к нему  файл  js
// Используя querySelectorAll  и  element.style.backgroundColor 
// измените  вид списка в соответствии с образцом на 

function func3() {
    let liHtml = document.querySelectorAll("li");

    liHtml[0].style.backgroundColor = "blue";
    liHtml[4].style.backgroundColor = "green";
    liHtml[8].style.backgroundColor = "yellow";
    liHtml[12].style.backgroundColor = "orange";
    console.log(liHtml)
}
const button2El = document.getElementById("2");

button2El.addEventListener("click", func2);


// Задание 2
// Откройте документ Задание2.html

// Создайте и подключите к нему  файл  js

// Измените фоновый цвет блока с идентификатором 
// first на красный.

// Измените фоновый цвет блока с идентификатором 
// second на  синий.

// Найдите все элементы с классом yellow.

// Для первого и последнего из них задайте  
// желтый цвет фона.

// Найдите все  элементы div на странице.

// Для четвертого div’a сделайте  зеленый фон.

function func2() {
    document.getElementById("first").style.backgroundColor = "red";
    document.getElementById("second").style.backgroundColor = "blue";
    document.getElementsByClassName("yellow")[0].style.backgroundColor = "yellow";
    document.getElementsByClassName("yellow")[2].style.backgroundColor = "yellow";
    document.getElementsByTagName("div")[3].style.backgroundColor = "green";
}


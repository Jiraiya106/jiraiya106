const button1El = document.getElementById("1");
const button2El = document.getElementById("2");
const button3El = document.getElementById("3");

button1El.addEventListener("click", func1);
button2El.addEventListener("click", func2);
// button3El.addEventListener("click", func3);

// Задание 1
// Создайте таблицу  из пяти строк и пяти столбцов.
// Сделайте цвет диагональных  ячеек красным. 
// ( element.style.backgroundColor = 'red';)

function func1() {
    const tabelem = document.querySelector("table");
    console.log(tabelem)

    for(let i = 0;i < tabelem.rows.length; i++) {
        tabelem.rows[i].cells[i].style.backgroundColor = "red";
        tabelem.rows[i].cells[tabelem.rows.length - i -1].style.backgroundColor = "red";
    }
}

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
    
}
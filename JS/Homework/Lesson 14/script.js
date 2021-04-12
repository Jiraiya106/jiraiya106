const button1El = document.getElementById("1");

button1El.addEventListener("click", func1);
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

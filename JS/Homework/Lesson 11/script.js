// "use strict"
const button1El = document.getElementById("1");
const button2El = document.getElementById("2");
const button3El = document.getElementById("3");
const button4El = document.getElementById("4");

button1El.addEventListener("click", func1);
button2El.addEventListener("click", func2);
button3El.addEventListener("click", func3);
button4El.addEventListener("click", func4);

// Задание 1
//  Выполните задание,  используя методы   
//  push, unshift, splice, slice, concat, forEach, indexOf 
 
// 1) Создайте массив fruits = ["Яблоко", "Апельсин", "Слива"];
// 2) Добавьте в конец массива  элемент «Абрикос» 
// 3) Добавьте в начало массива два элемента «Нектарин» и «Персик»
// 4) Удалите элементы «Яблоко» и «Апельсин»
// 5) Создайте еще один массив favoriteFruits. 
// 6) Скопируйте в новый массив три первых элемента из массива fruits.
// 7) Создайте еще один массив berries=[“Барабарис”, “Виноград”, “Годжи”]
// 8) Используя метод  concat, добавьте к массиву  
// fruits  все элементы массива berries
// 9) Выведите длину массива  fruits
// 10) Используя метод forEach,  выведите  название  индекс 
// каждого элемента массива favoriteFruits
// 11) Определите, какой индекс у элемента «Слива» и массива fruits и 
// содержится в этом массиве элемент «Яблоко»

function func1() {
    const fruits = ["Яблоко", "Апельсин", "Слива"];

    fruits.push("Абрикос");

    fruits.unshift("Нектарин", "Персик");

    fruits.splice(2,2);

    favoriteFruits = [];

    favoriteFruits = fruits.slice(0,3);

    berries = ["Барабарис", "Виноград", "Годжи"];

    fruits = fruits.concat(berries);

    console.log(fruits.length);

    favoriteFruits.forEach(function(item, index,array) {
        console.log(`Название: ${item} индекс: ${index} в массиве ${array}`);
    });

    console.log( `Индекс объекта: `, fruits.indexOf("Слива") );
    console.log( fruits.includes("Яблоко") );
    console.log(favoriteFruits);
}


// Задание 2 
// Выполните задание,  используя методы   
// find, findIndex, filter, map, sort, reverse, reduce  

// 1) Создайте массив Arr=[2, -15, 12, 83, -29, 111, -6, 22]
// 2) Найдите индекс трехзначного элемента
// 3) Найдите элемент кратный 5
// 4) Создайте новый массив, 
//     содержащий все положительные элементы  из массива Arr
// 5) Отсортируйте массив Arr по возрастанию.
// 6) Преобразуйте массив Arr , таким образом, 
//     чтобы отрицательные значения их элементов были заменены их модулями (Math.abs), 
//     а положительные умножены на 2
// 7) Отсортируйте массив Arr по убыванию.
// 8) Измените порядок элементов в Arr на обратный
// 9)Найдите произведение элементов массива. 
// 10)Вычислите среднее арифметическое элементов массива Arr. 

function func2() {

    let arr = [2, -15, 12, 83, -29, 111, -6, 22];

    const devHungreded = arr.find(function(item, index) {
        if ( item / 100 > 1) {
            return console.log(index);
        }

    })
    console.log(arr);

    const devFive = arr.filter( item => {
        if(item%5 == 0){
            return console.log(item);
        }    
    });
    console.log(arr);

    const arrayEven = arr.filter( item => item > 0 );
    console.log(arrayEven)
    
    arr = arr.sort( function(a,b) {
        if (a > b) return 1;
        if (a = b) return 0;
        if (a < b) return -1;
    });
    console.log(arr);
        
    arr = arr.map( function(item) {
        if (item > 0) return item * 2;
        if (item < 0) return Math.abs(item);
    });
    console.log(arr);

    arr = arr.sort( (a,b) => a - b );
    console.log(arr);

    arr.reverse();
    console.log(arr);

    let compositionItem = arr.reduce( (previousValue, item) => 
        previousValue *= item,1);
    console.log(compositionItem);
   
    let averageArray = arr.reduce ( (sum, item) => sum + item,1);
    console.log( averageArray/arr.length)
}


// Задание 3 
// Выполните задание,  используя методы split и join

// Напишите функцию, которая принимает в качестве аргумента любое предложение. 
// Разбивает его на отдельные слова. 
// Полученные строки (слова предложения) сортирует в порядке  возрастания. 
// И снова создает строку их этих слов( упорядоченных по возрастанию), 
// разделяя их пробелами.

function func3() {

    let sentence = prompt("Введите предложение");

    function word(x) { 
        let arr = x.split(" ").sort( (a,b) => a-b).join(" ");
        return arr           
    }
     console.log( word(sentence) );
}

// на Палиндром;

function func4() {
    
    const palindrom = prompt("Введите слово");

    function retPalindrom(str) {
        if(str == str.split("").reverse().join("")){
            console.log("Палиндром");
        } else  console.log("Нет");
    
    }
    retPalindrom(palindrom);
}
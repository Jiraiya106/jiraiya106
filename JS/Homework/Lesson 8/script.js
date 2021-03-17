"use strict";
// Задание 1

// a. Создайте объект person  с тремя свойствами (surname, name, middle name).  
// В качестве их значений используйте любые фамилию, имя и отчество.

// b. Добавьте  еще четыре свойства, 
// значениями которых являются  год рождения, профессия, должность и стаж.

// c. Создайте еще один объект, 
// свойствами  которого являются  фамилия, имя и год рождения из объекта person.

// d. Удалите свойство middle name из объекта person. 
// Проверьте, удалено это свойство или нет. 
// Если свойство middle name  из объекта person удалено, 
// выведите сообщение, что такого свойства нет, 
// в противном случае выедите его значение.

// e. Выведите на экран оставшееся количество свойств у объекта person.

// f. Выведите на экран количество свойств у объекта person, 
// значениями которых являются числа ( используйте функцию typeof() ).


// {
// const person = {
//     surname: "Ильин",
//     name: "Елисей",
//     middleName: "Валентинович",

// } 
//     let newPerson = Object.assign({}, person);

//     person.YearOfBirth = 1989;
//     person.Profession = "Программист";
//     person.Position = "Программист";
//     person.Experience = 10;

//     delete newPerson.middleName;
//     newPerson.YearOfBirth = 1989;
    
//     delete person.middleName;

//     if (person.middleName === undefined){
//         console.log("Нет такого свойства")
//     } else console.log(person.middleName);

//     console.log(person);

//     let counter = 0

//     for(let key in person){
//         counter++
//     }

//     console.log(`${counter}`) 
// }

// Задание 2
// a. Создайте объект salary в котором хранятся зарплаты 10 работников. 
// (Ключами являются их фамилии а значениями-размеры зарплат) 

// b. Создайте клон этого объекта.

// c. Вычислите среднюю  зарплату. 
// Добавьте в объект salary свойство, содержащее информацию о средней зарплате.

// d. Посчитайте сколько человек  получают зарплату не меньше средней.  
// Добавьте в объект salary свойство, содержащее эту информацию.

{
    const salary = {
        Ivanov1: 10,
        Ivanov2: 20,
        Ivanov3: 30,
        Ivanov4: 40,
        Ivanov5: 50,
        Ivanov6: 60,
        Ivanov7: 70,
        Ivanov8: 80,
        Ivanov9: 90,
        Ivanov10: 100,
    }

    const newSalary = {...salary}

    let summ = 0;
    for (let key in salary) {
        summ++;
    }

    
}
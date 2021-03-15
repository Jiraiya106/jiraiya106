// Задание 1 
// Функция принимает параметр - возраст пользователя. 
// Если число больше 16 – то выводим «добро пожаловать», если меньше – “вы еще молоды”.

{
    let userAge = +prompt("Введите возраст");

    function showWelcome (userAge){
        if (userAge > 16) {
            return console.log("добро пожаловать")
        } else return console.log("вы еще молоды")
    }


}
// Задание 1
// Написать функцию, которая принимает в качестве аргумента диагональ монитора в дюймах 
// и выводит результат  в сантиметрах с двумя знаками после запятой. (1дюйм=2,54 см).

{
    let inch = +prompt('Введите размер в дюймах');
    
    let santimm = (x) => Math.floor(((x *2.54) * 100)) / 100;

    console.log( santimm(inch) )
}

// Задание 2
// Написать функцию,  которая определяет, является введенное предложение 
// вопросительным, восклицательным или повествовательным. 

{
    let sentence = prompt("Введите предложение");

    let howSentence = (x) => {
        switch(true) {
            case x.endsWith("?"): console.log("Вопросительным"); break;
            case x.endsWith("!"): console.log("восклицательным"); break;
            case x.endsWith("."): console.log("повествовательным"); break;
            default: console.log("Предложение без знаков"); break;
        }
    } 

    howSentence(sentence);
}

// Задание 3
// Написать функцию, которая подсчитывает количество слов во введенной строке. 
// (Все слова разделены пробелами)

{
    let sentence = prompt("Введите предложение");
    let word = 1;

    for(let char of sentence){
        if (char == " " && sentence.endsWith(" ") != true){
            word++
        } 
    }

    console.log(word);
}

// Задание 4
// Написать функцию, которая принимает в качестве аргумента  строку, 
// в которой записана любая сумма в любой валюте, 
// и возвращает удвоенную сумму в этой же валюте 

{
    // №1
    let cashstring = prompt("Введите валюту");

    let cash = parseFloat(cashstring);

    let numberCash = String(cash).length;
        let numberWord = numberCash + 1;

    let doobleCash = 2 * cash;

    console.log( `${doobleCash}` + cashstring.slice(numberWord));

    // №2
    let numCash = "";
    let wordCash = "";
    for(let char of cashstring){
        if(char >= "0" && char <= "9"){
            numCash += char; 
        } else wordCash += char
    }

    let cashNumber = parseFloat(numCash);
    console.log(`${2 * cashNumber}` + wordCash);
}

// Задание 5
// Написать функцию, которая проверяет может ли введенная строка быть адресом электронной почты. 
// Если нет, то выводится сообщение о  том, что адрес электронной почты имеет 
// некорректный формат. В противном случае выводит доменное имя сервера, 
// на котором зарегистрирован электронный почтовый ящик. 


{
    let num = prompt("Введите E-mail")

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    if ( validateEmail(num) == true){
        let numberChar = num.indexOf("@");
        // for(let char of num){
        //     if (char == "@"){
        //         break;
        //     } else numberChar ++
        // } 
        console.log(num.slice(numberChar + 1));
    } else console.log("Адрес электронной почты имеет некорректный формат");
}

// Задание 6. 
// Написать функцию, проверяющую переданное в нее слово на “палиндром” 
// (слово, одинаково читающееся в обоих направлениях.)  
// И выводить true либо false.

{
    let palindrom = prompt("Введите слово")
    
    function fastestIsPalindrome(str) {
        var len = Math.floor(str.length / 2);
        for (var i = 0; i < len; i++)
          if (str[i] !== str[str.length - i - 1])
            return false;
        return true;
      }
    
    console.log( fastestIsPalindrome(palindrom) );
}
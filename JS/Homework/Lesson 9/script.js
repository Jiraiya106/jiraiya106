"use strict"
// Задание 1 
// a. Создайте объект square, c двумя свойствами width и height  (ширина и высота прямоугольника) 

// b. Для объекта square  создайте метод  area, который вычисляет площадь прямоугольника.

// c. Для объекта square  создайте метод perimetr,  который вычисляет периметр прямоугольника.

// {
//     function Square (x,y) {
//         this.width = x;
//         this.height = y;
//         this.area = () => console.log( this.width * this.height );
//         this.perimetr = () => console.log( 2 * (this.width + this.height) ); 
//     }
        // let a = +prompt("Введите ширину");
        // let b = +prompt("Введите высоту")
//     let square = new Square();

//     square.area(a,b);
//     square.perimetr(a,b);
// }

// Задание 2 
// Напишите функцию - конструктор, которая создает объект, 
// свойствами которого являются  марка автомобиля, объем двигателя и год выпуска.

// {
//     function Car(x,z,y) {
//         this.model = x;
//         this.volume = z;
//         this.year = y;
//     }
// }

// Задание 3 

// a. Напишите функцию - конструктор, которая создает объект, 
// свойствами которого являются радиус сектора и 
// градусная мера соответствующего ему центрального угла. 
// Значения свойств берутся из аргументов функции - конструктора.

// b. Измените функцию-конструктор так, чтобы она  добавляла  к этому объекту метод ,  
// который , вычисляющий  площадь сектора. 
// (Прощадь сектора можно найти по формуле S=3.14*R2*α/360,где R-радиус окружности, 
// а α- градусная мера соответствующего центрального угла ) 

{
    function Circle(x,z) {
        this.radiusCircle = x;
        this.degCircle = z;
        this.areaSectorCircle = () => Math.PI * Math.pow(this.radiusCircle,2) * this.degCircle / 360;
    }

    let circle2 = {
        radiusCircle: 2,
        degCircle: 3,
    }

    let radius = +prompt("Введите радиус");
    let deg = +prompt("Введите градусную меру");
    
    let circle1 = new Circle(radius, deg);

    console.log(circle1.areaSectorCircle());
    console.log(circle1.areaSectorCircle.call(circle2));
    
}

// Задание 4

// a. Создайте объект salary в котором хранятся зарплаты нескольких работников 
// (Количество работников может изменяться). Ключами являются их фамилии, 
// а значениями-размеры зарплат.

// b. Для объекта salary  создайте метод, который вычисляет среднюю зарплату. 

// c. Для объекта salary   создайте метод, который находит минимальную зарплату.

// d. Для объекта salary   создайте метод, который находит максимальную  зарплату.

{
    const salary = {
        Ivanov1: 10,
        Ivanov2: 20,
        Ivanov3: 30,
        Ivanov4: 40,
        Ivanov5: 50,
    }

    salary.medium = () => {
        let summ = 0;
        let number = 0;
        for(let key in salary) {
            summ += salary[key];
            number++;
        }
        return summ/number;
    }

    salary.min = () => {
        let minCash = Infinity;
        for(let key in salary) {
            if(salary[key] < minCash) {
                minCash = salary[key];
            };
        }
        return minCash;
    }

    salary.max = () => {
        let maxCash = 0;
        for(let key in salary) {
            if(salary[key] > maxCash) {
                maxCash = salary[key];
            };
        }
        return maxCash;
    }
}


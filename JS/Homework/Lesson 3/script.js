'use strict'
{
    let num = 1;
    num += 12;      
    num -= 14;
    num *= 5;
    num /= 7;
    num = ++num;
    num = num--;
    alert(num);
}

{
    let a = 17, b = 10;
    let c = a - b;
    let d = 7;
    let result = c + d;
    console.log(result); 
}

{
    let hour = prompt("Введите час"), minute = prompt("Введите минуты"), sec = prompt("Введите секунды");
    alert(`${hour}:${minute}:${sec}`);
}
{
   let NumbOfPicA = (1024-40)/4;
   alert(NumbOfPicA);
}
{   
   let LenghtOfThePicture = +prompt("Введите ширину каждого изображения");
   let NumberOfPictureAll = +prompt("Введите сколько  изображений в галерее");
   let NumbetOfPictureInLine = Math.trunc(1024/(LenghtOfThePicture+10));
   let NumberOfRows = Math.ceil(NumberOfPictureAll/NumbetOfPictureInLine);
   let NumberInTheLastRow = NumberOfPictureAll%NumbetOfPictureInLine;
   alert(`Количество изображений в каждом ряду =${NumbetOfPictureInLine}, Количество полных рядов = ${NumberOfRows},  Количество изображений в последнем ряду= ${NumberInTheLastRow}`);
}

{
    let  a=0, b=null, c=undefined, d="Привет";
    let hello = a || b || c || d;
    alert(`${hello}`);
}

{
    let  a=0, b=null, c=undefined, d="Привет";
    let hello = a && b && c && d;
    alert(`${hello}`);
}

{
    let  a=0, b=null, c=undefined, d="Привет";
    let hello = a <= b == c != d;
    alert(`${hello}`);
}

{
    let  a=0, b=null, c=undefined, d="Привет";
    let hello = a = b === c == d;
    alert(`${hello}`);
}

"use strict";
// const result = confirm("Are u here?");
// // console.log(result);

// // let ans = prompt("сколько тебе лет?", "20");
// // console.log(ans + 5);

// const answers = [];

// answers[0] = prompt("как тебя зовут?", "");
// answers[1] = prompt("твоя фамилия? ", "");
// answers[2] = prompt("сколько тебе лет? ", "");

// console.log(typeof(answers));

// const user = "ilya";

// alert(`привет, ${user}`);

// let incr = 10,
//     decr = 10;

// console.log(incr++);
// console.log(decr--);

// const isCheked = true,
//       isClose = true;

// console.log(isCheked && isClose);


// const num = 50;

// switch (num) {
//     case 51:
//             console.log('верно');
//             break;
//     case 49:
//         console.log('неверно');
//         break;
//     case 100:
//         console.log('неверно');
//         break;
//     default:
//         console.log('не в этот раз');
//         break;
// }

// let num = 50;

// while (num <= 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++
// }
// while (num < 55);

// for (let i = 1; i < 10; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }

let num 

function showFirstMessage(text) {
    console.log(text);
    num = 20
}

showFirstMessage('Helloy world');
console.log(num);
// //
// function calc(a, b) {
//     return (a + b);
// }                                     возвращение значения наружу 

// console.log(calc(10, 6));
//
function ret() {
    let num = 50;

    return num
}

const anotherNum = ret();
console.log(anotherNum);
//
const logger = function() {
    console.log("hello")
};

logger();
//
const calc = (a, b) => {
    console.log("1");
};
//
                                //Методы и Сво-ва строк и чисел
const str = "teXt",
      arr = [1, 2, 3];


console.log(str.toLowerCase());
console.log(str);

//
const fruit = "Some fruit";

console.log(fruit.indexOf("f"));
//

const log = "меня зовут илья";
  console.log(log.slice(11, 14));    //аргументы start end

console.log(log.substring(11, 14));

console.log(log.substr(11, 3));  //start и длинна вырезки
//

const num = 12.2;
console.log(Math.round(num));  //округление
//
const test = "12.2px";

//console.log(parseInt(test));  // превращает в числовой тип данных
console.log(parseFloat(test));


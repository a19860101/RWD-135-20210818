/* 
    運算子
*/

//算術運算子
let a = 10;
let b = 3;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);//求餘數

//比較運算子

console.log(a > b);
console.log(a >= b);
console.log(a < b);
console.log(a <= b);
console.log(a == b);
console.log(a === b);//值與資料型態皆須相同

let x = 10;
let y = '10';
console.log(x == y);
console.log(x === y);

console.log(a != b);

//指定運算子

// console.log(a += b);//a = a + b = 13
// console.log(a -= b);//a = a - b = 10
// console.log(a *= b);//a = a * b = 30
// console.log(a /= b);//a = a / b = 10
// console.log(a %= b);//a = a % b = 1

//邏輯運算子 and,or,not
console.log(a > 0 && b > 0);
console.log(a > 0 && b < 0);
console.log(a > 0 || b < 0);

let i = 12;
console.log(!i);

// 三元運算子

let result = a < 0 ? '成立':'不成立';
console.log(result);

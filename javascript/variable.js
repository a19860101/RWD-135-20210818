//變數

//var
/* 
    變數命名規則
    大小寫有別
    不可數字與符號開頭，除了底線_與$
    不可使用其他符號

*/

var a = 10;

var a = 999;
var a = 'hello';
console.log('a:',a);


//let
let x = 99;
x = 0;
console.log('x:',x);

/*  
    let vs var 
    let 不可重複宣告
    範疇(scope)不同，var是function scope,let是block scope
*/

//const 常數constant variable
const i = 0;
// i = i + 1;
//const與let特性相同，並且不可重新賦值
console.log('i:',i);

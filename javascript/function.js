
//函式陳述式
console.log(f1());
function f1(){
    let str = 'this is funcion one';
    return str;
}

//函式表達式 (提升性 hoisting)
const f2 = function(){
    let str = 'this is function two';
    return str;
}
console.log(f2());


//參數

function f3(x){
    return x*x;
}

console.log(f3(11));

function f4(x,y){
    return x * y;
}

console.log(f4(10,8));

//箭頭函式

// const foo = function(){
//     return 'hello';
// }

const foo = () => {
    return 'hello';
}
console.log(foo());

//一個參數 -> 小括號可省略

const foo2 = x => {
    return x;
}
console.log(foo2(1123))

//多個參數 -> 小括號不可省略

const foo3 = (x,y) => {
    return x + y;
}
console.log(foo3(2,4));

//如果後方只有return -> 大括號與return 可省略

const foo4 = (x,y) => x + y;

console.log(foo4(9,8));

const foo5 = x => x*x;
console.log(foo5(11));

// 一般函式與箭頭函式差別

const foo6 = function(){
    return this;
}
console.log(foo6());

const foo7 = () => {
    return this
}
console.log(foo7());

const obj = {
    foo:function(){
        return this;
    }
}
console.log(obj.foo());


const obj2 = {
    foo:()=>{
        return this;
    }
}
console.log(obj2.foo());






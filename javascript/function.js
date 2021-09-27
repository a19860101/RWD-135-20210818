
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




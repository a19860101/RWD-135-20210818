// let a = new Array();
// a[0] = 'Apple';
// a[1] = 'Banana';
// a[2] = 'Cat';

// let a = new Array('Apple','Banana','Cat');

let a = ['Apple','Banana','Cat','Dog','egg'];


// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

//陣列迭代
// console.log(a.length);

for(let i=0;i<a.length;i++){
    console.log('for',a[i])
}

// for...of
for(data of a){
    console.log('of',data);
}

// for...in
for(data in a){
    console.log('in',a[data]);
}

//let vs const

let x = [1,2,3,4];
x = ['a','b','c'];
console.log(x);

const y = [1,2,3,4];
y.pop();
y.push(5);
console.log(y);
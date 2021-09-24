// let a = new Array();
// a[0] = 'Apple';
// a[1] = 'Banana';
// a[2] = 'Cat';

// let a = new Array('Apple','Banana','Cat');

let a = ['Apple','Banana','Cat'];


// console.log(a);
// console.log(a[0]);
// console.log(a[1]);
// console.log(a[2]);

//陣列迭代
for(let i=0;i<3;i++){
    console.log(a[i])
}

// for...of
for(data of a){
    console.log(data);
}

// for...in
for(data in a){
    console.log(a[data]);
}
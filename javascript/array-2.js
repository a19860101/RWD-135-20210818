const drinks = ['紅茶','綠茶','奶茶','拿鐵'];

//forEach
drinks.forEach(function(data,idx){
    console.log(data,idx);
})

//map
const scores = [56,72,82,40,90,68];
const scores_map = scores.map(function(data){
    if(data >= 60){
        return '及格';
    }else{
        return '不及格';
    }
})
console.log(scores_map);

//filter

const scores_filter = scores.filter(function(data){
    // return data < 60;
    return data != 68;
})
console.log(scores_filter);

//reduce
const scores_reduce = scores.reduce(function(a,b){
    console.log(a);
    console.log(b);
    return a+b;
})
console.log(scores_reduce);

//concat
// const test = drinks.concat(scores);
// const test = scores.concat(drinks);
// console.log(test);

// spread operator
// const test = [...scores,...drinks];
const test = [...drinks,'hello',...scores,'hello'];
console.log(test);

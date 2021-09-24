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
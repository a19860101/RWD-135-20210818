//if
let x = 0;

if(x > 0){
    console.log('a: success');
}

//if...else

if(x > 0){
    console.log('b: success');
}else{
    console.log('b: error');
}

// if...else if
if(x > 10){
    console.log('A');
}else if(x > 6){
    console.log('B')
}else if(x > 2){
    console.log('C');
}

//if...else if...else
if(x > 10){
    console.log('A');
}else if(x > 6){
    console.log('B')
}else if(x > 2){
    console.log('C');
}else{
    console.log('不及格');
}

//switch
switch(x){
    case 0:
        console.log(0);
        break;
    case 10:
        console.log(10);
        break;
    case 100:
        console.log(100);
        break;
    default:
        console.log('Default');
}

switch(true){
    case x>0:
        console.log('正數');
        break;
    case x<0:
        console.log('負數');
        break;
    default:
        console.log('error');
}
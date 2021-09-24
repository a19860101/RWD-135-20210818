// const user = new Object();
// user.name = 'John';
// user.age = 20;
// user.mail = 'john@gmail.com';

const user = {
    name: 'John',
    age: 20,
    mail: 'john@gmail.com'
}

console.log(user);
console.log(user.name);
console.log(user.age);
console.log(user.mail);

const users = [
    {
        id: 1,
        name: 'john',
        mail: 'john@gmail.com',
        gender: 'male'
    },{
        id:2,
        name:'Mary',
        mail:'maryyyy@gmail.com',
        gender:'female'
    },{
        id:3,
        name:'Max',
        mail:'xxx@gmail.com',
        gender:'male'
    }
];
// console.log(users);
// users.forEach(function(user){
//     console.log(user.id);
//     console.log(user.name);
//     console.log(user.mail);
// })
const userName = users.map(function(user){
    return user.name;
})
console.log(userName);
const male = users.filter(function(user){
    return user.gender == 'male';
});
console.log(male);
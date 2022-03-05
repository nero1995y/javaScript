//'use strict';
// Objects
// one of the JavaScript's data types.
// a collection of related data and/or functionality.
// Nearly all objects in JavaScript are instances of Object 
// object = {key: value}

// 1. Literals and properties
console.log('=======bed========');
const names =  'ellie';
const age = 4;
print(names, age);

function print(names, age){
    console.log(names);
    console.log(age);
}


const obj1 = {};            //'Object literal' syntax
const obj2 = new Object();  //'object constructor' syntax
// 자바 스크립트는 클래스없이 괄호만 열어서 오브젝트로 만들 수 있다. 

function printObject(person) {
    console.log(names);
    console.log(age);
}

const ellie = {names: 'ellie', age: 4}; //key value 이다 즉 오브젝트는 집합체이다.
printObject(ellie);


//bed code
ellie.hasJob = true;
console.log(ellie.hasJob);

delete ellie.hasJob;
console.log(ellie.hasJob);

// 2. Computed peroperties 닷으로 접근가능 배열로 접근가능
// key shoild be alway String
// 뭘써야할까? 런타입에서 결정할때 쓴다. 
// 코딩할때는 닷찍어서 실시간이면 컴퓨터 르로펄티스
console.log(ellie.names);
console.log(ellie['names']);
ellie['hasJob'] = true;
console.log(ellie.hasJob);

function printVlaue(obj, key){
    //console.log(obj.key);
    console.log(obj[key]);
}

printVlaue(ellie, 'names');
printVlaue(ellie, 'age');


// 3. Property value shorthand
// 일일이 만들기가 번거러울떄 
const person1 = {user: 'bob', age: 2};
const person2 = {user: 'steve', age: 3};
const person3 = {user: 'dave', age: 4};
const person4 = new Person('elile', 30)

//4. Constructor Function
// 오브젝트 함수는 대문자로 ! 
function Person(user, age) {
    //this = {};
    this.user = user;
    this.age = age;
    //return this;     
}

// 5. in operator: property existence ckeck (key in obj)
// key 를 찾는거 
console.log('names' in ellie);
console.clear();

//6. for.. in vs for.. of
for (key in ellie){
    console.log(key);
    
}

// for(value of iterable)
const array = [1,2,3,4,5];

for (value of array){
    console.log(value);
}
// 7. Fun cloning
// Object.assign(dest, [obj, obj2, obj3...])
// user2에도 동일한 레퍼런스가잇고 엘리를 가르킨다.
const user = { names: 'ellie', age: '20'};
const user2 = user;
user.names = 'coder';
console.log(user);

// old way 변경후 값을 복사 !
// key 를 빙글빙글 돌면서  
const user3 = {};
for (key in user){
    user3[key] = user[key];
}

console.log(user3);

// new way
// 
//const user4 = {};
//Object.assign(user4, user);
const user4 = Object.assign({}, user);

console.log(user4)

// another example
// 마지막것이 덮어 씌운다. 
const fruit1 = {color: 'red'}
const fruit2 = {color: 'blue', size: 'big'};
const mixed = Object.assign({}, fruit1, fruit2);
console.log(mixed.color);
console.log(mixed.size);


'use strict';

// Array 🎉

// 1. Declaration 선언
const arr1 = new Array();
const arr2 = [1, 2];

//2. Index position
const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]); //key index 
console.log(fruits[1]); //key index 
console.log(fruits[fruits.length - 1]); //last index 

// 3. Looping over an array
// print all fruits 
console.log('==3==');
// a. for

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
// b. for of
for(let fruit of fruits ){
    console.log(fruit);
    
}
// c. forEach

//forEach(callbackfn: (value: T, index: number, array: readonly T[]) => void, thisArg?: any): void;
// 2가지 파라미터전달되는데 콜백함수를 밸류 하나하나 호출해주고 ?ㅌ 전단해도되고 안해도되고 
// 3가자인자가 들어온다. vlaue , index , arraay 전체 인덱스
fruits.forEach(function(fruit, index, array){
    console.log(fruit, index, array);
});

fruits.forEach((e) => console.log(e));

// 4.Addtion, deletion, copy
// add an item to the end
fruits.push('🍓','🍑');
console.log(fruits);

// pop: remove an item from the end 
fruits.pop();
fruits.pop();
console.log(fruits);

//unshift: add an item to the bennigging
//앞에것이 삭제되는것 
fruits.unshift('🍓','🍋');
console.log(fruits);

//shift: remove an item to the bennigging
fruits.shift();
fruits.shift('🍋');
console.log(fruits);

// note!! shift,  unshift are slower than pop, push 
//느리다.
/*
  배열에 길이가 길수록 많이 움직여서
*/
// splice: remove an item by index position
fruits.push('🍓','🍑','🍋');
console.log(fruits);
fruits.splice(1, 1); // 끝까지 지정안하면
console.log(fruits);

fruits.splice(1, 1, '🍉','🍏'); // 끝까지 지정안하면
console.log(fruits);

// combine two arrays 
// 합치기임 ! 
const fruits2 = ['🍐','🥥'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

// 5. Searching
// find the indext

console.log(fruits);
console.log(fruits.indexOf('🍉'));
console.log(fruits.indexOf('🍓'));

// includes
console.log(fruits.includes('🍉'));
console.log(fruits.includes('dd'));

//lastIndexof
console.clear();
fruits.push('🍎');
console.log(fruits);
console.log(fruits);
console.log(fruits.lastIndexOf('🍎'));

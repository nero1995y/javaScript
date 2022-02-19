// 1. String concatenation
console.log('my' + 'cat');  
console.log('1'+ 2);
console.log(`string literals: 
"""'

1 + 2 = ${1+2}`); //$ 사인

console.log("sims \'s book "); // \싱글쿼터

//2. Numeric operators
console.log(1+1);
console.log(1-1);
console.log(1/1);
console.log(1*1);
console.log(2**3); //exponentiation 

// 3. Incremnet and decrement operators 증감 연산자
let counter = 2;
const preIncrement = ++counter;

//counter = counter +1;
//preIncrement = counter;
console.log(`counter: ${counter} preIncrement: ${preIncrement}`);

const postIncrement = counter++; // postIncrement 뒤로쓰면 먼저 할당후 카운팅
//counter =counter +1;

console.log(`postIncrement: ${postIncrement} counter ${counter}`);

//4. Assingment operators 할당 연산자
let x = 3;
let y = 6;
x += y;  //x= x+y;
x -= y; //
x *= y;
x /= y;

//5. Comparison operates 비교 연산자
console.log(10 < 6);  //less than
console.log(10 <= 6); // less than or equal
console.log(10 > 6);  // greater than
console.log(10 >= 6); // greater than or equal

//6. Logical operaters: || or, && and, ! not

const value1 = false;
const value2 = 4 < 2; //false;

// || or , finds the first truthy value 앞에서 트루가 나오면 바로 멈춰버린다. 게임끝났어 !
// 연산을 헤비한 연산은 뒤에다 주는것이 좋아용 ~ 함수같은 호출 
console.log(`or: ${value1 || value2 || check()}`);

// && and , finds the first falsy value
//앞에 펄스면 바로 반환 
// often used to compress long if-statement
// nullableObject && nullableObect.someting  널이 아닐때만 섬띵이라는 벨류 를 받아 널체 크할때 편함 

console.log(`and: ${value1 && value2 && check()}`);

// if(nullableObject != null){
//     nullableObject.someting;
// }

function check() {
    for (let i = 0; i < 10; i++) {
        console.log('😱');      
    }
    return true;
}

// ! (not )
console.log("not: "+ !value1);

//7. Equlity
const stringFive = '5';
const numberFive = 5;

// == loose equlity with type convervion 타입을 바꿔서 검사합니다. 
console.log('loose equlity===========')
console.log(stringFive == numberFive);
console.log(stringFive != numberFive);

// === strict equlity, no type conversion 타입을 신경써서 검사합니다. **왠만하면 이렇게 검사하는게 낫다.*
console.log('strict equlity===========')
console.log(stringFive === numberFive);
console.log(stringFive !== numberFive);

// object equality by reference
const sims1 = {names: 'sims'}; //다른 레퍼런스
const sims2 = {names: 'sims'}; //다른
const sims3 = sims1;  //같은 레퍼런스

console.log('object equality by reference')
console.log(sims1 == sims2);
console.log(sims1 === sims2);
console.log(sims1 === sims3);

//equality - puzzler
console.log('=============');

console.log(0 == false); //ture
console.log(0 === false); // 불리언타입이 아니라서 
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);  //다른타입이라서 

//프로그래밍의 꽃 루프
//8. Conditional operators: if
const nameCon = 'sims';

if(nameCon == 'sims'){
  console.log('Welcome, sims');
    
} else if(nameCon === 'coder'){
  console.log('You are amazing coder');
    
} else{
  console.log('unkwon');

}

// 9.  Ternary operator: ?      //삼항연산자
// condition ? value : value?;
// 간단할때만 사용하는것이 좋다
console.log(nameCon === 'sims'? 'yes': 'no');

// 10. Swith statemnet 
// use for multiple if checks
// use for enum-like value check
// use for multiple type checks in Ts
const browser = 'IE';

switch(browser){
    case 'IE':
        console.log('go away!');
        break;
    case 'Chrome':
    case 'Firefox':
        console.log('love you');
        break;
    default:
        console.log('same all!');
        break;
}

//11. loops
// while loop, whule the condition is truthy,
// body codes is executed.
let i = 3;
while(i > 0){ // 조건이 해당할때 까지 
    console.log(`while: ${i}`);
    i --;
}
//do while loop, body code is executed first, 
//then check the condition. 
//블럭을 먼저 실행하고싶으면 do 아니면 노말 와일
do{
  console.log(`do while: ${i}`);  //코드블럭 먼저 실행되고
  i--;
} while (i>0);

//for loop, for(begin; condition; step)
for ( i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}

// 코드안에서 변서 순언하는 inline varilable declaration
for (let i = 3; i > 0; i--) {
    console.log(`for: ${i}`);
}
// nested loops
for (let i = 0; i < 10; i++) {
    for(let j = 0; j < 10; j++ ){
        console.log(`i: ${i}, j: ${j}`);
    }
        
}

//break , continue
// brack 는 루프를 빠져나옴
// 컨티뉴는 지금꺼만 스킵 
// Q1, iterate from 0 to an print only even nubers (use continue)
for (let i = 0; i < 11; i++) {
  if((i % 2) !== 0 ){
      continue;
  }   
  console.log(`q1${i}`);           
}

// Q2, iterate from 0 to 10 and pirnt nubers until reaching 8 user break;

for (let i = 0; i < 10; i++) {
  
    if(i > 8){
        break;
    
    }              
    console.log(i); 
}
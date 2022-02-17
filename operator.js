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
const sims1 = {names: 'sims'};
const sims2 = {names: 'sims'};
const sims3 = sims1;

console.log('object equality by reference')
console.log(sims1 == sims2);
console.log(sims1 === sims2);
console.log(sims1 === sims3);

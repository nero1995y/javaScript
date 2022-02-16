'use strict';

// boolean
// false: 0, null, undefind, NaN, ''
// true: any other value
const canRead = true;
const test = 3 < 1; //false 이런것들도 평가되어 선언가능

console.log(`value: ${ canRead} , type: ${typeof canRead}`);
console.log(`value: ${ test} , type: ${typeof test}`);


//null 비어 있을때 텅텅 할때 
let noting = null;
console.log(`value: ${noting} , type: ${typeof noting}`);

//undefind 선언은 되었으나 텅텅 
let x; 
console.log(`value: ${x} , type: ${typeof x}`);

// symbol , create unique identifiers for objects  고유한 식별자가 필요할때 씀
// 동일한 심볼은 만들었으나 두개는 다르다.
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');

console.log(symbol1 === symbol2); //false

const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');

console.log(gSymbol1 === gSymbol2) //true 주어진 문자열에 똑같은 
console.log(`value ${symbol1.description}, type: ${typeof symbol2}`); // 이렇게 바로 꺼내면 오류가난다.  description 으로 문자열 바꿔서 출력하셈

// 5. Dynamin typing : dynamically typed languge 
// 변수를 선언할때  런타입시 검사 할 수 잇다. 프로토 타입할때는 편하나, 규모있는 프로젝트는  단점이 된다. 
let text = 'hello';
console.log(text.charAt(0))
console.log(`value ${text}, type: ${typeof text}`);

text = 1;
console.log(`value ${text}, type: ${typeof text}`);

text = '7' + 5;
console.log(`value ${text}, type: ${typeof text}`);

text = '8' / '2'; 
console.log(`value ${text}, type: ${typeof text}`);
//console.log(text.charAt(0)) //에러남 문자열을 숫자로 바꿀때
// > 그래서 타입스크립트가 나옴  타입스크립트는 트랜스 컴파일러를 이용해서 봐야하기때문에 자바스크립트 먼저 ㄱㄱ 

// object , real-life object , data structure
const sim = { names: 'sim', age: 21};
sim.age =21; //변경가능 안에있는것 

//playground  확인하면서 노는것이당 ! 
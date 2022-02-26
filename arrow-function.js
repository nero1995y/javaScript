'use strict';

//Function
// - fundamental building block in the program  프로그램의 기본 빌딩 블록
// - subprogram can be userd multipe times      서브 프로그램은 여러번 사용 할 수 있다.
// - performs a task or calculate a value       작업을 수행하거나 값을 계산합니다.

//1. Function declaration                               함수 선언
//function name(param1, param2) { body... return;}
// one function == one thing                            하나의 함수는 한가지 일만 하도록 해야 한다. 
// naming: doSomething, command, verb                   무언가를 동작하는 커맨드 형태로 동사로 정해야 한다. 이름이 애매하면 여러가지 기능하는 코드인지 살펴보라 
// e.g. createCardAndPoint -> createCard, cratePoint    
// function is object in JS                             js에서는 함수는 오브젝트다 
function printHello() {
    console.log('Hello');
}

printHello();

// 이런식으로 더 많은 기능하게 만드셈 타입이 없어서 함수자체에 String number 인지 모름
function log(messeage){
    console.log(messeage);
}

log('hello-messeage');
log(1234);

// function log(messeage: string) : number{
//     console.log(messeage);
//    return 0;
// }
//TS

// 2. Paremters                             매개변수 
// premitive parameters: passed by value    기본 매개변수 : 값으로 전달
// object parmeters: passed by refernce     객체 매개변수 : 참조값으로 전달 메모리에 레퍼런스를 전달

function changeName(obj){
    obj.username = 'coder';
}

const sims = {username: 'sims'};   // 오브젝트가 만들어진 레퍼런스가 만들어지고 이 오브젝트는 메모리 어딘가에 저장됨 
changeName(sims);                   // 함수안에서 오브젝트 값을 변경하면 변경이 가능쓰 
console.log(sims);

//3. Default parameters (added in ES6) 
//인자를 하나만 전달한다면 언디파인드로 출력됩니다. 
function showMessage(message , from = 'unknown'){
    console.log(`${message} by ${from}`);
}
showMessage('Hi!');

// 4. Rest parameters (added in ES6)
// ... 배열형태로 전달하게 된다. 인자를 3개를 전달하면 배열형태로 전달되어 진다. 
function printAll(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }

  args.forEach((arg) => console.log(arg));
}

printAll('dream', 'coding', 'ellie');

// 5. Local scope 밖에서는 안이 보이지 않고 안에서만 밖을 볼 수 있다. 
// 블럭안에 변수 안에 선언하면 지역 변수 안에서만 가능 
console.log('====================5.local scope======')

let globalMessage = 'global'; // global variable
function printMessage(){
  let message = 'hello';
  console.log(message);  //local variable
  console.log(globalMessage);

  
}

printMessage();


//6. Return a value // return이 없는 함수는 return undefind; 들어 있다. 생략이 가능하다 .
function sum (a, b){
  return a + b;
}
const result = sum(1, 2);
console.log(`sum: ${sum(1,2)}`);

//7. ⭐️⭐️⭐️⭐️⭐️⭐️ Early return, early exit 조기 리턴, 조기 퇴장
//bad
function upgradeUser(user){
  if(user.point > 10 ){
    // long upgrade logic....
  }
}

//good  // 빨리 리턴하고 로직상성하는게 좋당 ! 

function upgradeUser(user){
  if (user.point <= 10) {
    return;
  }
// long upgrade logic....
  
}

// Frist-class function                                                           Frist 클래스 함수
// functions are treted like any other variable.                                  함수는 다른 변수처럼 처리됩니다.
// can be assigned as a value to variable.                                        변수에 값으로 할당할 수 있습니다.
// can be passed as an argument to other functions.                               다른 함수에 인수로 전달할 수 있습니다.
// can be returned by another function                                            다른 함수에서 반환될수 있음 

// 펑션은 변수처럼 된다

// 1. Function expression                                                         1.함수 표현
// a function declaration can be called earlier than it is defiend. (hoisted)     함수 선언은 정의된 것보다 먼저 호출될 수 있습니다.
// a function experssion is created when the execution reaches it.                실행이 도달하면 함수 확장이 생성됩니다.
// 차이는 호이스티 되나 안되나 차이 
console.log('=====exp');

const print = function () {      //선언과 동시에 할당  anonymous function 이름없는 함수
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

/*
  2. Call back function using function expression
  함수 상황에 2가지 파라미터로 전달되어서 콜백하게된다.
*/
function randomQuiz(answer, printYes, printNo){
  if(answer === 'love you'){
    printYes();
  }else{
    printNo();
  }
}

//anonymous function
const printYes = function(){
  console.log('yes!');
}

// named function
// better debugging in debugger's stack traces  익스프레스에스에서 쓸때는 디버깅할때 쓰기위함
// recursions 무한대 함수 호출

const printNo = function print(){
  console.log('no!');
  
}

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

// Arrow function
// always anonymous 
// const simplePrint = function(){
//   console.log('simplePrin');

// };

const simplePrint = () => console.log('simplePrint');
const add = (a, b) => a + b;
const simpleMultiply = (a, b) => {
  // do something more
  return a * b;
};

// IIFE Immediately Invked Function Expression 즉시 호출된 함수 표현식
(function hello(){
  console.log('IIFE');
})();

// quiz
// functuon calcultae(command, a,b);
// command: add, substract , divide, multiply, remainder

function calculate(command, a, b){

  let result;

  if(command === 'add' ){
    result = a + b;
  }else if(command === 'substract'){
    
    result = a - b;

  }else if(command === 'divide'){

    result = a / b;
  
  }else if(command === 'multiply'){

    result = a * b;
  
  }else if(command === 'remainder'){

    result = a % b;
  }

  return result;
}
console.log('test');
console.log(calculate('multiply', 1 ,2));
 
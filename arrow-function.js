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
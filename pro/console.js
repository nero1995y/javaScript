// log 만해도 엄청 짱좋다 .!

const dog = { type: '말티즈', name: '츄츄', owner: { name: 'simso' } };

// log level
console.log('log'); // 개발 단계에서 할때 사용하고 - 배포할때는 왠만하면 삭제 무언가 출력은 성능이슈!
console.info('info'); // 정보 정말필요한정보만
console.warn('warn'); // 경보단계
console.error('error'); // 에러! 예상하지못한 에러 시스템 에러
// 특별한 경우에만 동작하게 함

// assert 특정한 조건 맞을때 출력
console.assert(2 === 3, 'not same!');
console.assert(2 === 2, 'same!');

// print object
console.log(dog);
console.table(dog);
console.dir(dog, { colors: false, depth: 0 });
// 오브젝트 자세하게 표현하고싶을때

// meauring time
console.time('for loog');
for (let i = 0; i < 10; i++) {
  i++;
}
console.timeEnd('for loop');

// counting
let conunt = 0;
function a() {
  conunt++;
}

a();
a();
a();

console.log(`${conunt} 실행됨`);

function a() {
  console.count(`a fun`);
}

// reset
console.countReset('a fun');

//trace
function f1() {
  f2();
}
function f2() {
  f3();
}
function f3() {
  console.trace();
  console.log(`h1 :)`);
}
f1();

//async & await
// clear style of using promise :)

//1. async
async function fetchUser() {
	//do network request in 10 secs...   네트워크를 받아서 10초가 지나면 사용자를 리턴하는 함수라면??
	return 'ellie';
}
/* 
		무언가 오래걸리는 코드를 비동기적인 처리를 하지 않으면 자바스크립트는 동기적으로 코드를 실행하는 한줄한줄 코드를 실행한다.
		fetchUser() 선언 하면 다시 돌아가 끝날때까지 머무르고 있다가 10초후에 다음줄로 넘어가게된다. 이 리턴된 값을 실행한다.
		이러면 유저는 10초를 기다려야한다. promise 는 약속이다. 

		promise로 자동으로 바뀌는 키워드이다 async 다. 
*/
const user = fetchUser();
user.then(console.log);
console.log(user);

// 2. await ✨  promise안에서 쓰는것 정해진 시간이 지나면 resolve를 호출 
function delay(ms) {
	return new Promise(resolve => setTimeout(resolve, ms));
}


async function getApple() {
	await delay(1000);
  //throw 'error'; 에러핸들링하면댄다..
	return '🍎';
}

async function getBanana() {
	await delay(1000);
	return '🍌';
}

// 같은 체이닝 코드 
function getBanana() {
	return delay(1000)
		.then(() => '🍌');
}
//call hell
function pickFruits() {
	return getApple().then(apple => {
		return getBanana().then(banana => `${apple} + ${banana}`)
	});
}

//리팩토리
async function pickFruits() {
  const applePromise = getApple();  // 이렇게 바로 선언하면 프로미스가 실행된다.
  const bananaPromise = getBanana();
  const apple = await applePromise;
  const banana = await bananaPromise;  //병렬적으로 수행할 수 있음 ! 
 
  //const apple = await getApple();
  //const banana = await getBanana();
  return `${apple} + ${banana}`;
}

pickFruits().then(console.log);

//3. useful Promise APIs  promise 배열을 전달하게 되면 모아주는 함수

function pickAllFruits() {
  return Promise.all([getApple(), getBanana()]).then(fruits =>
    fruits.join(' + ')
    );
}

pickAllFruits().then(console.log);

function pickOnlyOne() {
  return Promise.race([getApple(), getBanana()]);

}

pickOnlyOne().then(console.log);
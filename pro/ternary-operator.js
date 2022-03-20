// Ternary Operater 삼항연산자로 과감하게
// Bad Code
function getResult(score) {
  let result;
  if (score > 5) {
    result = "good";
    // } else if (socre <= 5) {
  } else {
    result = "bad";
  }
  return result;
}

// good Code
function getResult2(score) {
  return score > 5 ? "good" : "bad";
}

// Nullish coalescing operator
// Bad Code  //let으로 변동가능한 코드 ,if 복잡성 증가
// Expr == expression
function printMessage(text) {
  let message = text;
  if (text == null || text == undefined) {
    message == "Nothing to display";
  }
  console.log(message);
}

// good Code
function printMessage(text) {
  const message = text ?? "Nothing to display";
  console.log(message);
}

// 디폴트 값을 쓴다면? null은 체크가 안된다. 언디파인드일때만 해야한다 !
function printMessage2(text = "Nothing to display") {
  console.log(text);
}

// ?? || 차이   ??은 null undefined 일떄 ||은 flase 일때   undefined, null , 0 , NaN , false  ""

function printMessage(text) {
  const message = text || "Nothing to display";
  console.log(message);
}

// expr 이라서 실행된값을 할당해서
{
  const result = getInitialState() ?? fetchFromServer();
  console.log(result);

  function getInitialState() {
    return null;
  }

  function fetchFromServer() {
    return "hiya form note";
  }
}

// Object Destructuring
const person = {
  name: "Julia",
  age: 20,
  phone: "0102222222",
};

// bad
function displayPerson(person) {
  displayAvatar(person.name);
  disPlayName(person.name);
  displayProfile(person.name, person.age);
}

//good code

function displayPerson(person) {
  const { name, age } = person;

  displayAvatar(name);
  disPlayName(name);
  displayProfile(name, age);
}

// Spread Syntax - Object ,array
const item = { type: "🚗", size: "M" };
const detaill = { price: 20, made: "Korea", gender: "M" };

// bad
item["price"] = detaill.price;

// bad
const newObject = new Object();
newObject["type"] = item.type;
// ....

// bad
const newObject2 = { type: item.type };

// good code
const shirt0 = Object.assign(item, detaill);

// Better! code
// 뒤에 더붙혀서 더 업데이트가 가능하다
const shirt = { ...item, ...detaill };

//const fruits = [...aray];
//const fruits = [...aray , ... array2];
//const fruits = [...aray , ... array2, 새로운array];

//Optianl-chaing

const bob = {
  name: "Julia",
  age: 20,
};

const anna = {
  name: "Julia",
  age: 20,
  job: {
    title: "Software Engineer",
  },
};

//Bad Code
function displayJobTitle(person) {
  if (person.job && person.job.title) {
    console.log(person.job.title);
  }
}

// good Code
function display(person) {
  if (person.job?.title) {
    console.log(person.job.title);
  }
}

// good Code
function displayJobTitle(person) {
  const title = person.job?.title ?? "No Job Yet";
  console.log(title);
}

//Template Literals
function gereeting(person) {
  const { name, score } = person;
  console.log(`Hello ${name}, Your current score is: ${score}`);
}

// Looping
const items = [1, 2, 3, 4, 5, 6];

//good code
function getResult3(items) {
  return items.filter((num) => num % 2 === 0);
}
function getResult3(items) {
  return items.map((num) => num * 4);
}

function getResult3(items) {
  return items.reduce((num, num2) => num + num2, 0);
}

//good Code
const evens = items.filter((num) => num % 2 === 0);
const multiple = evens.map((num) => num * 4);
const sum = multiple.reduce((a, b) => a + b, 0);
console.log(sum);

//good Code but 메모리를 많이 차지하기때문에 심플할 경우나 가독성이 필요할경우에만
const result = items
  .filter((num) => num % 2 === 0)
  .map((num) => num * 4)
  .reduce((a, b) => a + b, 0);

console.log(result);

// Promise -> Async /await
function displayUser() {
  fetchUser().then((user) => {
    fetchProfile(user).then((profile) => {
      updateUI(user, profile);
    });
  });
}

// Good Code
async function displayUser() {
  const user = await fetchUser();
  const profile = await fetchProfile(user);
  updateUI(user, profile);
}

// [...new Set(array)]  중복제거

// JSON
// JavaScript Object Notation

//1. JSON to Object  json 을 Obj 로 
// stringfy(obj)
// parse(text: string, reviver?: (this: any, key: string, value: any) => any): any;
            //1.string을 text 넣으면                                         // 2. any 를 반환 받는데, 
            //3. reviver 콜백함수인데 결과값을 반환한다. 
/*
 stringify(value: any, replacer?: (this: any, key: string, value: any) => any, space?: string | number): string;
    replacer?: (this: any, key: string, value: any) 통제 하면서 만들 수 있다.
*/        


let json = JSON.stringify(true);  //불리언 타입도 변환이 가능하다.
console.log(json);

json = JSON.stringify(['apple', 'banana']);
console.log(json); // ["apple","banana"]  더블쿼터로 들어간것을 확인 할 수 있다. 이게 JSON 규약이다.

const rabbit = {
  names: 'tori',
  color: 'white',
  size: null,
  birthDate: new Date(),
  //Symbol: Symbol("id"),                 //symbol js 고유 기능이라 제외
  jump: () => {
    console.log(`${this.names} can jump!`);
  },
};

json = JSON.stringify(rabbit);   //함수는 제외 되는 것을 확인 할 수있다 오브젝트에 있는 데이터가 아니라 제외
console.log(json);              


json = JSON.stringify(rabbit, ['names','color']);  //원하는 것으로 잘라서 ㄱㄴ 
console.log(json);


// 오브젝트 모든것을 출력할 수도 있다 .
//key: , value [object Object] 최상위가 가장 먼저 출력한다.
// 이런식으로 세밀하게 통제가 가능하다.
json = JSON.stringify(rabbit,(key, value) =>{
  console.log(`key: ${key}, value ${value}`);
  //return value;
  return key === 'names' ? 'ellie' : value;
});

console.log(json);   

//2. Object to JSON
console.clear();
json = JSON.stringify(rabbit);
const obj = JSON.parse(json, (key, value) => {
  console.log(`key: ${key}, value ${value}`);
  return key ==='birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
//obj.jump();  // 시리얼라이즈 하고 다시 디시리얼라이즈해서 메소드는 없다.

console.log(rabbit.birthDate.getDate());
console.log(obj.birthDate.getDate()); //string이기때문에 함수를 사용 할 수 없다.
 


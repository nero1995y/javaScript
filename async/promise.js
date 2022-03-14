//4. Error Heandling

const getHen = () =>
  new Promise((resolve, reject) => { 
    setTimeout(() => resolve('🐓'), 1000);
  });

const getEgg = hen =>
  new Promise((resolve, reject) => { 
    //setTimeout(() => resolve(`${hen} => 🥚`), 1000);
    setTimeout(() => reject(new Error(`${hen} => 🥚`)), 1000);  //에러가 중간에 발생된다면? 이셉션이나온다.

  });

const cook = egg =>
  new Promise((resolve, reject) => { 
    setTimeout(() => resolve(`${egg} => 🍳`), 1000);
  });

getHen() //
  .then(getEgg)
  .catch(error =>{
      return '🍌';        // << 요롷게 중간에 넣어서 캐치할 수 있다. 
  })                      //.then(hen => getEgg(hen))
  .then(cook)
  .then(console.log)
  .catch(console.log);  // << 요기 헨들링하면 캐치가 잡혀짐
  //.then(egg => cook(egg))
  //.then(meal => console.log(meal));
  //한가지만 콜백전달될때는 생략이 가능 ! 
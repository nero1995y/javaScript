const obj = { a: 27 };
// js 는 {} 리터널 자체만으로도 싱글톤이다.
console.log(obj);

class Singleton {
  constructor() {
    if (!Singleton.instance) {
      Singleton.instance = this;
    }
    return Singleton.instance;
  }

  getInstance() {
    return this.instance;
  }
}

const a = new Singleton();
const b = new Singleton();
console.log(a === b);

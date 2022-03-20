/**
 * shorthand property names
 * js 오브젝트는 항상 키와 value
 * key 와 value 가 동일할 경우에는 생략이 가능하다.
 *
 */
{
  const simso = {
    name: "simso",
    age: "18",
  };

  const name = "simso";
  const age = "18";

  const simso2 = {
    name: name,
    age: age,
  };

  const simso3 = {
    name,
    age,
  };

  console.log(simso, simso2, simso3);
}

/**
 * Destructuring Assignment
 * 오브젝트는 {} 배열은 []
 *
 */
{
  // Object
  const student = {
    name: "Anna",
    level: 1,
  };

  // old
  {
    const name = student.name;
    const level = student.level;
    console.log(name, level);
  }
  // new
  //이렇게 괄호 안에 정의해주면 . 하지않고 할당할 수 있다.
  {
    const { name, level } = student;
    console.log(name, level);

    // 이름 변경
    const { name: studentName, level: studentLevel } = student;

    console.log(studentName, studentLevel);
  }

  // array
  const animals = ["apple", "banana"];

  //old
  {
    const first = animals[0];
    const second = animals[1];
    console.log(first, second);
  }

  // new
  {
    const [first, second] = animals;
    console.log(first, second);
  }
}
/**
 * Spread Syntax
 * obj 에 주소를 참조값만 복사해서 원래 오브젝트를 변경하게 되면 전체 영향을 준다.
 *
 */

{
  const obj1 = { key: "key" }; // 메모리 주소값
  const obj2 = { key: "key2" };
  const array = [obj1, obj2];

  //arrat copy 아이템을 낮게로 가져옴 ...array
  const arrayCopy = [...array];

  console.log(array, arrayCopy);

  const arrayCopy2 = [...array, { key: "key3" }];

  console.log(arrayCopy2);

  //object copy
  const obj3 = { ...obj1 };
  console.log(obj3);

  // array concatenation
  const fruit1 = ["apple", "banana"];
  const fruit2 = ["bery", "grep"];

  const fruits = [...fruit1, ...fruit2];

  console.log(fruits);

  // object merge 주의 : 키가 동일한 object merge 할떄는 뒤에것이 앞에것을 덮어 씌움
  const dog1 = { dog1: "dog" };
  const dog2 = { dog2: "dog" };
  const dog = { ...dog1, ...dog2 };
  console.log(dog);
}

/**
 * Default parameters
 * 함수를 정의할때 인자를 전달하는 경우에 아무런 인자가 없을 경우에는 ???
 * 인자에 미리 설정할 수 있다.
 */

{
  {
    function printMessage(message = "defult message") {
      console.log(message);
    }

    printMessage("hello");
    printMessage();
  }
}

/**
 * Ternary Operator
 *
 *
 */

{
  const isCat = true;
  {
    // bed
    let componet;

    if (isCat) {
      componet = "cat";
    } else {
      componet = "dog";
    }

    console.log(componet);
  }

  // good
  {
    const componet = isCat ? "dog" : "cat";
    console.log(componet);
    console.log(isCat ? "dog" : "cat");
  }
}

/**
 * Template Literals
 */

{
  const weather = "sunny";
  const temparature = "16℃";

  console.log(`Today weather is ${weather} and temparature is ${temparature}`);
}

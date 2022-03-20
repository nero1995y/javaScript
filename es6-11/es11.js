/**
 * Optional Chaining ES11
 *
 */

{
  const person1 = {
    name: "simso",
    job: {
      title: "S/W Engineer",
      manager: {
        name: "Bob",
      },
    },
  };

  const person2 = {
    name: "Bob",
  };

  //bad
  {
    function printManager(person) {
      console.log(person.job.manager.name);
    }

    printManager(person1);
  }

  // 있으면 ? ? 출력 hot trand!
  {
    function printManager(person) {
      console.log(person.job?.manager?.name);
    }

    printManager(person1);
    printManager(person2);
  }
}

/**
 * Nullish Coalescing Operator
 *
 */

// Logical OR operator
// flase: 이해할 필요가 있다  '' , 0 , undefind
// or 같은경우도 값이 있으면 네임 출력 null 이면 뒤에것을 출력함 null 이면 값을 할당하도록 하면 문제가 새긴다 . 아무것도 아닌경우에만 할당하고 싶을때 flast
// 로 간주되어 된다. 0으로 지정해도 언디파인드 로 지정되는 경우도 있다 or 특징을 잘 이해해야 한다.

{
  const name = "Simso";
  const userName = name || "Guest";
  console.log(userName);
}

// 없는 경우에만 출력하자 언디파인으로 !
{
  const name = "";
  const userName = name ?? "Guest";
  console.log(userName);
}

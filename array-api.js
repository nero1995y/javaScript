class Student {
    constructor(name, age, enrolled, score){
        this.name = name;
        this.age = age;
        this.enrolled = enrolled;
        this.score = score;
    }
}

const students = [
    new Student('A', 29, true, 45),
    new Student('B', 28, false, 80),
    new Student('C', 30, true, 90),
    new Student('D', 40, false, 66),
    new Student('E', 18, true, 88),
];

//Q7, mack an array containing only the student's scores
// result should be: [45, 80, 90, 66, 88]
// 다른 값으로 매핑 되어서 전달
// 즉, 맵은 배열안에 모든 요소들을  우리가 전달해준 콜백 함수를 호출하면서  콜백함수에 리턴된 값들로 대체하는것이다. 

{                                  //value 변수명을 이런식으로 짓는건 별로다 student처럼 명시적으로 사용해야 한다
    const result = students.map((student) =>student.score);
    console.log(result);
}
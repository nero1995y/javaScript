'use strict';
// Object-oriendted programming 객체 지향 프로그래밍
// class template               
// object: instance of a class 객체: 클래스의 인터페이스
// JavaScript classes
// -introduced in ES6               :ES6에 도입됨 추가된 기능 
// -syntactical sugar over prototype-based inheritance  프로토타입 기반 상속에 대한 구문
/*
클래스가 없기전에는 펑션으로 템플릿으로 만들었었다. 오늘은 클래스를 이용해 템플릿을 만들어보자 기존에 존재하던
프로토 타입을 기반으로 그위에 문법만 클래스만 추가한것이다. 문법상으로 달달한 거! 
언어 구현사항 디테일이다 . 클래스를 자세히 이해하려면 프로토타입을 이해해야한다. 하이레벨에 클래스를 어떻게 사용하는지 초점을 두고 사용해보자
*/

// 1. Class declarations
class Person{
    // constrouctor
    constructor(name, age){
        //fields
        this.name = name;
        this.age = age;
    }

    //methods
    speak(){
        console.log(`${this.name}: hello!`);
        
    }
}

const ellie = new Person('ellie',20);

console.log(ellie.name);
console.log(ellie.age);
ellie.speak();

//2. Getter and setters
// 자판기에는 커피가있는데 커피머신으로  동전넣고,커피만들고 근데 -는 할수가없다. 사용자가 멍청하게 하면 안되서 암튼 캡슐화다.
class User{
    constructor(firstName, lastName, age){
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    // age 라는 get 호출
    get age() {
        return this._age;
    }
    // 이꼴 사인 할당할때 셋퍼를 호출함 전달된 vlaue 디스age를 할당할때  seter를 호출하게 된다 무한으로 
    set age(value){
        this._age = value < 0 ? 0 : value;
    }

}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//3. Fildes (public, private)
// Too soon !
// 최그에 추간된 접근제한자인가?
// # 기호 써서 접근제한 
// 2020 기준 아직미지원 바벨써서 해야함
class Experiment{
    publicField = 2;
    #privateField = 0;

}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. Static properties and methods
// Too soon !
// 클래스안에 고대로 복제되어서 값만 변경되어서 만들어지나 데이터 상관없이 동일하게 반복되어지는 메소드를 스테틱 
class Article{
    static publisher = 'Dream Coding';
    constructor(articleNumber){
        this.articleNumber = articleNumber;
    }

    static printPublisher(){
        console.log(Article.publisher);
        
    }
}

const article1 = new Article(1); 
const article2 = new Article(2); 

console.log(article1.publisher);
console.log(article2.publisher);

Article.printPublisher();//클래스에 붙어있어서 타입스크립트때도 많이 사용해서 알아두면좋다. 

// 상속 다양성 공통적인 속성에 추상화 ! 예) 도형에 

//5. Inheritance
//A way for one class to extend anorher class.

class Shape{
    constructor(width, heigth, color){
        this.width = width;
        this.heigth = heigth;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color}  color of !`);
        
    }

    getArea(){
        return this.width * this.heigth;
    }
}

class Rectangle extends Shape{
    draw(){
        console.log('🔻');
    }
}

class Triangle extends Shape{
    draw(){
        super.draw();
        console.log('🔻');
    }
    //오버라이딩
    getArea(){
        return (this.width * this.heigth)/2;
    
    }

    toString(){
        return `Triangle: color: ${this.color}`;
    }

}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle.getArea());

//6. Class checking : instanceOf:  인스턴스인지 아닌지 체크
console.log(rectangle instanceof Rectangle); 
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof Shape);
console.log(triangle instanceof Object); 

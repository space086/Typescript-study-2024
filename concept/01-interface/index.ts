// 블로그에 설명 기술
// https://slower-space.tistory.com/322#


// 인터페이스를 이용한 객체 타입 정의
interface User {
  name: string;
  age: number;
}
let yumi: User = { name: '유미', age: 30 };

// 인터페이스를 이용한 함수 타입 정의
interface Person {
  name: string;
  age: number;
}

function logAge(someone: Person) {
 console.log(someone.age);
}

let anna = { name: '안나', age: 10 };
logAge(anna); // 10

// 함수 반환 타입 정의
function getPerson(someone: Person): Person {
  return someone;
}

// 인터페이스 옵션 속성
interface User2 {
  name?: string;
  age: number;
  skill?: string;
}

function callAge(someone: User2) {
  console.log(someone.age);
}

let amy = {age: 30};
callAge(amy);

// 인터페이스 상속
class User2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  callAge() {
    console.log(this.age);
  }
}

class Developer extends User2 {
  constructor(name, age, skill) {
    super(name, age);
    this.skill = skill;
  }

  callDeveloperInfo() {
    this.callAge();
    console.log(this.name);
    console.log(this.skill);
    
  }
}

// 인터페이스의 상속이란




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
// logAge(anna); // 10

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
// callAge(amy);

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
interface Person2 {
  name: string;
  age: number;
}

interface Developer2 extends Person2 {
  skill: string;
}

let torr: Developer2 = {
  name: '토르',
  age: 21,
  skill: '번개'
}

// 인터페이스 상속할 때 주의점
interface Info {
  name: string;
  age: number;
}

interface Worker extends Info {
  name:number;
}

interface Hero {
  power: boolean;
}

interface Person extends Hero {
  name: string;
  age: number;
}

interface Developer3 extends Person {
  skill: string;
}

let harry: Developer3 = {
  name: '해리',
  age: 20,
  skill: '코딩',
  power: true
}

// 인터페이스를 이용한 인덱싱 타입 정의
let myInfo = {
  name: '두나',
  admin: true
};

console.log(myInfo['name']);

let companies = ['삼성', '네이버', '구글'];
console.log(companies[0]);

// 배열 인덱싱 타입 정의
interface StringArray {
  [index: number]: string;
}

let companies2: StringArray = ['삼성', '네이버', '카카오']

// 객체 인덱싱 타입 정의
interface SalaryMan {
  [level: string]: number;
}

let salary: SalaryMan = {
  junior: 100
}

let money = salary['junior']

// 인덱스 시그니처란? 
interface Pokemon {
  [level: string]: string;
}

let pikachu = {
  volt: '20000v'
}

interface PokemonInfo {
  [level: string]: string;
}

let pikachu2: PokemonInfo = {
  volt: '20000v',
  skill: '번개',
  lovely: '100'
}

// 인덱스 시그니처를 효과적으로 쓰기
// interface A {
//   id: string;
//   name: string;
// }
interface A {
  [property: string]: string
}

let duna: A = {
  id: '1',
  name: '두나'
}

interface AA {
  [property: string] : string
  id: string;
  name: string
}

let dduna: AA = {
  id: '2',
  name: '뚜나'
}
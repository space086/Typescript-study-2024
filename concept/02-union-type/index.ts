// 블로그에 설명 기술
// https://slower-space.tistory.com/323

// 유니언 타입
function logText(text: string) {
  console.log(text);
}

function logText2(text: string | number) {
  console.log(text);
}

// 유니언 타입의 장점
function logText3(text: any) {
  console.log(text);
}

// 유니언 타입 주의점
interface A {
  name: string;
  age: number;
}

interface B {
  name: string;
  skill: string;
}

function intro(someone: A | B) {
  console.log(someone);
  
  if('skill' in someone) {
    console.log(someone.skill);
    return;
  }
}

function intro2(someone: A|B) {
  // console.log(someone.age);
}

intro2({name: '개미', skill: '강의'});

function logText4(text: string | number) {
  if(typeof text === 'string') {
    console.log(text.toUpperCase());
    
  }
  if(typeof text === 'number') {
    console.log(text.toLocaleString());
  }
}

// 인터섹션 타입
interface C {
  name: string;
}

interface CoCoa {
  sweet: string;
}

function bever(something: C & CoCoa) {
  console.log(something.name);
  console.log(something.sweet);
}
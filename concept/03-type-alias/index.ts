// 블로그에 설명 기술
// https://slower-space.tistory.com/324

import { number } from "yup";

// 타입 별칭이란?
type MyName = string;
// let duna: string = '두나';
let duna: MyName = '두나';

type MyMessage = string | number;
function logText(text: MyMessage) {
  //..
}

let message: MyMessage = '안녕';
logText(message);

// 타입 별칭과 인터페이스의 차이점
type AA = {
  id: string;
  name: string;
}

let judy: AA;

interface AAA {
  id: string;
  name: string;
}

let junho: AAA;

// 사용할 수 있는 타입의 차이
type ID = string;
// type Product = TShirt | Shoes;
// type Teacher = Person & Adult;

type Boo<T> = {
  book: T;
}
// type MyBeer = Pick<Beer, 'brand'>;

interface Person2 {
  name: string;
  age: number;
}

type Adult = {
  old: boolean;
}

type Teacher2 = Person2 & Adult;



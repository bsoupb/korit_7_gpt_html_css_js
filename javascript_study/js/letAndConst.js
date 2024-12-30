// var : 재선언 가능
var a = 10;
console.log(a);
var a = 20;
console.log(a);
console.log(b);
var b = 30;
/*
    호이스팅
    : 선언과 정의가 먼저 실행되는 현상
*/
// var a -> var a -> var b -> console.log(a) -> console.log(a) -> console.log(b) -> b = 30

// let - 일반 변수 (재선언 불가능, 대입 가능)
let c = "c data";
console.log(c);
// let c = "c2 data"; - error

// const - 상수
const d = "d data";
console.log(d);
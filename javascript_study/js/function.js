fx1();

function fx1() {
    console.log("fx1 호출");
}

// 호이스팅(정의가 먼저 일어남)

function fx2(num1, num2) {
    console.log(num1 + num2);
}

fx2();
fx2(10);  // undefined(존재 X) + undefined = NaN
fx2(10, 20);

function fx2(num1, num2, num3 = 0) {    // default 자료형
    console.log(num1 + (num2 ?? 0) + num3);
}
fx2(10, 20, 30);    // 오버로딩 불가능, 오버라이드

const num1 = 20;
function fx3() {    // 전역변수 함수 안에서 사용 가능
    return num1;
}
console.log(fx3());

function fx4() {    // 자바스크립트는 함수 안에 함수 정의 가능
    console.log("fx4 호출");

    function fx5() {
        console.log("fx5 호출");
    }

    fx5();
}

// 함수가 변수 안에 들어갈 수 있다!

fx4();
const fx6 = fx4;    // 함수(object 객체)의 주소값을 변수를 담을 수 있음
fx6();

function fx11() {
    console.log("fx11 호출");
}
function fx12() {
    console.log("fx12 호출");
}
function fx13() {
    console.log("fx13 호출");
}

const fxArray = [fx11, fx12, fx13];     // 배열에 함수 담을 수 있음(함수 객체)
console.log(fxArray);

for(let fx of fxArray) {
    fx();
}

// callback 함수
function add(n1, n2) {
    return n1 + n2;
}

function sub(n1, n2) {
    return n1 - n2;
}

function run(fx) {
    const result = fx(10, 20);
    console.log(result);
}

run(add);
run(sub);

/*
    화살표 함수
*/

function fx(arg1, arg2) {
    return "리턴";
}

fx(1, 2);

const arrowFx = (arg1, arg2) => {
    return "리턴";
}

arrowFx(3, 4);

const arrowFx2 = arg1 => arg1 + 1;
arrowFx2(10);

// 자바는 인터페이스를 통한 추상메서드
// 자바스크립트는 함수 그 자체

function run(fx) {
    fx();
}

run(() => console.log("test"));
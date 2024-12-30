/* 
    연산자
    - 산술연산자
    : +, -, *, /, %, **(제곱)
*/

console.log(5 ** 2);

/*
    - 증감연산자
    : ++, --
*/

/*
    - 비교연산자
    : <, <=, >, >=, ==, !=, ===, !==
    javaScript의 특징은 기본적으로 변수의 타입이 정해지지 않음
*/

console.log(1 == 1);
console.log(1 == "1");  // 타입 달라도 값이 같으면 같다 -> 타입검사 X
console.log(1 === "1"); // 타입까지 확인 -> 타입검사 O

console.log(1 !== "2");
console.log(1 !== "1"); // 타입검사 O
console.log(1 != "1");  // 타입검사 X

/*
    - 논리연산자
    : &&, ||
    
    단축 평가

    논리 자료 값 || anything
    논리 자료 값 === true   => true;
    논리 자료 값 === false  => anything;
    논리 자료 값 && anything
    논리 자료 값 === true => anything
    논리 자료 값 === false => false

    null 병합 연산
    anything1 ?? anything2
    좌항(anything1) === null || 좌항(anything1) === undefined => 우항(anything2)
    좌항(anything1) !== null && 좌항(anything1) !== undefined => 좌항(anything1)

*/
console.log(1 === 1 || "배수빈");
console.log(1 !== 1 || "배수빈");
console.log(1 === 1 && "배수빈");
console.log(1 !== 1 && "배수빈");

console.log(null ?? "배수진");
console.log("배수빈" ?? "배수진");

/*
    - Not 연산
    !, !!
*/

console.log("------ Not 연산 ------");
console.log(!"");   // 비어있는 문자 -> false
console.log(!0);    // 0 -> false
console.log(!null);
console.log(!undefined);
// -> 값이 없거나 비어있으면 false
console.log(![]);   // 배열은 내부에 값이 없더라도 배열의 주소는 존재하기 때문에 true
console.log(typeof []);
console.log(![].length);    // 배열이 비어있다

var name = "";
if(!name){
    console.log("이름이 비어있습니다.");
}

if(!!name){
    console.log("이름이 비어있지 않습니다.");
}

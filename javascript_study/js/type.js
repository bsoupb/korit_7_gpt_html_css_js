var name = "배수빈";
console.log(name);
console.log(typeof name);

var age = 29;   // 초기화 되어질 때 타입 정해짐
console.log(age);
console.log(typeof age);

var address;
console.log(address);   // undefined : 정의되지 않음 != null
console.log(typeof address);

address = 10;
console.log(address);
console.log(typeof address);

address += "10";
console.log(address);
console.log(typeof address);

address = null;
console.log(address);
console.log(typeof address);    // object -> null : 객체를 표현할 때 사용

address = {
    si : "부산시",
    gungu : "부산진구"
};
console.log(address);
console.log(typeof address);

/*
    - number(숫자 -> 정수, 실수)
    - string(문자열)
    - boolean(논리 -> 참, 거짓)
    - object(객체) -> null 포함
    - undefined(type X)
    - NaN(Not a Number)
*/
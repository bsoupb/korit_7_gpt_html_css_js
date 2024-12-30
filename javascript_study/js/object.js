/*
    객체(Object)
*/

const obj = {
    name: "배수빈",
    age: 29,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`),     // 자기 자신의 주소를 명시, this는 자기자신을 의미하지 않음
}

obj.print();

const obj2 = {
    name: "배수빈",
    age: 29,
    print: () => console.log(`이름: ${obj.name}, 나이: ${obj.age}`),     // 자기 자신의 주소를 명시, this는 자기자신을 의미하지 않음
}

console.log(obj === obj2);  // 주소비교 -> 정의되어질 때 주소가 생성되어지므로 내용물이 같아도 false
console.log(JSON.stringify(obj) === JSON.stringify(obj2));
console.log(JSON.stringify(obj));
console.log(typeof JSON.stringify(obj));

/*
    object -> JSON : JSON.stringify(object)
    JSON -> object : JSON.parse(json문자열)
    User 객체 생성
    username, password, name, email
*/

// user 객체
const user = {
    username: "hong123",
    password: "1234",
    name: "홍길동",
    email: "hong@naver.com",
    hobby: ["축구", "농구", "배구"],
    address: {
        si: "부산시",
        gu: "부산진구"
    },
    printUserInfo: () => console.log("사용자 정보 출력"),
}
console.log(user);
// user.username = "hong123";

// object -> Json
// json으로 변환할 때 key, value만 가능, function은 변환 불가능
const jsonUser = JSON.stringify(user);
console.log(jsonUser);

const objectUser = JSON.parse(jsonUser);
console.log(objectUser);
console.log(objectUser.username);


const student = {
    name: "배수빈",
    age: 29,
    address: "부산 남구",
    name: "홍길동",
}

console.log(student);

const key = "age";
const value = "32";

const student2 = {
    ...student,
    [key]: value,
}

console.log(student2);
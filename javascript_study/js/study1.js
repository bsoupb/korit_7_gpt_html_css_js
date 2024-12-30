console.log(1 === 1 || "abc");
console.log(1 !== 1 || "abc");
console.log(1 === 1 && "abc");
console.log(1 !== 1 && "abc");

console.log(null ?? "abc");
console.log("abc" ?? "efg");

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
const userJson = JSON.stringify(user);
console.log(userJson);

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
    [key]:value,
}

console.log(student2);

const user1 = {
    username: "aaa",
    password: "1234",
}
const user2 = {
    username: "bbb",
    password: "1234",
}
const user3 = {
    username: "ccc",
    password: "1234",
}

const users = [ user1, user2, user3 ];
const usersInfoString = users.map(user => `사용자명: ${user.username} 비밀번호: ${user.password}`);
console.log(usersInfoString);

const users2 = users.filter(user => user.username !== "bbb");
console.log(users2);

const users3 = users.map(user => {
    if(user.username === "bbb"){
        return {
            ...user,
            username: "ddd",
        };
    }
    return user;
}).filter(user => user.username !== "ccc");
console.log(users3);

const obj = {
    data1: "d1",
    data2: 10,
    data3: [1, 2, 3, 4],
};

const obj2 = {
    ...obj,
    data2: 20,
};

const { data1:d1, data2:d2 } = obj;
console.log(d1, d2);

const { data1:dd1, data2:dd2 } = obj2;
console.log(dd1, dd2);

const nums = [ 1, 2, 3, 4, 5 ];
const [ n1, n2, n3 ] = nums;
console.log(n1, n2, n3);

const {data1, ...obj3} = obj;
console.log(obj3);

const [ n4, n5, ...newNums] = nums;
console.log(newNums);
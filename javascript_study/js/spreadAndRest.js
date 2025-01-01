const obj = {
    data1: "d1",
    data2: 10,
    data3: [1, 2, 3, 4],
};

// 깊은 복사: 새로운 주소 생성
// 얕은 복사: 
const obj2 = {
    ...obj,
    data2: 20,
};

/*
    비구조 할당(구조분해)
*/
// const data1 = obj.data1;
// const data2 = obj.data2;
// -> 아래와 같음
const { data1:d1, data2:d2 } = obj;   // 키값을 맞춰줘야 함
console.log(d1, d2);


const nums = [ 1, 2, 3, 4, 5 ]; 
const [ n1, n2, n3 ] = nums;    // 변수명 바꿔줘도 됨
console.log(n1, n2, n3);

const { data1: dd1, ...obj3 } = obj;    // 비구조 할당에서 사용하는 ... : rest
console.log(obj3);

const[ n4, n5, ...newNums ] = nums;
console.log(newNums);

// spread: 전체 복사, rest: 남아있는 거 가져오기
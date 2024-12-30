/*
    배열 -> 스택구조
*/

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numbers);
console.log('--------- for문 ----------')
for(let i = 0; i < numbers.length; i++){
    console.log(numbers[i]);
}

console.log('--------- 향상된 for문 ----------')
for(let num of numbers){
    console.log(num);
}

console.log('--------- forEach ----------')
numbers.forEach((num) => console.log(num));

numbers.push(10);
console.log(numbers);

console.log(numbers.pop());

// 특정 원소 제거
// 1) 배열 나눠서 합치기
// 2) filter

console.log(numbers.includes(5));   // 값을 포함하고 있는지 확인(java - contains)
console.log(numbers.indexOf(5));    // 값의 위치(index)
console.log(numbers.lastIndexOf(4));    // 뒤에서 부터 값의 위치(index)
console.log(numbers.concat([11, 12, 13, 14, 15]));  // 두 배열의 병합 -> 새로운 배열을 만듦, numbers에 적용 X
console.log(numbers);
const newNumbers = numbers.concat([11, 12, 13, 14, 15]);
console.log(newNumbers);
const newNumbers2 = [ ...numbers, 11, 12, 13, 14, 15];   // ... : spread 연산(배열 안의 요소를 꺼내서 복사)
console.log(newNumbers2);
const newNumbers3 = numbers.slice(0, 5);    // slice -> 기존 배열 건들지 않음
console.log(newNumbers3);

// 4 제거
const newNumbers4 = numbers.slice(0, numbers.indexOf(4))
                    .concat(numbers.slice(numbers.indexOf(4) + 1));
console.log(newNumbers4);
const newNumbers5 = numbers.splice(3, 1);   // 해당인덱스, 갯수 - 실제 numbers도 변경됨
console.log(newNumbers5);
console.log(numbers);

const newNumbers6 = numbers.splice(4, 2, 11, 12, 13);   // 11, 12를 제거한 위치에 추가
console.log(newNumbers6);
console.log(numbers);
numbers.splice(4, 0, 20, 21);   // 0 : 제거 X
console.log(numbers);
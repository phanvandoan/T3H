// bài 1. Sử dụng vòng lặp, tính tổng giá trị các phần tử trong mảng.
// Input: [0, 5, 4, 2, 8]
// Output: 19

//Giải
var array = [0, 5, 4, 2, 8];
var sum = array.reduce(function (total, number) {
    return total + number;
}, 0);

console.log('B1: ',sum);

// bài 2. Sử dụng một mảng các đối tượng person (name, age) thành tổng hợp mảng các tên người.
// Input: const person = [
// 	{ name: 'John', age: 24 },
// 	{ name: Pete, age: 25 },
// 	{ name: Mary', age: 28 }
// ]

// Output: ['John', 'Pete', 'Mary'].

//Giải
const persons = [
  { name: "John", age: 24 },
  { name: "Pete", age: 25 },
  { name: "Mary", age: 28 },
];
var output = [];
persons.forEach(function (person) {
    output.push(person.name)
});
  
console.log('B2: ',output);






// bài 3. Sử dụng các mảng dữ liệu tên người để tổng hợp thành mảng tên người không trùng lặp.
// Input:	arr1 = ['John', 'Pete', 'Mary']
// 	arr2 = ['Mary', 'Henry', 'Harry']

// Output: ['John', 'Pete', 'Mary', 'Henry']

// Gợi ý: Có thể sử dụng spread trong mảng. [...arr] kết hợp với phương thức includes trong array method.
//giải
arr1 = ['John', 'Pete', 'Mary']
arr2 = ['Mary', 'Henry', 'Harry']

var output = arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0))
console.log('B3 ',output) 
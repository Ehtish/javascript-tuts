// task 1 - write a function to reverse strting

// function reverseNumber(number) {
//   var str = number.toString();
//   var result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   console.log(result);
// }
// reverseNumber(5468);

// task to find factorial
// function factorial(num) {
//   if (num === 0) {
//     return 1;
//   } else {
//     return num * factorial(num - 1);
//   }
// }

// console.log(factorial(3));

// task to perform operation
// calculator = (a, b, op) => {
//   let res;
//   switch (op) {
//     case "+":
//       res = a + b;
//       console.log(`${a} + ${b} = ${res}`);
//       break;
//     case "-":
//       res = a - b;
//       console.log(`${a} - ${b} = ${res}`);
//       break;
//     case "*":
//       res = a * b;
//       console.log(`${a} * ${b} = ${res}`);
//       break;
//     case "/":
//       if (b == 0) {
//         return false;
//       } else {
//         res = a / b;
//         console.log(`${a} / ${b} = ${res}`);
//         break;
//       }
//     default:
//       console.log("invalid operand");
//       break;
//   }
// };

// calculator = (a, b, op) => {
//   let res;
//   if (op === "+") {
//     return (res = a + b);
//   } else if (op === "-") {
//     return (res = a - b);
//   } else if (op === "*") {
//     return (res = a * b);
//   } else if (op === "/") {
//     if (b === 0) {
//       return false;
//     }
//     return (res = a / b);
//   }
// };

// var result = calculator(2, 4, "/");
// console.log(result);

// task # 7 (find number in array using built-in function and custom function)

// var number = [1, 2, 3, 4, 5];
// var target = 5;

// findItem = (number, target) => {
//   for (let i = 0; i < number.length; i++) {
//     if (target === number[i]) {
//       return target;
//       //console.log(target);
//     }
//   }
// };
// console.log(`Target is: ${findItem(number, target)}`);

var arr = [
  ["sohaib", "roomi", 1],
  ["aarij", "sheikh", 2],
  ["waqar", "ahmed", 3],
];

var newarr = arr.map((element) => {
  return {
    firstName: element[0],
    lastName: element[1],
    id: element[2],
  };
});

console.log(`Given array : ${arr}`);
// console.log(`Given array : ${newarr}`);
console.log("Converted into object are given below");
console.log(newarr);
// console.log(newarr);
var arr2 = [12, 32, 34, 45, 55];
let even = arr2.map((a) => {
  if (a % 2 === 0) {
    return a;
  } else {
    return "odd numbers";
  }
});
console.log(even);

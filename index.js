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

findNumber = (a) => {};

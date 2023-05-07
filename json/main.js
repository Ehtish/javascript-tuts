const fs = require("fs");
const bioData = {
  name: "ali",
  age: 25,
};

const jsonData = JSON.stringify(bioData);
// console.log(jsonData); //{"name":"ali","age":25} json format
// const objData = JSON.parse(jsonData);
// console.log(objData); //{name: 'ali', age: 25} obj format

// const jsonData = JSON.stringify(bioData);
// fs.writeFile("json1.json", jsonData, (err) => {
//   console.log("done");
// });
// fs.readFile("json1.json", "utf-8", (err, data) => {
//   const orgData = JSON.parse(data);
//   console.log(orgData);
// });

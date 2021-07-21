class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}
function sum (num1, num2) {
  return num1 + num2;
}
export {
  Person, sum
}
//导入
// import {number} from "组件化.js";
// import * as item from "组件化.js";
export let number = 1;
//default导入
export default function () {
  console.log("default");
}
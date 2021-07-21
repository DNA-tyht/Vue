const {add, mul} = require("./js/mathUtils.js");
alert(add(10, 20));
alert(mul(10, 20));

import {name, age, height} from "./js/info";
alert(name);
alert(age);
alert(height);

//依赖css文件
require("./css/normal.css");

//依赖less文件
require("./css/special.less");
document.writeln("<h2>hello</h2>")

import Vue from "vue";
const app = new Vue(
    {
      el: "#app",
      data: {
        message: "webpack",
      }
    }
);
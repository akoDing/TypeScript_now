"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
exports.__esModule = true;
var Hello = /** @class */ (function () {
    function Hello() {
    }
    return Hello;
}());
exports.Hello = Hello;
/* 多行字符串 */
var content = "aaa\nbbb\nccc";
/* 字符串模板 */
var myname = "xdd";
var getName = function () {
    return "xdd";
};
console.log("hello " + myname);
console.log("hello " + getName());
console.log("<div>\n  <span>" + myname + "</span>\n  <span>" + getName() + "</span>\n  <div>bd</div>\n  </div>");
/* 自动拆分字符串 */
function test(template, name, age) {
    console.log(template);
    console.log(name);
    console.log(age);
}
var myName = "zhang san";
var getAge = function () {
    return 18;
};
test(templateObject_1 || (templateObject_1 = __makeTemplateObject(["Hello my name is ", ". I'm old is ", ""], ["Hello my name is ", ". I'm old is ", ""])), myName, getAge());
var myName1 = "li si";
/* myName1 = 13 */
var alisa = "xixi";
alisa = 16;
function Test(name) {
    return "";
}
Test("girl");
/* 声明自定义类型 */
var Person = /** @class */ (function () {
    function Person() {
    }
    return Person;
}());
var wangwu = new Person();
wangwu.name = "wangwu";
wangwu.age = 25;
function Test2(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
Test2("hh", "jj", "dddddd");
Test2("hh", "jj");
// 可选参数
function Test3(a, b, c) {
    if (c === void 0) { c = "jojo"; }
    console.log(a);
    console.log(b);
    console.log(c);
}
Test3("HH");
function fun1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (arg) {
        console.log(arg);
    });
}
fun1(1, 2, 3);
fun1(1, 2, 3, 4, 5);
function fun2(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
var args = [1, 2, 3];
// fun2(...args)
/* function* getPrice(stock) {
  while(true) {
    yield Math.random()*100;
  }
}

var price = getPrice("IBM");

var limitprice = 15;

var Nowprice = 100;

while(limitprice < Nowprice) {
  Nowprice = price.next().value;
  console.log(`${Nowprice}`)
}

console.log(`${Nowprice}`) */
/* 解构赋值 */
function getStock() {
    return {
        code: "IBM",
        price: {
            price1: 100,
            price2: 200
        }
    };
}
var _a = getStock(), code = _a.code, price1 = _a.price.price1;
var array1 = [1, 2, 3, 4];
var number1 = array1[0], number2 = array1[1];
var templateObject_1;

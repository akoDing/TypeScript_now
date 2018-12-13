export class Hello {

}

/* 多行字符串 */
var content = `aaa
bbb
ccc`

/* 字符串模板 */
var myname = "xdd"

var getName = function () {
  return "xdd"
}

console.log(`hello ${myname}`)
console.log(`hello ${getName()}`)

console.log(`<div>
  <span>${myname}</span>
  <span>${getName()}</span>
  <div>bd</div>
  </div>`)

/* 自动拆分字符串 */
function test (template, name, age) {
  console.log(template)
  console.log(name)
  console.log(age)
}

var myName = "zhang san"

var getAge = function () {
  return 18
}

test`Hello my name is ${myName}. I'm old is ${getAge()}`

var myName1: string = "li si"
/* myName1 = 13 */

var alisa: any = "xixi"
alisa = 16

function Test(name: string): string {
	return ""
}
Test("girl")

/* 声明自定义类型 */
class Person {
  name: string
  age: number
}

var wangwu: Person = new Person()
wangwu.name = "wangwu"
wangwu.age = 25

function Test2(a: string, b: string ,c: string = "jojo") {
  console.log(a)
  console.log(b)
  console.log(c)
}
Test2("hh","jj","dddddd")
Test2("hh","jj")

// 可选参数
function Test3(a: string, b?: string ,c: string = "jojo") {
  console.log(a)
  console.log(b)
  console.log(c)
}
Test3("HH")

function fun1(...args) {
  args.forEach(function (arg) {
    console.log(arg);
  })
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
  }
}
var {code, price: {price1}} = getStock();

var array1 = [1, 2, 3, 4];
var [number1, number2, ...others] = array1;// 1 2 [3,4]
var [, , number3, number4] = array1; // 3 4
var [number1, number2] = array1;// 1 2

var array2 = [1, 2, 3, 4];
function dosomething([number3, number4, ...others]:number[]) {
  console.log(number3)
  console.log(number4)
  console.log(others)
}
dosomething(array2)

/* 箭头表达式 */
var sum = (arg1, arg2) => arg1 + arg2;

var sum1 = (arg1, arg2) => {
  return arg1 + arg2;
}

/* 一个参数就不用写（） */
var sum2 = arg1 => {
  return arg1;
}

var myArray = [1, 2, 3, 4, 5];
console.log(myArray.filter(value => value % 2 == 0));

/* 箭头函数解决this指针问题  */
function getNames(name: string) {
  this.name = name;

  setInterval(() => {
    console.log("This name is:" + this.name);
  }, 1000)
}

var Name = new getNames("xdd");

var myArray1 = [1, 2, 3, 4];
// myArray1.desc = "four number";
for (var n of myArray1) {
  if (n > 2) break;
  console.log(n); // 1 2
}


/* 类 */
class animal {
  // public 公共 默认
  // private 私有 类的外部访问不到
  // protected 保护 内部和子类访问得到

  public name;

  public eat() {
    console.log("i am eating");
  }

}
/* 类的实例化 */
var Animal_1 = new animal();
Animal_1.name = "dog";
Animal_1.eat();

var Animal_2 = new animal();
Animal_2.name = "cat";
Animal_2.eat();

class Personal {
  // 类的构造函数 类的外部访问不到 在new时候只被调用一次
  constructor(name: string) {
    this.name = name;
    console.log("xixi");
  }
  name: string;

  /* 同上 并且一定要给访问控制符
  constructor(public name: string) {
  }
  */
  eat() {
    console.log(this.name);
  }
}
var p1 = new Personal("xdd");

/* 继承 获取Personal所有属性和方法 */
class Employee extends Personal {

  constructor(name: string, code: string) {
    /* 子类的构造函数 必须调用 父类的构造函数 */
    super(name);
    this.code = code;
  }

  code: string;
  work() {
    /* 子类引用父类方式用super. */
    super.eat();
    this.dowork();
  }
  private dowork() {

  }
}

/* 泛型 这个数组里只能放Personal类型的东西*/
var workers: Array<Personal> = [];
workers[0] = new Personal("zhangsan");
workers[1] = new Employee("zhangsan", "002");

var e1 = new Employee("name", "001");
/* Employee 里面的属性和方法 */
e1.code = "001";
/* private 属性后 实例化的对象引用不到私有方法 */
e1.work();

/* 接口 interface*/
interface IPerson {
  name: string;
  age: number;
}
/* 接口用作方法参数的声明类型时 */
class Persons {
  constructor (public config: IPerson) {

  }
}
var P1 = new Persons({
  name: "zhangshan",
  age: 12
})

/* 接口是一个方法，所有实现这个接口的类都必须有接口中的方法 */
interface An {
  eat();
}
class Sheep implements An {
  eat() {
    console.log("grass");
  }
}
class Tiger implements An {
  eat() {
    console.log("meat");
  }
}

/* 模块 */


/* 构造方法 */
class Price {
  constructor(total: number, num: number) {
    this.total = total;
    this.num = num;
    }
    total: number;
    num: number;
    sum() {
      return this.total * this.num;
    }
  }

var Price1 = new Price(12, 12);

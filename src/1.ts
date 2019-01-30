interface Options {
  name: string,
  age: number
}
let options = {} as Options

options.name = 'hello'
options.age = 13

declare let foo: string[] | null


let isDone: boolean = false;

/* 泛型 */
let list: Array<number> = [1, 2, 3]

/* 枚举 */

enum Color {
  Red = 1,
  Green,
  Blue
}

let color: Color = Color.Green
let colorName: string = Color[2]
console.log(colorName)

function warnUser(): void {
  console.log('no return')
  
}

let num: number = undefined
let num2: number = null

function error(msg: string): never {
  throw new Error(msg)  
}

/* 类型推断 */
let someValue: any = "this is a  string"
let strLen: number = (<string>someValue).length
let strLen2: number = (someValue as string).length

// 尽可能的使用 let来替换 var


try {
  throw 'oh now '
} catch (error) {
  console.log(error)
}

let [first] = [1, 2, 3, 4]
let [, second, , forth] = [1, 2, 3, 4]
console.log(second, forth)
console.log(first)

// 对象的解构赋值: 注意---我们一定需要用括号把它括起来，因为javascript通常会将以{起始的语句解析为一个块
  let a, b
  ( { a, b } = { a: 'baz', b: 101 })

console.log(a, b)
  

// 属性重命名:注意这里的冒号不是指示类型的，如果你想指定它的类型，仍然需要在其后写上完整的模式

let { a: newName1, b: newName2 } = {
  a: 'abb',
  b: 200
}
console.log(newName1, newName2, a, b)

let { c, d }: { c: string, d: number } = {
  c: 'cdd',
  d: 300
}

console.log(c, d)



/* 

接口： 接口能够描述js里面丰富的类型

*/

console.info('\n\n\n\n----interface----')
interface LabelledValue {
  label: string
}

function printLabel(labelledObj:LabelledValue) {
  console.log(labelledObj.label)
}
const obj = {
  label: 'this is interface',
  size: 10
}
printLabel(obj)

//可选属性: 在可选属性名字定义后面加上一个？符号

interface SquareConfig {
  color?: string,
  width?: number
}

function createSquare(config: SquareConfig): { color: string, area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }

  return newSquare
}

let mySquare = createSquare({
  color: 'black',
})

console.log(mySquare)

//只读属性: 关键字 readonly

interface Point {
  readonly x: number,
  readonly y: number,
}

let p1: Point = {
  x: 10,
  y: 20,
}


let arr: number[] = [1, 2, 3, 4]
let ro: ReadonlyArray<number> = arr  //定义一个去除所有可变方法的数组，保证数组创建之后再也不能被修改
// ro[0] = 100
// ro.push(200)
// ro.length = 100
// arr = ro  但可以采用类型断言重写  arr = ro as number[]

// readonly 和 const的使用时机区分： 判断该用 readonly还是 const的方法是要看要把它作为变量使用还是作为一个属性，变量使用const， 属性使用 readonly


// 字符串索引签名

interface IConfig {
  color: string,
  [propsName: string]: any
}

// 使用接口函数类型

interface ISearchFunc {
  (name: string, age: number): string
}

let mySearch: ISearchFunc
mySearch = function (pName, pAge) {
  return `my name is ${pName} aged ${pAge}`
}

// 智能推断好nb
console.info(mySearch('alf lau', 100))

// 可索引的类型: 数组的写法，区别于对象和单值

interface IStringArray {
  [index: number]: string
}

let myArray: IStringArray
myArray = ['BOB', 'Fred']
let myStr: string = myArray[0]
console.info(myStr)

class Animal {
  name: string
}

class Dog extends Animal {
  breed: string
}

interface NotOkay {
  // [x: number]: Animal,  P135  
  [x: string]: Dog
}

// 类类型  关键词： implements  接口描述了类的公共部分，而不是公共和私有两部分，它不会帮你检查类是否具有某些私有成员

interface IClock {
  currentTime: Date;
  setTime(d: Date);
}

class Clock implements IClock {
  currentTime: Date;
  constructor(h: number, m: number) {
    
  }
  setTime(d: Date) {
    
  }
}

// 继承接口: 一个接口可以继承一个或者多个接口

interface IShape {
  color: string
}

interface IPenStroke {
  penWidth: number
}

interface Square extends IShape, IPenStroke {
  sideLength: number
}

let square = <Square>{}
square.color = 'blue'
square.sideLength = 1
square.penWidth =  10


// 混合类型 有的时候一个对象可以同时具有上面提到的多种类型

interface ICounter {
  (start: number): string,
  interval: number,
  reset(): void
}

function getCounter(): ICounter {
 let counter = <ICounter>function (start:number) {
  } 
  counter.interval = 123
  counter.reset = function () { }
  return counter
}


let myC = getCounter()
myC(10)

// 接口继承类


/* 

类：

*/

const target = {
  name: 'Alfred Lau',
  age: 100
}

class Greeter {
  greeting: string;
  constructor(msg: string) {
    this.greeting = msg
  }
  greet() {
    return `Hello, ${this.greeting}`
  }
}


let greeter = new Greeter('world')
console.log(greeter.greet())


// 继承: 类从基类中继承了属性和方法。 派生类通常称作子类，基类通常称为超类

class Animal1 {
  move(distanceInMeters: number = 0) {
    console.log(`Animal moved ${distanceInMeters}m.`);
  }
}

class Dog1 extends Animal1 {
  bark() {
    console.log('woof!woof!');
  }
}

const dog = new Dog1()
dog.bark()
dog.move(10)
dog.bark()

// 更复杂的例子

class Animal2 {
  name: string;
  constructor(theName: string) {
    this.name = theName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

class Snake extends Animal2 {
  constructor(name:string) {
    super(name)
  }
  move(){}
}
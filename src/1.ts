import { deprecate } from "util";

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
  constructor(name: string) {
    // 在构造函数里访问this的属性之前，我们一定要调用super()
    super(name)
  }
  move(distanceInMeters: number = 5) {
    console.info('Slithering...');
    super.move(distanceInMeters)
  }
}

class Horse extends Animal2 {
  constructor(name: string) {
    super(name)
  }
  move(distanceInMeters: number = 45) {
    console.info('Galloping');
    super.move(distanceInMeters)
  }
}

let sam = new Snake('Sammy the Python')
let tom: Animal2 = new Horse('tommy the palomino')
sam.move()
tom.move(34)

// 共有，私有和受保护的修饰符：默认为public，还有private， protected

class Animal3 {
  private age: number;
  public name: string;
  public constructor(theName:string) {
    this.name = theName;
  }
  /**
   * move
   */
  public move(distanceInMeters : number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}

// new Animal3('Cat').age //无法访问

// 构造函数也可以被标记为protected。这意味着这个类不能在包含它的类外被实例化，但是能被继承

class Person {
  protected name: string;
  protected constructor(theName: string) {
    this.name=  theName
  }
}

// Employee 能够继承Person

class Employee extends Person {
  private department: string;
  constructor(name: string, department: string) {
    super(name);
    this.department = department
  }

  public getElevatorPitch() {
    return `
      Hello, my name is ${this.name} and i work in ${this.department}.
    `
  }
  
}

let howard = new Employee('Howard', 'Sales')
// let john = new Person('JOHN')   //Constructor of class 'Person' is protected and only accessible within the class declaration.


// readonly只读属性：必须在声明时或构造函数里被初始化

class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName
  }
}


let dad = new Octopus('Man with the 8 strong legs')

// dad.name = 's'  只读报错

// 参数的属性：参数属性通过给构造函数参数添加一个访问限定符来声明。使用private限定一个参数属性回声明并初始化一个私有成员；对于  public和 protected来说也是一样

class Animal4 {
  // 声明和赋值结合
  constructor(private name: string) {
    
  }

  move(distance: number) {
    console.info(`${this.name} moved ${distance}`);    
  }
}

const a4 = new Animal4('doggy')
a4.move(100)

// 存取器：getter setter

// 没有getter， setter的版本

class Employee2 {
  fullName: string;
}

let employee2 = new Employee2()
employee2.fullName = 'Bob smith'
if (employee2.fullName) {
  console.info(employee2.fullName)
} 

// 设置了 getter， setter

let password = 'secret password'
class Employee3 {
  private _fullName: string;

  get fullName():string {
    return this._fullName
  }

  set fullName(newName: string) {
    if (password && password === 'secret password') {
      this._fullName = newName
    } else {
      console.error('not authorized');
    }
  }
}

let employee3 = new Employee3()
employee3.fullName = "Ted"
if (employee3.fullName) {
  console.info(employee3.fullName);
}

// 对于存取器，我们有下面几点需要注意：首先，存取器需要我们把编译器设置为输出 ecmascript 5或者更高。其次，只带有 get不带有 set的存储器自动被推断为 readonly。这在从代码生成.d.ts文件是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值

// 静态属性：类分为实例成员(仅当类被实例化的时候才会被初始化的属性)，静态属性(存在于类本身上面而不是类的实例上)

class Grid {
  static origin = { x: 0, y: 0 };
  constructor(public scale: number) {
    
  }

  // 注意此处参数的声明方式
  calculateDistanceFromOrigin(point: { x: number; y: number; }) {
    let xDist = (point.x - Grid.origin.x);
    let yDist = (point.y - Grid.origin.y);
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale
  }
}

let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0)
console.info(grid1.calculateDistanceFromOrigin({
  x: 10, y: 10
}))
console.info(grid2.calculateDistanceFromOrigin({
  x: 10, y: 10
}))


// 抽象类：抽象类作为其他派生类的基类使用。 他们一般不会被直接实例化。不同于接口，抽象类可以包含成员的实现细节。abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法

// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。抽象方法的语法与接口方法相似。两者都是定义方法签名但不包含方法体。然而，抽象方法必须包含abstract关键字并且可以包含访问修饰符
abstract class Animal5 {
  abstract makeSound(): void;
  move(): void{
    console.info('roaming the earth');
  }
}


abstract class Department {
  constructor(public name: string) {
    
  }

  printName(): void{
    console.info('Department name:', this.name);
  }

  abstract printMeeting(): void;
}

class AccountingDepartment extends Department {
  constructor() {
    super('Accounting and Auditing')
  }

  printMeeting(): void{
    console.info('child');
  }

  generateReports(): void{
    console.info('generating reports...');
  }
}

let department: Department  //允许创建一个对抽象类的引用
// department = new Department() //不允许创建抽象类的实例

department = new AccountingDepartment()//允许对一个抽象子类进行实例化和赋值

department.printName()
department.printMeeting()
// department.generateReports() // 方法在声明的抽象类中不存在

//把类当做接口使用:类定义会创建两个东西：类的实例和一个构造函数。因为类可以创建出类型，所以你能够在允许使用接口的地方使用类

class PointX {
  x1: number;
  y1: number;
}

interface Point3d extends PointX {
  z: number;
}


let point3d: Point3d = {
  x1: 1,
  y1: 2,
  z: 3
}




/* 
函数


*/

// 完整的函数类型:注意区别定义函数类型和定义函数返回值类型的写法不同;对于函数类型定义中的返回值，我们在函数和返回值类型之前使用(=>)符号，使之清晰明了，它是函数类型的必要部分，如果函数没有返回值，也必须指定返回值类型为void而不能留空。函数的类型只是由参数类型和返回值组成的。函数中使用的捕获变量不会体现在类型里。实际上，这些变量是函数的隐藏状态并不是组成API的一部分

let myAddFunc: (base: number, increment: number) => number
  = function (x: number, y: number): number {
    return x + y;
  }

// 可选参数和默认参数：使用参数名旁使用？实现可选参数的功能;可选参数必须跟在必选参数后面，如果我们希望first name是可选的，那么就必须调整它们的位置，把firstName后面

function buildName(firstName: string, lastName?: string)
{
  if (lastName) {
    return firstName + " " + lastName;
  } else {
    return firstName
  }
}

let r1 = buildName('Bob','Allen')
let r2 = buildName('Bob')
// let r3 = buildName('Bob','Allen', 's')


// 剩余参数



  

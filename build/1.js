"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var _a;
var options = {};
options.name = 'hello';
options.age = 13;
var isDone = false;
/* 泛型 */
var list = [1, 2, 3];
/* 枚举 */
var Color;
(function (Color) {
    Color[Color["Red"] = 1] = "Red";
    Color[Color["Green"] = 2] = "Green";
    Color[Color["Blue"] = 3] = "Blue";
})(Color || (Color = {}));
var color = Color.Green;
var colorName = Color[2];
console.log(colorName);
function warnUser() {
    console.log('no return');
}
var num = undefined;
var num2 = null;
function error(msg) {
    throw new Error(msg);
}
/* 类型推断 */
var someValue = "this is a  string";
var strLen = someValue.length;
var strLen2 = someValue.length;
// 尽可能的使用 let来替换 var
try {
    throw 'oh now ';
}
catch (error) {
    console.log(error);
}
var first = [1, 2, 3, 4][0];
var _b = [1, 2, 3, 4], second = _b[1], forth = _b[3];
console.log(second, forth);
console.log(first);
// 对象的解构赋值: 注意---我们一定需要用括号把它括起来，因为javascript通常会将以{起始的语句解析为一个块
var a, b;
(_a = { a: 'baz', b: 101 }, a = _a.a, b = _a.b);
console.log(a, b);
// 属性重命名:注意这里的冒号不是指示类型的，如果你想指定它的类型，仍然需要在其后写上完整的模式
var _c = {
    a: 'abb',
    b: 200
}, newName1 = _c.a, newName2 = _c.b;
console.log(newName1, newName2, a, b);
var _d = {
    c: 'cdd',
    d: 300
}, c = _d.c, d = _d.d;
console.log(c, d);
/*

接口： 接口能够描述js里面丰富的类型

*/
console.info('\n\n\n\n----interface----');
function printLabel(labelledObj) {
    console.log(labelledObj.label);
}
var obj = {
    label: 'this is interface',
    size: 10
};
printLabel(obj);
function createSquare(config) {
    var newSquare = { color: 'white', area: 100 };
    if (config.color) {
        newSquare.color = config.color;
    }
    if (config.width) {
        newSquare.area = config.width * config.width;
    }
    return newSquare;
}
var mySquare = createSquare({
    color: 'black',
});
console.log(mySquare);
var p1 = {
    x: 10,
    y: 20,
};
var arr = [1, 2, 3, 4];
var ro = arr; //定义一个去除所有可变方法的数组，保证数组创建之后再也不能被修改
var mySearch;
mySearch = function (pName, pAge) {
    return "my name is " + pName + " aged " + pAge;
};
// 智能推断好nb
console.info(mySearch('alf lau', 100));
var myArray;
myArray = ['BOB', 'Fred'];
var myStr = myArray[0];
console.info(myStr);
var Animal = /** @class */ (function () {
    function Animal() {
    }
    return Animal;
}());
var Dog = /** @class */ (function (_super) {
    __extends(Dog, _super);
    function Dog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return Dog;
}(Animal));
var Clock = /** @class */ (function () {
    function Clock(h, m) {
    }
    Clock.prototype.setTime = function (d) {
    };
    return Clock;
}());
var square = {};
square.color = 'blue';
square.sideLength = 1;
square.penWidth = 10;
function getCounter() {
    var counter = function (start) {
    };
    counter.interval = 123;
    counter.reset = function () { };
    return counter;
}
var myC = getCounter();
myC(10);
// 接口继承类
/*

类：

*/
var target = {
    name: 'Alfred Lau',
    age: 100
};
var Greeter = /** @class */ (function () {
    function Greeter(msg) {
        this.greeting = msg;
    }
    Greeter.prototype.greet = function () {
        return "Hello, " + this.greeting;
    };
    return Greeter;
}());
var greeter = new Greeter('world');
console.log(greeter.greet());
// 继承: 类从基类中继承了属性和方法。 派生类通常称作子类，基类通常称为超类
var Animal1 = /** @class */ (function () {
    function Animal1() {
    }
    Animal1.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log("Animal moved " + distanceInMeters + "m.");
    };
    return Animal1;
}());
var Dog1 = /** @class */ (function (_super) {
    __extends(Dog1, _super);
    function Dog1() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dog1.prototype.bark = function () {
        console.log('woof!woof!');
    };
    return Dog1;
}(Animal1));
var dog = new Dog1();
dog.bark();
dog.move(10);
dog.bark();
// 更复杂的例子
var Animal2 = /** @class */ (function () {
    function Animal2(theName) {
        this.name = theName;
    }
    Animal2.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal2;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        // 在构造函数里访问this的属性之前，我们一定要调用super()
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.info('Slithering...');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal2));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.info('Galloping');
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal2));
var sam = new Snake('Sammy the Python');
var tom = new Horse('tommy the palomino');
sam.move();
tom.move(34);
// 共有，私有和受保护的修饰符：默认为public，还有private， protected
var Animal3 = /** @class */ (function () {
    function Animal3(theName) {
        this.name = theName;
    }
    /**
     * move
     */
    Animal3.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal3;
}());
// new Animal3('Cat').age //无法访问
// 构造函数也可以被标记为protected。这意味着这个类不能在包含它的类外被实例化，但是能被继承
var Person = /** @class */ (function () {
    function Person(theName) {
        this.name = theName;
    }
    return Person;
}());
// Employee 能够继承Person
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "\n      Hello, my name is " + this.name + " and i work in " + this.department + ".\n    ";
    };
    return Employee;
}(Person));
var howard = new Employee('Howard', 'Sales');
// let john = new Person('JOHN')   //Constructor of class 'Person' is protected and only accessible within the class declaration.
// readonly只读属性：必须在声明时或构造函数里被初始化
var Octopus = /** @class */ (function () {
    function Octopus(theName) {
        this.numberOfLegs = 8;
        this.name = theName;
    }
    return Octopus;
}());
var dad = new Octopus('Man with the 8 strong legs');
// dad.name = 's'  只读报错
// 参数的属性：参数属性通过给构造函数参数添加一个访问限定符来声明。使用private限定一个参数属性回声明并初始化一个私有成员；对于  public和 protected来说也是一样
var Animal4 = /** @class */ (function () {
    // 声明和赋值结合
    function Animal4(name) {
        this.name = name;
    }
    Animal4.prototype.move = function (distance) {
        console.info(this.name + " moved " + distance);
    };
    return Animal4;
}());
var a4 = new Animal4('doggy');
a4.move(100);
// 存取器：getter setter
// 没有getter， setter的版本
var Employee2 = /** @class */ (function () {
    function Employee2() {
    }
    return Employee2;
}());
var employee2 = new Employee2();
employee2.fullName = 'Bob smith';
if (employee2.fullName) {
    console.info(employee2.fullName);
}
// 设置了 getter， setter
var password = 'secret password';
var Employee3 = /** @class */ (function () {
    function Employee3() {
    }
    Object.defineProperty(Employee3.prototype, "fullName", {
        get: function () {
            return this._fullName;
        },
        set: function (newName) {
            if (password && password === 'secret password') {
                this._fullName = newName;
            }
            else {
                console.error('not authorized');
            }
        },
        enumerable: true,
        configurable: true
    });
    return Employee3;
}());
var employee3 = new Employee3();
employee3.fullName = "Ted";
if (employee3.fullName) {
    console.info(employee3.fullName);
}
// 对于存取器，我们有下面几点需要注意：首先，存取器需要我们把编译器设置为输出 ecmascript 5或者更高。其次，只带有 get不带有 set的存储器自动被推断为 readonly。这在从代码生成.d.ts文件是有帮助的，因为利用这个属性的用户会看到不允许够改变它的值
// 静态属性：类分为实例成员(仅当类被实例化的时候才会被初始化的属性)，静态属性(存在于类本身上面而不是类的实例上)
var Grid = /** @class */ (function () {
    function Grid(scale) {
        this.scale = scale;
    }
    // 注意此处参数的声明方式
    Grid.prototype.calculateDistanceFromOrigin = function (point) {
        var xDist = (point.x - Grid.origin.x);
        var yDist = (point.y - Grid.origin.y);
        return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
    };
    Grid.origin = { x: 0, y: 0 };
    return Grid;
}());
var grid1 = new Grid(1.0);
var grid2 = new Grid(5.0);
console.info(grid1.calculateDistanceFromOrigin({
    x: 10, y: 10
}));
console.info(grid2.calculateDistanceFromOrigin({
    x: 10, y: 10
}));
// 抽象类：抽象类作为其他派生类的基类使用。 他们一般不会被直接实例化。不同于接口，抽象类可以包含成员的实现细节。abstract关键字是用于定义抽象类和在抽象类内部定义抽象方法
// 抽象类中的抽象方法不包含具体实现并且必须在派生类中实现。抽象方法的语法与接口方法相似。两者都是定义方法签名但不包含方法体。然而，抽象方法必须包含abstract关键字并且可以包含访问修饰符
var Animal5 = /** @class */ (function () {
    function Animal5() {
    }
    Animal5.prototype.move = function () {
        console.info('roaming the earth');
    };
    return Animal5;
}());
var Department = /** @class */ (function () {
    function Department(name) {
        this.name = name;
    }
    Department.prototype.printName = function () {
        console.info('Department name:', this.name);
    };
    return Department;
}());
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment() {
        return _super.call(this, 'Accounting and Auditing') || this;
    }
    AccountingDepartment.prototype.printMeeting = function () {
        console.info('child');
    };
    AccountingDepartment.prototype.generateReports = function () {
        console.info('generating reports...');
    };
    return AccountingDepartment;
}(Department));
var department; //允许创建一个对抽象类的引用
// department = new Department() //不允许创建抽象类的实例
department = new AccountingDepartment(); //允许对一个抽象子类进行实例化和赋值
department.printName();
department.printMeeting();
// department.generateReports() // 方法在声明的抽象类中不存在
//把类当做接口使用:类定义会创建两个东西：类的实例和一个构造函数。因为类可以创建出类型，所以你能够在允许使用接口的地方使用类
var PointX = /** @class */ (function () {
    function PointX() {
    }
    return PointX;
}());
var point3d = {
    x1: 1,
    y1: 2,
    z: 3
};
/*
函数


*/
// 完整的函数类型:注意区别定义函数类型和定义函数返回值类型的写法不同;对于函数类型定义中的返回值，我们在函数和返回值类型之前使用(=>)符号，使之清晰明了，它是函数类型的必要部分，如果函数没有返回值，也必须指定返回值类型为void而不能留空。函数的类型只是由参数类型和返回值组成的。函数中使用的捕获变量不会体现在类型里。实际上，这些变量是函数的隐藏状态并不是组成API的一部分
var myAddFunc = function (x, y) {
    return x + y;
};
// 可选参数和默认参数：使用参数名旁使用？实现可选参数的功能;可选参数必须跟在必选参数后面，如果我们希望first name是可选的，那么就必须调整它们的位置，把firstName后面
function buildName(firstName, lastName) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    else {
        return firstName;
    }
}
var r1 = buildName('Bob', 'Allen');
var r2 = buildName('Bob');
// let r3 = buildName('Bob','Allen', 's')
// 剩余参数

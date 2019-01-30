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
    color: 'black'
});
console.log(mySquare);
var p1 = {
    x: 10,
    y: 20
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
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function () { };
    return Snake;
}(Animal2));

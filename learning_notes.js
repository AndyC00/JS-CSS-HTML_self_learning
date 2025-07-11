//1. value
// Primitive Value (Parameters store in Stack):
// Types: Number, Boolean, String, undefined, null
//      It's unable to change, represent the value itself, store in the stack


// Reference Value (Parameters in Heap):
// Types: Array, Object, Function
//      The value stores a reference pointing to the object store in the memory, not store the object itself


//2. var
// var a = 1;
// var b = --a + --a;
// document.write(b);   //will return -1


//3. typeof & parse:
/*var n = parseInt(window.prompt('input'), 2);
document.write(n + " ");
console.log(typeof(n));*/

var demo = "120.23.45jnj";
var num = parseFloat(demo);
console.log(typeof (num) + " " + num);


//4. String, toString:
var demo = "120";
var num = String(demo);
var num = demo.toString();  //equivalent writing method. Not applied to null or undefined
console.log(typeof (num) + " " + num);


//5. object:
//1). plain object:
var Object1 =
{
    //use ':' to assign the value
    //key   value
    Name: "Hey",
    num: 5,
    bii: false,
    gamer: function () { console.log("I'm a gamer"); }
}
//using '.' to access its property
Object1.bii = true;
//adding new property and value:
Object1.age = 18;
//if viewing a property which is not exist, it will return undefined
//2). constructor object:
//naming rule: the first letter should be capitalized
//use 'new' to create a constructor object:
function Person()
{
    this.name = "Hey";
    this.age = 18;
    this.gamer = function () { console.log("I'm a gamer"); }
}
var p = new Person();
//when keyword new is used, it will initially create a new object and return it:
/* function Person()
{
    var this = {};
    content...
    return this;
} */
//!!note: the name for properties in the object are all string type


//6. funcion
//using key word "function" to declare function, no return type like void, int, float...
//can't define function within if() or for() or while() or switch()
function test() { }
//=
var test = function () { };
//or
var test = function abc() { }; //name abc will be ignored (but print out test.name will show "abc" rather than "test")
//no type in front of taking variables:
function add(a, b)
{
    document.write(a + b);
    return a + b;
}


//7. arguments
//function can take more variables than it declared, all variables will be stored in its arguments
function sum(a, b)
{
    a = 4;
    arguments[1] = 3;
    console.log("the sum of the taking variables are " + (a + b));
    console.log("the length of the argument is " + sum.arguments.length);  //how many parameters took when use will be the length of argument list: 5
}
sum(1, 2, 3, 4, 5);
//then, if the parameters taking is less than it declared, the length still the taking amount:
//for example, in sum(1) the b will be undefined and sum.arguments.length will be 1
//naming rules:
//a, b are called Parameter/Formal Parameter
//1, 2, 3, 4, 5 are called Argument/Actual Parameter


//8.Scope
//imply global:
//window is the global scope: global variables all belong to object "window":
var w = 2;
//equals to:
window.w = 2;
//if assign a value to a variable without declare, it will make the variable global:
e = 3;  //e will be global variable and become a property of window


//9. Hoisting (pre-compile):
//Process of Hoisting in a function: 
//1. Create AO (activation object):     AO{ }
//2. looking for parameters and arguments, use their names as the AO's properties' names. The value will be undefined (doesn't matter for if() or for())
//3. assign the value to parameter if there are any passed arguments
//4. looking for function declaration in this function
//5. then compile the rest of sentence in the function. after that, function finished
//Process of Hoisting globally:
//1. Create GO (Global Object), GO === window, it's the same thing
//if there's a local variable has the same name as a global variable, it will try use the local variable first. If can't find it, then try using the global variable
//2. - 5. will be the same as hoisting in function
//no matter where declare the function, it will always be lifted up to the top (after variable declaration) when excuting the program
test2();    //it can run
function test2() { }
//variables declaration (but without assign value) will be hoisting to the top：
console.log(p); //will print out undefined rather than report error
var p;
p = 2;


//10. Property
//All functions have properties without declare. Those we can access:
//Function.prototype, Function.length, Function.name, Function.caller, Function.arguments
//Function.prototype: the prototype of the function
//Function.length: the number of parameters the function takes
//Function.name: the name of the function
//Function.caller: the function that calls this function
//Function.arguments: the arguments of the function
console.log(test2.prototype);    //will print out {}


//11. Scope
//scope of a function is the function itself and also one of the properties: [[scope]] (but unable to access)
//when function is excuting, it will create a inside object called AO (Activation Object) or excuting context. (if the function is not excuting, the inside content won't be seen, for example it will not create AO)
//A excuting context defines the context when function is excuting. Every excuting context is unique and everytime a function is excuting, it will create a new excuting context
//So when excuting a function multiple times, it will create multiple excuting context
//when the function is excuted, its excuting context will be destroyed
//scope chain: the list of the excuting context stored in [[scope]] is called scope chain. The list connects context like a chain
//when a function is excuting:
//1. create a reference of GO which is the copy of the global object. The GO will be the first object in the scope chain
//(if the function is within another function, the AO of the outer function will be the first object in the scope chain)
//2. create its own AO, upper AO to the top of the scope chain (GO comes to the second)
//when searching a variable, it will search from the top of the scope chain to the bottom


//12. Closure
//If an inside function is stored in a variable and the outside function returns the inside function, the inside function will be called closure
//The outside function will be destroyed after excuting, but the inside function will still have the scope chain of the outside function
//The inside function can still access the outside function's variable
function outer()
{
    var a = 1;
    function inner()
    {
        console.log(a);
    }
    return inner;
}
var tests = outer();
tests();    //will print out 1


//13. Immediatly Invoked Function Expression (IIFE)
//a function that is excuted immediately after it's created then destroyed
//use (function(){})() or (function(){}())to create IIFE
//can have name but it's not necessary
//when taking parameters, it will be like:
var num =
    (function (a, b, c)
    {
        var d = a + b + c;
        console.log(d);
        return d;   //can return a value
    }(1, 2, 3));
//!Only expressions can be executed with the invocation operator!
//So function test(){}(); will report error but not + function test(){};
//invocation operator: ()
//IIFT will ignore the name of the function
// ({})(); will report error


//14. Prototype
//prototype is a property of a function, it's an object
//It defines the properties and methods of the parent object
Person.prototype.age = 18;
function Person() {
    this.age = 20;
}
var person = new Person();
console.log(person.age);    //will print out 20 (using the property of the object itself first)
Person.prototype.print = function () { console.log("Hello"); }
var person2 = new Person();
person2.print();    //will print out Hello
//when to use:
//the properties and methods written in the constructor function will be created multiple times when creating new objects
//so we can use prototype to create the properties and methods that all objects will share
//a object can be assigned to another object's prototype:
var Object1 = { name: "WAAAAAAH" };
person.prototype = Object1;
//or
person.__proto__ = Object1; //__proto__ is the prototype of the object
//__proto__ and prototype are all pointing to the prototype of the object in the memory area
//if changing the prototype of the object, the __proto__ will also change (while they are pointing to the same memory area)
//however, either __proto__ or prototype can be changed by assigning a new object to it, after that, they will point to different memory area
person.prototype = {};  //__proto__ will still point to the original memory area with name: "WAAAAAAH"


//15. Prototype Chain
//looks like the Grand-Father-Son prototype chain,
//However, the Grand has its own prototype: Object()
//Object() is the prototype of most of the objects
//Grand.prototype.__proto__ = Object.prototype
Grand.prototype.Name = "Andy";
function Grand() {
    this.Fortune = {
        Card1: "Visa"
    }
}
var grand = new Grand();

Father.prototype = grand;
function Father() {
    this.lastName = "Smith";
    this.hobbit = {
        hobbit1: "Reading"
    }
}
var father = new Father();

Son.prototype = father;
function Son() {
    this.car = "BMW";
}
var son = new Son();
son.toString(); //the toString() is a method of Object.prototype
//child can't change the property of the parents directly, but it can change the property by reference:
son.Name = "Tom";   //add "Tom" to the son but Father.prototype.Name won't change
son.hobbit.hobbit2 = "Shopping"; //son's property won't change but father.prototype.Name will change
son.Fortune.card2 = "Master";   //grand's property will change
//A way to create inherited objects:
//Object.create(the prototype you want):
grandson = Object.create(son);
//Object() is the prototype of all the objects except undefined, null or:
obj1 = Object.create(null);    //create a object without prototype

//further more about prototype chain:
//why abc.toSting() can work:
//1. automatically create a object: var abc = new Object();
//2. abc.__proto__ = Object.prototype
//3. abc.toString() is a method of Object.prototype

//the method of Object.prototype can be modified and applied to all the objects:
Number.prototype.toString = function () { return "Hello"; }
123..toString();    //will print out "Hello"


//16. Calculation Accuracy:
//The calculation accuracy of JavaScript is 16 numbers in front of the decimal point
//and 16 numbers behind the decimal point
console.log(0.10000000000000001 + 0.10000000000000001); // will return 0.2


//17. call / apply
//call():
function test3(name, age) {
    this.name = name;
    this.age = age;
}
var person = new test3();
var obj = {};

test3.call(obj, "randomName", 18);    //the first parameter in call() is the object that the function will be called
//the rest of the parameters are the parameters of the function
//call() will change keyword "this" in the object pointing to the first parameter received
console.log(test3.name);    //won't print out anything since this in the test3 is pointing to obj
//use of call():
function Person2(name, age, gender) {
    this.name = name;
    this.age = age;
    this.gender = gender;
}
function Student(name, age, gender, grade, address) {
    Person2.call(this, name, age, gender);
    this.grade = grade;
    this.address = address;
}
//apply():
//call() needs to pass the arguments one by one, as same amount as the function's parameters
//apply() needs to pass the arguments in an array:
function Student2(name, age, gender, grade, address) {
    Person2.apply(this, [name, age, gender]);
    this.grade = grade;
    this.address = address;
}

//18. Inheritance
//the idea of the inheritance:
function inherit(Target, Origin) {
    Target.prototype = Origin.prototype;    //but in this case when changing the Target.prototype, the Origin.prototype will also change
}
//Holy Grail Pattern (the inherit pattern with no issues):
function inherit(Target, Origin) {
    function F() { };
    F.prototype = Origin.prototype;
    Target.prototype = new F();
    Target.prototype.constructor = Target;
    Target.prototype.uber = Origin.prototype;
}
//further with function closure:
var inherit = (function () {
    var F = function () { };
    return function (Target, Origin) {
        F.prototype = Origin.prototype;
        Target.prototype = new F();
        Target.prototype.constructor = Target;
        Target.prototype.uber = Origin.prototype;
    }
}());


//19. Using functions continuously
var obj = {
    gaming: function () {
        console.log("Playing a game");
        // will implicitly return undefined
        return this;    //to make the function can be used continuously
    },
    studying: function () {
        console.log("Studying");
        return this;
    },
    reading: function () {
        console.log("Reading a book");
        return this;
    },
}
obj.gaming().studying().reading().gaming();    //will print out the three sentences and return obj


//20. []
// when compiler read '.', it will convert it to '[]' first
// obj.name = obj["name"] = obj["n" + "a" + "m" + "e"]
// moreover:
obj.sayHobby = function (hobby) {
    return this[hobby + "ing"];
}
obj.sayHobby("gam");


//21. for in
//for in can be used to traverse the properties of an object
//same as foreach in C#
for (var prop in obj)   //the prop here represents the key(name) of the property
{
    console.log(prop + " : " + typeof (prop));
}   //will print out the name of the properties and the types will always be string

for (var prop in obj) {
    console.log(obj[prop] + " : " + typeof (obj[prop]));
}
//will print out the value of the properties and the types of the values

//However, the for in will also traverse the properties in the prototype chain (except the end of the prototype chain: Object.prototype, unless manuelly add the properties to the Object.prototype)
//to avoid this, use hasOwnProperty():
for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) {
        console.log(prop + " : " + typeof (prop));
    }
}


//23. this
//during the hoisting process in a function, the this will be assigned to window
//In the global scope, this will be assigned to window\
//obj.func(); the this in the function will be assigned to obj

function test4() { console.log(this); }
var a = {
    say: function (fun) {
        test4();    //will print out window
    }
}
//to solve this problem, use this.test4() to explicitly change the this to obj a


//24. clone
var object1 = {
    name: "abc",
    age: 18,
    card: ['1', '2', '3'],
    family: {
        name: "name",
        grandparent: {
            grandmom: "grandmom",
            granddad: "granddad"
        }
    }
}
var object2 = {};
//shallow clone:
function clone(origin, target)
{
    var target = target || {};  //if target is not given, create a new object
    for (var prop in origin)
    {
        target[prop] = origin[prop];
    }
}
clone(object1, object2);
object1.card.push('4');    //object2.card will also add that
//to solve this problem:
//deep clone:
function deepClone(origin, target) 
{
    var target = target || {};

    toStr = Object.prototype.toString;
    arrStr = "[object Array]";

    for (var prop in origin) 
    {
        if (origin.hasOwnProperty(prop)) 
        {
            if (origin[prop] !== "null" && typeof (origin[prop]) == "object") 
            {
                target[prop] = (toStr.call(origin[prop]) == arrStr) ? [] : {};

                deepClone(origin[prop], target[prop]);  //recursion
            }
            else
            {
                target[prop] = origin[prop];
            }
        }
    }

    return target;
}


//25. trinomial operator
// format:     condition ? true : false
// if the condition is true, return the true excusion result, otherwise return false's
//example:
var p = 1 > 0 ? 2 + 2 : 1 + 1;
console.log(p); //p will be 4


//26. array
//array is special type of object, the index is the property of the object

//simulate push function for array:
Array.prototype.push = function () 
{
    for (var i = 0; i < arguments.length; i++) 
    {
        this[this.length] = arguments[i];
    }
    return this.length;
}

//pop: cut the last element of the array and return it
var array1 = [1, 2, 3, 4, 5];
var numb = array1.pop;  //numb will be 5

//shift: cut the first element of the array and return it
numb = array1.shift;    //numb will be 1

//unshift: add the element to the front of the array and it's able to add multiple elements
array1.unshift(0, -1, -2);
console.log(array1);    //will print out [0, -1, -2, 1, 2, 3, 4, 5]

//splice: cut the elements from the array and return them
//format: array.splice(the start buffer, deleteCount, addElement1, addElement2, ...)
numb = array1.splice(1, 2); //numb will be [0, -1]
console.log(array1);    //will print out [0, 1, 2, 3, 4, 5]
array1.splice(1, 0, 6, 7);   //will add 6, 7 to the array1
console.log(array1);    //will print out [0, 6, 7, 1, 2, 3, 4, 5]
//the start buffer number can be minors, if it's minors, it will start counting from the end of the array

//sort: sort the array
array1.sort();  //will sort the array in ascending order by ascii code
console.log(array1);    //will print out [0, 1, 2, 3, 4, 5, 6, 7]
array1.unshift(10, 20, 30);
console.log(array1.sort());   //will print out [0, 1, 10, 2, 20, 3, 30, 4, 5, 6, 7]
//to solve this problem, use a function to sort 
//(has to take 2 parameters) and
//when the return value is minors, the first parameter will be put in the front
//when the return value is majors, the second parameter will be put in the front
//when the return value is 0, the order won't change
array1.sort(function(a, b){
// if(a > b)
// {
//     return 1;
// }
// else if(a < b)
// {
//     return -1;
// }
// else
// {
//     return 0;
// }
return a - b;
});
console.log(array1);
//disorder the array:
array1.sort(function(a, b){
    return Math.random() - 0.5;
});
console.log(array1);
//sort the order of an object array by its property:
var array2 = [{name: "Andy", age: 18}, {name: "Tom", age: 20}, {name: "Jerry", age: 15}];
array2.sort(function(a, b){
    return a.age - b.age;
});
console.log(array2);

//slice:
//format: array.slice(start buffer, until buffer)
//will return the elements from start buffer to until buffer (but not cut from the original array)
var numb = array1.sort(function(a, b){return a - b;}).slice(0, 2);
console.log(numb);  //will print out [0, 1]
newArray = array1.slice();  //return the entire array

//join:
//format: array.join(separator)
//will join the elements of the array with the separator then return the array as a string
var str = newArray.join("-");
console.log(str);    //will print out 0-1-2-3-4-5-6-7-10-20-30
//split:
//format: string.split(separator)
//will split the string into an array with the separator
var array3 = str.split("-");
console.log(array3);    //will print out [0, 1, 2, 3, 4, 5, 6, 7, 10, 20, 30]

//Array-like object:
//to create an array-like object:
//1. the property name should be index (number)
//2. It must have a length property
var obj2 = {
    0: "a",
    1: "b",
    2: "c",
    length: 3,
    push: Array.prototype.push,
    splice: Array.prototype.splice
}
//Array-like object can't use the array's method directly, but can use the array's method by assigning the method to the object



//Others...
//a. null and undefined:
null == undefined;  //will return true
null === undefined; //will return false
// === is the strict equal, it will compare the type and the value
// == is the equal, it will compare the value only

//b. instanceof:
//to check if B's prototype is on A's prototype chain:
// A instanceof B

//c. .callee
//arguments.callee is the function itself
// object1.arguments.callee === object1; //will return true
//example of usage:
var factorial = function (n) {
    if (n === 1) {
        return 1;
    }
    return n * arguments.callee(n - 1);
}

//d. .caller
//the function that calls the function
function test5() {
    function test6() {
        console.log(test6.caller);
    }
    console.log(test5.caller);  //will print out null
    test6();    //will print out the function test5
}

//e. remove duplicate elements from array
var array4 = [1, 2, 3, 4, 5, 1, 2, 3];
Array.prototype.unique = function ()
{
    var temp = {};
    var arr = [];
    len = this.length;

    for (var i = 0; i < len; i++)
    {
        if (!temp[this[i]])
        {
            temp[this[i]] = "abc";
            arr.push(this[i]);
        }
    }

    return arr;
}

//f. Object package:
var num = 123;
num.abc = "abc";    //Primitive value can't add properties
//to avoid error what backend will do: new Number(num).abc = "abc";  then delete num.abc
console.log(num.abc);   //will new Number(num) to avoid error
// the result will be undefined

//g. Object.create()
var demo = {
    name: "Andy"
}
var obj3 = Object.create(demo); //obj3 will have the prototype of demo
//obj = {
//    __proto__: demo
//}
//syntax: Object.create(prototype, definedProperty)

//h. delete
//delete the property of an object but cannot delete the global property
delete obj3.name; //will delete the property name of obj3
delete obj3; //will delete the object obj3


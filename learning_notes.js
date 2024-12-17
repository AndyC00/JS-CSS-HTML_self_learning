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
var Object1 =
{
    //use ':' to assign the value
    //key   value
    Name: "Hey",
    num: 5,
    bii: false
}
//using '.' to access its property
Object1.bii = true;

//6. funcion
//using key word "function" to declare function, no return type like void, int, float...
//can't define function within if(){}
function test() { }
//=
var test = function () { };
//or
var test = function abc() { }; //name abc will be ignored (but print out test.name will show "abc" rather than "test")
//no type in front of taking variables:
function add(a, b) {
    document.write(a + b);
    return a + b;
}

//7. arguments
//function can take more variables than it declared, all variables will be stored in its arguments
function sum(a, b) {
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
    //3. sync the value of argument with the parameter
    //4. looking for function declaration in this function
    //5. then compile the rest of sentence in the function. after that, function finished
//Process of Hoisting globally:
    //1. Create GO (Global Object), GO === window, it's the same thing
        //if there's a local variable has the same name as a global variable, it will try use the local variable first. If can't find it, then try using the global variable
    //2. - 5. will be the same as hoisting in function
//no matter where declare the function, it will always be lifted up to the top (after variable declaration) when excuting the program
test2();    //it can run
function test2()    { }
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
//scope of a function is the function itself and also one the properties: [[scope]] (but unable to access)
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
(function(a, b, c)
{
    var d = a + b + c;
    console.log(d);
    return d;   //can return a value
}(1, 2, 3));
//!Only expressions can be executed with the invocation operator!


// 1. value
// Primitive Value (Parameters store in Stack):
// Types: Number, Boolean, String, undefined, null
//      It's unable to change, represent the value itself, store in the stack

// Reference Value (Parameters in Heap):
// Types: Array, Object, Function
//      The value stores a reference pointing to the object store in the memory, not store the object itself


// 2. var
// var a = 1;
// var b = --a + --a;
// document.write(b);   //will return -1

//3. typeof & parse:
var n = parseInt(window.prompt('input'), 2);
document.write(n + " ");
console.log(typeof(n));

var demo = "120.23.45jnj";
var num = parseFloat(demo);
console.log(typeof(num) + " " + num);

//4. String, toString:
var demo = "120";
var num = String(demo);
var num = demo.toString();  //equivalent writing method. Not applied to null or undefined
console.log(typeof(num) + " " + num);

//5. object:
var Object1 =
{
    //use ':' to assign the value
    //key   value
    Name : "Hey",
    num : 5,
    bii: false
}
//using '.' to access its property
Object1.bii = true;

//6. funcion
//using key word "function" to declare function
function test() { }
//=
var test = function () {};
//or
var test = function abc() {}; //name abc will be ignored (but print out test.name will show "abc" rather than "test")
//no type in front of taking variables:
function add (a, b)
{
    document.write(a + b);
    return a + b;
}

//7. 

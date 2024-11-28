// Primitive Value (Parameters store in Stack):
// Types: Number, Boolean, String, undefined, null
//      It's unable to change, represent the value itself, store in the stack

// Reference Value (Parameters in Heap):
// Types: Array, Object, Function
//      The value stores a reference pointing to the object store in the memory, not store the object itself


// var a = 1;
// var b = --a + --a;
// document.write(b);   //will return -1

    //typeof & parse:
var n = parseInt(window.prompt('input'), 2);
document.write(n + " ");
console.log(typeof(n));

var demo = "120.23.45jnj";
var num = parseFloat(demo);
console.log(typeof(num) + " " + num);

    //String, toString:
var demo = "120";
var num = String(demo);
var num = demo.toString();  //equivalent writing method. Not applied to null or undefined
console.log(typeof(num) + " " + num);

    //object:
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


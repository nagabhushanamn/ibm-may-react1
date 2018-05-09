

1.

// function foo(b) {
//   var a = 10;
//   return a + b + 11;
// }

// function bar(x) {
//   var y = 3;
//   return foo(x * y);
// }

// console.log(bar(7)); //returns 42


2.

// function foo() { }
// function bar() { foo() }
// function baz() { bar() }
// baz();

3.


// function foo() { throw new Error('oops') }
// function bar() { foo() }
// function baz() { bar() }
// baz();

// 4.

// function foo() { foo() }
// foo();

// 5.

// function longRunning() {
//   var i = 0;
//   while (i < 5) {
//     console.log('im long...');
//     i++;
//   }
// }

// function shortRunning() {
//   console.log('short running..');
// }

// longRunning();
// shortRunning();

//---------------------------------------------


// 6. 


/*

<button class="veg">veg-button</button>
<button class="non-veg">non-veg-button</button>

*/


// console.log('initial script....');
// $.on('.veg', 'click', function vegHandler(e) {
//   console.log('handling event on .veg elements ');
// })
// $.on('.non-veg', 'click', function nonVegHandler(e) {
//   console.log('handling event on .non-veg elements ');
// })
// console.log('cont with other work...');
// function longRunning() {
//   var i = 0;
//   while (i < 5) {
//     console.log('im long...');
//     i++;
//   }
// }
// longRunning();


//-------------------------------------------------


// 7.


console.log('start script....');

// IO
setTimeout(function(){
  console.log('after timeout....');
},1000);

console.log('cont with other work...');
function longRunning() {
  var i = 0;
  while (i < 5) {
    console.log('im long...');
    i++;
  }
}
longRunning();





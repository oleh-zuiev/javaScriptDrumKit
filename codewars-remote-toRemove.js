// https://sinyakov.com/frontend/problems.html
// ==================================================================
// ============================String insert values==================
// ==================================================================
// Given a string and an object/array you need to return a formatted string. Replace all occurrences in the string where the name of a key in the object is surrounded by curly brackets.

// Inherited object properties should not be applied

// An example says more than a thousand words..
// ----------------------
// Example using object
// var s = 'Hello {foo} - make me a {bar}';
// var o = {
//   foo : 'Jack',
//   bar : 'sandwich'
// };

// format(s, o); // "Hello Jack - make me a sandwich"
// -----------------------------
// Example using array

// var s = 'Hello {0} - make me a {1}';
// var a = ['Jack', 'sandwich'];

// format(s, a); // "Hello Jack - make me a sandwich"
// -----------------------Tests-------------
// describe("Tests", () => {
//   it("test", () => {
// var obj = { foo : 'Jack', bar : 'sandwich' };

// Test.assertEquals(
//   format('Hello {foo} - make me a {bar}', obj),
//   "Hello Jack - make me a sandwich"
// );

// Test.assertEquals(
//   format('Hello {foo} - {foobar} make me a {bar}', obj),
//   "Hello Jack - {foobar} make me a sandwich"
// );

// Test.assertEquals(
//   format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', obj),
//   "Hello Jack - {foobar} make me a sandwich... Jack!!?"
// );

// Test.assertEquals(
//   format('Hello {foo} - {foobar} make me a {bar}... {foo}!!?', { bar : 'sandwich {foo}', foo : 'Jack' }),
//   "Hello Jack - {foobar} make me a sandwich {foo}... Jack!!?"
// );

// Test.assertEquals(
//   format('Hello {0} - {foobar} make me {2} {1} - I\'m full..', ['Jack', 'sandwiches', 0]),
//   "Hello Jack - {foobar} make me 0 sandwiches - I\'m full.."
// );
//   });
// });
// ---------------------solution---------------
var format = function (str, obj) {
  
};
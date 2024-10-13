// How to remove Falsy values from an array?

let miscellaneous = ['fruit', false, 'fruit', NaN, 0, undefined, 'fruit', null, '', 'fruit'];

let fruits = miscellaneous.filter(Boolean);
console.log(fruits);
// Import using ESModule
import getPosts, { getPostsLength } from "./postController.js";

console.log(getPosts());

console.log(getPostsLength());


// Import using CommonJS
// const { generateRandomNumber, celciusToFahrenheit } = require('./utils');

// console.log(`Random Number : ${generateRandomNumber()}`);

// console.log(`Temp in F' : ${celciusToFahrenheit(46)}`);
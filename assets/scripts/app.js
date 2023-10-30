//import { apiKey } from "./util.js"
//import { apiKey, abc } from "./util.js"

//import { apiKey, abc as content } from "./util.js";

//import * as util from "./util.js"

//console.log(util.apiKey);
//console.log(content);

//const userMessage = "Hello world";
//console.log(userMessage)

function createGreeting(userName, message = " hello") {
  // console.log(userName);
  // console.log(message);

  return "Hi, I am " + userName + ". " + message;
}

const greet1 = createGreeting("Max");
console.log(greet1);
const greet2 = createGreeting("Manuel", "Hello, what's up?");
console.log(greet2);
// greetUser();

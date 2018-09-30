// ./utils/mod function should not get bundled
import { sum } from "./utils";
// import sass / scss modules
import "./sass/main";

console.log("2 + 2 =", sum(2, 2));
console.log("4 + 4 =", sum(4, 4));

// ES6: const initializer
// ES6: arrow function
const sayHello = hello => {
  // ES6: Array.from
  // ES6: Set
  return Array.from(new Set(hello.split(" ")));
};

// ES6: Class
class sayHi {
  constructor(hi) {
    // ES6: Spread operator
    this.message = ["What does the lib say:", ...sayHello(hi)];
  }

  // Class method
  toString() {
    return `"${this.message.join(" ")}"`;
  }
}

// Usage:  myLib() > "Good bye!"
export default function() {
  const h1 = document.createElement("h1");
  h1.innerHTML = new sayHi("Good bye! bye!");
  document.body.appendChild(h1);
  return h1.innerHTML
}

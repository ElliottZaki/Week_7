(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __commonJS = (cb, mod) => function __require() {
    return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
  };

  // add.js
  var require_add = __commonJS({
    "add.js"(exports, module) {
      module.exports = add = (a, b) => {
        return a + b;
      };
    }
  });

  // multiply.js
  var require_multiply = __commonJS({
    "multiply.js"(exports, module) {
      module.exports = multiply = (a, b) => {
        return a * b;
      };
    }
  });

  // index.js
  var add2 = require_add();
  var multiply2 = require_multiply();
  console.log(multiply2(add2(4, 4), 6));
  console.log("Hello from the developer console!");
  console.log(new Date());
})();

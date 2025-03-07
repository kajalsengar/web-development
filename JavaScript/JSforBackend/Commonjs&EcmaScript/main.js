// name module

// import {a , b ,d} from "./Mymodule.js"
// console.log(a)


//default module
// import kaju from "./Mymodule.js"
// console.log(kaju)


//common module
const a = require("./mymodule2.js")
console.log(a)

console.log(a , __dirname , __filename)
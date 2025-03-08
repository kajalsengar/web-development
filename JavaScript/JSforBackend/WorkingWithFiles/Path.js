import path, { dirname } from "path"

let myPath = "C:\\Users\\asus\\OneDrive\\Documents\\web-development\\kaju.text"
console.log(path.extname(myPath))

console.log(path.dirname(myPath))
console.log(path.basename(myPath))

console.log(path.join("c:/", "Programs\\ kaju.text"))
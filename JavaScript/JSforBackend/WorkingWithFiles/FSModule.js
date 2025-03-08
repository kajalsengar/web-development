
const fs = require("fs")
// const fs = require("fs/promises")

// console.log(fs);

console.log("Staring...");

// fs.writeFileSync("kaju.text" , "this is a good boy")
fs.writeFile("kaju2.text", "this is a good boy", () => {
    console.log('done');
    fs.readFile("kaju2.text", (error, data) => {
        console.log(error, data.toString())
    })
})

fs.appendFile("kaju.text", "radha", (e, d) => {
    console.log(d)
})

console.log('Ending...');

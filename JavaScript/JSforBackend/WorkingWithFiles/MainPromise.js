import fs from "fs/promises"

let a = await fs.readFile("kaju.text")

let b = await fs.writeFile("kaju.text", "\n\n\n this is a promise")


console.log(a.toString(),b)
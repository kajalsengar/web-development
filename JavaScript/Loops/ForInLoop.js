console.log("Heyy this is a forin loop...")

let obj={
    name: "kajal",
    role: "programmer",
    langauge: "java script"
}

for (const key in obj) {
    const element = obj[key];
    console.log(key,element)
}

for (const k of "kajal") {
    console.log(k)
}
function nice(name) {
    console.log("Hey " + name + " you are nice.")
    console.log("Hey " + name + " you are good.")
    console.log("Hey " + name + " you are your dress is nice.")
    console.log("Hey " + name + " you are looking good.")
}
// nice("kajal")
// nice("sengar")

function sum(a,b ,c=3){
    // console.log(a+b);
    return a+b+c
}

result1 =sum(2,3)
result2 =sum(5,3)
result3 =sum(7,3)

console.log("The of these numbers =" , result1)
console.log("The of these numbers =" , result2)
console.log("The of these numbers =" , result3)

const fun =(x) => {
    console.log("I am an arrow function", x)
}

fun(23);
fun(33);
fun(45);
let a = [43, 45, 26, 77, 47, 93]
for (let index = 0; index < a.length; index++) {
    const element = a[index];
    console.log(element)
}


let arr = [1, 3, 5, 7, 9];
// 
let newArr = arr.map((e) => {
    return e ** 2
}
)
console.log(newArr)
const greaterThanFive = (e) => {
    if (e > 5) {
        return true
    }
    return false
}
console.log(newArr.filter(greaterThanFive))

let arr2 = [2, 4, 6, 8]
const red = (a, b) => {
    return a * b
}
console.log(arr2.reduce(red))
console.log(Array.from("kajal"))


let a = prompt("enter a number")

let b = prompt("enter second number")

if (isNaN(a) || isNaN(b)) {
    throw SyntaxError("Sorry this is not allow..")
}

let sum = parseInt(a) + parseInt(b)
let x =1       
function main(){
try {
    console.log("sum of the number=", sum * x)
    return true
} catch (error) {
    console.log("this is a error")
    return false
}

finally {
    console.log("files are being closed and db connection is being closed ")
}
}

let c = main()
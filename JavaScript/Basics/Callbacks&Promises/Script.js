console.log("Heyy i am good..")
console.log("Heyy are you fine..")

setTimeout(() => {
    console.log("i am inside set time out..")
}, 2000);

console.log("The End")

const fn =(() => {
  console.log("nothing...")
}
)
const callback = (arg,fn) => {
    console.log(arg)
    fn()
}
const loadScript = (src, callback) => {
    let sc = document.createDocumentFragment("script")
    sc.src = src;
    sc.onload = callback("kajal" ,fn);
    document.head.append(sc)
}

loadScript("https://cdnjs.cloudflare.com/ajax/libs/prism/9000.0.1/prism.min.js", callback)
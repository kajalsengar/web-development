console.log("heyy everyone...")

// let boxes=document.getElementsByClassName("box")
// console.log(boxes)

// document.getElementsByClassName("box").style.backgroundcolor ="red"
// document.getElementById("red").style.backgroundcolor ="red"


// console.log(document.querySelector(".box").style.backgroundcolor = "green")

document.querySelectorAll(".box").forEach(e =>{
    e.style.backgroundcolor = "green"
})
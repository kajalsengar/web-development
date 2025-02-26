let button = document.getElementById("btn")

button.addEventListener("click" , ()=>{
    // alert("i was clicked...")
    document.querySelector(".box").innerHTML ="<b> Yayy you were clicked </b> enjoy your click"
})


button.addEventListener("contextmenu" , ()=>{
    alert("Right click please")
})

button.addEventListener("keydown" , (e)=>{
    // alert("Press the key please")
    console.log(e.key )
})
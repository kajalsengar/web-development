alert('kajal');
console.log('This is Promises');

let prom1 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes i am done")
            resolve("kanha")
        }, 3000);
    }
})

let prom2 = new Promise((resolve, reject) => {
    let a = Math.random();
    if (a < 0.5) {
        reject("No random number was not supporting you")
    }
    else {
        setTimeout(() => {
            console.log("Yes i am also done")
            resolve("radha")
        }, 1000);
    }
})

// prom1.then((a) => {
//     console.log(a)
// }).catch((err)=>{
// console.log(err)
// })

let p3= Promise.allSettled([prom1,prom2])
p3.then((a)=>{
    console.log(a)
}).catch(e=>{
    console.log(err)
})

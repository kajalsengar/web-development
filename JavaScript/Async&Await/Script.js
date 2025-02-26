async function getData() {
    return new Promise((resolve, resect) => {
        setTimeout(() => {
            resolve(455)
        }, 3000);
    })
}

async function getData() {
    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    let data = await x.json
    // console.log(data)
    // return 455
    return data
}

async function main() {

    console.log("Loading modules")

    console.log("Do something else")

    console.log("Load Data")

    let data = await getData()

    console.log(data)

    console.log("Process data")

    console.log("Task 2")

}

main()
// data.then((v)=>{


// console.log(data)

// console.log("Process data")

// })
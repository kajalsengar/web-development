console.log("Let`s write some java script");


async function main(){
    let a = await fetch("http://127.0.0.1:3000/Project/Spotify/Songs")
    let response= await a.text;
    console.log(response)
}


main()
const JokeContainer = document.getElementById("joke");
const btn = document.getElementById("btn");
const url="https://v2.jokeapi.dev/joke/Any?type=single";


let getJoke = () => {
    fetch (url)
    .then (data=>data.json ())
    .then (item=> {
    JokeContainer.textContent=`${item.joke}`;
});
}

btn.addEventListener("click" , getJoke)
getJoke ();
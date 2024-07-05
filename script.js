const BASE_URL = "http://www.omdbapi.com/?t=";
const apiKey = "apikey=58b198a";

const btn = document.querySelector("#browse-box");


const getData = async () =>{
    const movieName = document.querySelector("#Movie-name").value;
    const movieYear = document.querySelector("#Movie-year").value;
    const URL = `${BASE_URL}${movieName}&y=${movieYear}&${apiKey}`;
    const response = await fetch(URL);
    const data = await response.json();
    document.querySelector("#Title").innerText = data["Title"];
    document.querySelector("#Year").innerText += `- ${data["Year"]}`;
    document.querySelector("#Released").innerText += `- ${data["Released"]}`;
    document.querySelector("#Runtime").innerText += `- ${data["Runtime"]}`;
    document.querySelector("#Genre").innerText += `- ${data["Genre"]}`;
    document.querySelector("#Plot").innerText += `- ${data["Plot"]}`;
    document.querySelector("#Language").innerText += `- ${data["Language"]} `;
};
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    getData();
});
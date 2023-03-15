const btnel = document.getElementById("btn");
const jokeel = document.getElementById("joke");
const apiKey = "raOYDHRJjSkRquprh7Ia1w==9zdtNwscoPndkDKX";
const options = {
    method: "GET",
    headers: {
        "X-Api-Key": apiKey,
    },

};

const apiURL = "https://api.api-ninjas.com/v1/dadjokes?limit=1"

async function getJoke(){
    try {
        jokeel.innerText = "Updating...";
    btnel.disabled = true;
    btnel.innerText = "Loading..."
    const response = await fetch(apiURL, options);
    const data = await response.json();
    btnel.disabled = false;
    btnel.innerText = "Tell me a joke";
    jokeel.innerText = data[0].joke;
    
        
    } catch (error) {
        jokeel.innerText = "An error occured, try again later";
        btnel.disabled = false;
    btnel.innerText = "Tell me a joke";
    }
   
    
}

btnel.addEventListener("click", getJoke)
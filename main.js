//------------
//Query the buttons and areas where i want to display dom elements.
//------------
const apiKey = document.getElementById("APIKey")
const inpKey = document.getElementById("inpKey")
const inpName = document.getElementById("inpID")
const btnInsert = document.getElementById("btnInsert")
let row = document.querySelector(".row")
//------------
//Query the card stats
//------------
const species = document.getElementById("species");
const nametoprow = document.getElementById("nametoprow");
const durability = document.getElementById("durability")
const combat = document.getElementById("combat")
const intel = document.getElementById("intel")
const power = document.getElementById("power")
const speed = document.getElementById("speed")
const strength = document.getElementById("strength")

//------------
//Query the back card stats
//------------
const appearance = document.querySelector(".appearance")
const biography = document.querySelector(".biography")
const eyecolor = document.getElementById("eyecolor")
const gender = document.getElementById("gender")
const haircolor = document.getElementById("haircolor")
const height = document.getElementById("height")
const weight = document.getElementById("weight")
const aliases = document.getElementById("aliases")
const alignment = document.getElementById("alignment")
const publisher = document.getElementById("publisher")
const race = document.getElementById("race")
const occupation = document.getElementById("occupation")
const base = document.getElementById("base")

//-------------
// Search help feature and api call for it
//-------------
const helpInput = document.getElementById("helpInput")
const helpbtn = document.getElementById("helpbtn")
const output = document.getElementById("output")

helpbtn.addEventListener("click", function () {
    let URL = `https://superheroapi.com/api/3935852106501451/search/${helpInput.value}`
    fetch(URL)
    .then(response => response.json())
    .then(data => data.results.map((item) => {
            searchHTML(data)
            function searchHTML() {
                helpHTML = `<div id="box1"><img id="thumbnails" src="${item.image.url}">${item.name}</div>`
                output.innerHTML += helpHTML;
        }
    }));
}) 


//-------------
// API CALL arrays
//-------------
let arr = [];
let superheroArr = [];


function APIcall() {
    for (let i = 1; i < 732; i++) {
        let URL = `https://superheroapi.com/api/3935852106501451/${i}`
        arr.push(axios.get(URL))
    }
    Promise.all(arr).then((response) =>
        response.map(res => {
            superheroArr.push(res.data)
        })
    ).catch((err) => console.log(err));

    if (superheroArr.length === 731){
        btnInsert.style.background = "green"
        btnClear.style.background = "red"
    } console.log(superheroArr)
} APIcall()



//loading screen to grab api
// make an alert or sign that can close after 20 seconds (give time for api call to work.)
// function xForce() {

// } xForce()
species;
let charName;
let charImage;
let collectionArr = [];
let storedURLs = JSON.parse(localStorage.getItem('collectionArr'));

//-------------
//Call for a hero using their name.
//-------------

btnInsert.onclick = function () {
    for (i = 0; i < superheroArr.length;i++){
        if (superheroArr[i].name === inpName.value){
            //-------------
            // Card stats
            //-------------
            species.innerHTML = `Race: ${superheroArr[i].appearance.race}`
            console.log(species)
            nametoprow.innerHTML = `Name: ${superheroArr[i].name}`
            durability.innerHTML = `Health: ${superheroArr[i].powerstats.durability}`
            combat.innerHTML = `Combat: ${superheroArr[i].powerstats.combat}`
            intel.innerHTML = `Intel: ${superheroArr[i].powerstats.intelligence}`
            power.innerHTML = `Power: ${superheroArr[i].powerstats.power}`
            speed.innerHTML =`Speed: ${superheroArr[i].powerstats.speed}`
            strength.innerHTML = `Strength: ${superheroArr[i].powerstats.strength}`
            //-------------
            // Back of card stats
            //-------------
            gender.innerHTML = `Gender: ${superheroArr[i].appearance.gender}`
            height.innerHTML = `Height: ${superheroArr[i].appearance.height}`
            weight.innerHTML = `Weight: ${superheroArr[i].appearance.weight}`
            
            race.innerHTML = `Race: ${superheroArr[i].appearance.race}`
            aliases.innerHTML = `Aliases: ${superheroArr[i].biography.aliases}`;
            alignment.innerHTML = `Alignment: ${superheroArr[i].biography.alignment}`; 
            publisher.innerHTML = `Publisher: ${superheroArr[i].biography.publisher}`; 
            occupation.innerHTML = `Occupation: ${superheroArr[i].work.occupation}`;  
            base.innerHTML = `Base: ${superheroArr[i].work.base}`;  
            //-------------
            // Image and name stats
            //-------------
            charName = superheroArr[i].name;
            charImage = superheroArr[i].image.url
            photo.style.backgroundImage = `url(${charImage})`
            let supe = superheroArr[i];
            collectionArr.push(supe)
            console.log(charImage)
        }
    }

//-------------
//---- set local storage and collection image and name
//-------------
    localStorage.setItem("collectionArr", JSON.stringify(collectionArr))
    localStorage.setItem("name", charName )
    localStorage.setItem("image", charImage )
    createHTML(charImage, charName)
    console.log(collectionArr)
}
//-------------
// Create DOM element for collection
//-------------
function createHTML(img, name) {
    let html = `<div id="box"><img id="thumbnails" src="${img}">${name}</div>`
    row.innerHTML += html;
}

if(storedURLs !== null){
    collectionArr = JSON.parse(localStorage.getItem('collectionArr')).map(x => x);
    for (i=0; i < storedURLs.length; i++){
        createHTML(storedURLs[i].image.url, storedURLs[i].name)
    }
}
//-------------
// clearing the local storage and the history
//-------------
btnClear.addEventListener('click', function () {
    localStorage.clear();
    location.reload()
    console.log("hit me");
})
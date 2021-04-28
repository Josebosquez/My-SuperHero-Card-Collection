const apiKey = document.getElementById("APIKey")
const inpKey = document.getElementById("inpKey")
const inpID = document.getElementById("inpID")
const btnInsert = document.getElementById("btnInsert")
const Output = document.getElementById("Output")
let row = document.querySelector(".row")


btnInsert.onclick = function () {
    let URL = `https://superheroapi.com/api/${apiKey.value}/${inpID.value}`
    console.log(URL)
    // const encodeURL = encodeURI(URL)
    fetch(URL)
        .then((res) => res.json())
        
        .then((dataAPI) => {
            console.log(dataAPI)
            const charName = dataAPI.name;
            const charImage = dataAPI.image.url;
            console.log(charImage)
            console.log(charName)
            function createHTML(dataAPI) {
                let html = `
            <div id="box"><img id="thumbnails" src = "${charImage}">${charName}</div>`
                row.innerHTML += html;
            }
            createHTML(dataAPI)

        })

    const key = inpKey.value;
    const value = inpID.value;

    if (key && value) {
        localStorage.setItem(key, value);
    }
}
// loop through my local storage and replace innerHTML with input
for (i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i);
    const value = localStorage.getItem(key);
    Output.innerHTML += `${key}: ${value} <br />`
    // location.reload()
}

// clearing the local storage and the history
const btnClear = document.getElementById("btnClear");

btnClear.addEventListener('click', function () {
    localStorage.clear();
    location.reload()
    console.log("hit me");
})



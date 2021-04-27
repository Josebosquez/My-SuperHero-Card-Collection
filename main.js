const apiKey = document.getElementById("APIKey")
const inpKey = document.getElementById("inpKey")
const inpValue = document.getElementById("inpValue")
const btnInsert = document.getElementById("btnInsert")
const Output = document.getElementById("Output")

btnInsert.onclick = function () {
    let URL = `https://superheroapi.com/api/${apiKey.value}/489/powerstats`
    console.log(URL)
    // const encodeURL = encodeURI(URL)
    fetch(URL)
        .then((res) => res.json())
        // console.log(apiKey.value)
        .then((dataAPI) => {
            const name = dataAPI[0].culmination.utc_datetime;
            const rise = dataAPI[0].rise.utc_datetime;
            const set = dataAPI[0].set.utc_datetime;
            console.log(culmination, rise, set)
            const container2 = document.querySelector('#results')
            function createHTML(dataAPI) {
            let html = `
            <div class="row">
                <div id="box">:</div>
                <div id="box">:</div>
                <div id="box">:</div>
            </div>`
                // <div class="section">
                //     <h1>
                //         Your Satellite Info Station
                //     </h1>
                //     <div class="row">
                //     <div id="articleBoxScore">Culmination: ${culmination}</div>
                //     <div id="articleBoxAuthor">Rise: ${rise}</div>
                //     <div id="articleBoxComments">Set: ${set}</div>
                //     </div>
                // </div>`
                        container2.innerHTML += html;
                    }
                    createHTML(data)

        })

    const key = inpKey.value;
    const value = inpValue.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
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

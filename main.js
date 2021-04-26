const apiKey = document.getElementById("APIKey")
const inpKey = document.getElementById("inpKey")
const inpValue = document.getElementById("inpValue")
const btnInsert = document.getElementById("btnInsert")
const Output = document.getElementById("Output")

btnInsert.onclick = function () {
    let URL = `https://superheroapi.com/api/${apiKey.value}/id`
    console.log(URL)
    const encodeURL = encodeURI(URL)
    fetch(encodeURL)
        .then((res) => res.json())
        // console.log(apiKey.value)
        .then((data) => {
            console.log(data)
        })



    const key = inpKey.value;
    const value = inpValue.value;

    if (key && value) {
        localStorage.setItem(key, value);
        location.reload();
    }
}

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

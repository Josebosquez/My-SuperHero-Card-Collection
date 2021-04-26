const inpKey = document.getElementById("inpKey")
const inpValue = document.getElementById("inpValue")
const btnInsert = document.getElementById("btnInsert")
const Output = document.getElementById("Output")

btnInsert.onclick = function (){
    const key = inpKey.value;
    const value = inpValue.value;

    if (key && value){
        localStorage.setItem(key, value);
        location.reload();
    }
}
for(i = 0; i < localStorage.length; i++){
        const key = localStorage.key(i);
        const value = localStorage.getItem(key);
        Output.innerHTML += `${key}: ${value} <br />`
        // location.reload()
}

const btnClear = document.getElementById("btnClear");

btnClear.addEventListener('click',function(){
    localStorage.clear();
    location.reload()
    console.log("hit me");
})

// btnInsert.addEventListener("click", function () {
//     let URL = `https://superheroapi.com/api/access-token=${accessKey.value}/character-id/powerstats`
//     const encodeURL = encodeURI(URL)
//     fetch(encodeURL)
//     .then((res) => res.json())
//     .then((data) => {
//         console.log(data)
//         let longitude = data.features[0].center[0];
//         let latitude = data.features[0].center[1];
//         let name = data.features[0].place_name;
        
const apiKey = document.getElementById("APIKey")
const inpKey = document.getElementById("inpKey")
const inpName = document.getElementById("inpID")
const btnInsert = document.getElementById("btnInsert")
const Output = document.getElementById("Output")
let row = document.querySelector(".row")
let arr = [];
let superheroArr = [];

function APIcall() {
    for (let i = 1; i < 5; i++) {
        let URL = `https://superheroapi.com/api/3935852106501451/${i}`
        arr.push(axios.get(URL))
    }
    Promise.all(arr).then((response) =>
        response.map(res => {
            superheroArr.push(res.data)
            console.log("the console", superheroArr)
        })
    ).catch((err) => console.log(err));
} APIcall()


//loading screen to grab api
// make an alert or sign that can close after 20 seconds (give time for api call to work.)
// function xForce() {

// } xForce()




let charName;
let charImage;
btnInsert.onclick = function () {
    for (i = 0; i < superheroArr.length;i++){
        if (superheroArr[i].name === inpName.value){
            console.log("hello")
            charName = superheroArr[i].name;
            charImage = superheroArr[i].image.url
            console.log(charName)
            console.log(charImage)
        }
    }
    function createHTML() {
    let html = `
        <div id="box"><img id="thumbnails" src = "${charImage}">${charName}</div>`
        row.innerHTML += html;
        }
        createHTML()
}

//     const key = inpKey.value;
//     const value = inpName.value;

//     if (key && value) {
//         localStorage.setItem(key, value);
//     }
// }

// // loop through my local storage and replace innerHTML with input
// for (i = 0; i < localStorage.length; i++) {
//     const key = localStorage.key(i);
//     const value = localStorage.getItem(key);
//     Output.innerHTML += `${key}: ${value} <br />`
//     // location.reload()
// }

// // clearing the local storage and the history
// const btnClear = document.getElementById("btnClear");

// btnClear.addEventListener('click', function () {
//     localStorage.clear();
//     location.reload()
//     console.log("hit me");
// })
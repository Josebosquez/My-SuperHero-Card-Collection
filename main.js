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
let collectionArr = [];
let storedURLs = JSON.parse(localStorage.getItem('collectionArr'));
console.log(storedURLs)
console.log(collectionArr)

btnInsert.onclick = function () {
    for (i = 0; i < superheroArr.length;i++){
        if (superheroArr[i].name === inpName.value){
            console.log("hello")
            charName = superheroArr[i].name;
            charImage = superheroArr[i].image.url
            let supe = superheroArr[i];

            collectionArr.push(supe)
            console.log(supe)
            localStorage.setItem("collectionArr", JSON.stringify(collectionArr))
        }
    }
    localStorage.setItem("name", charName )
    localStorage.setItem("image", charImage )
    createHTML(charImage, charName)
}

//------------
// Create DOM element for collection
//------------
function createHTML(img, name) {
let html = `
    <div id="box"><img id="thumbnails" onclick="clickedThumb()" src = "${img}">${name}</div>`
    row.innerHTML += html;
}
if(storedURLs.length !== 0){
    for (i=0; i < storedURLs.length; i++){
        createHTML(storedURLs[i].image.url, storedURLs[i].name)
        console.log(storedURLs[i].name)
    }
}

//------------
// Click on an image to get the card 
//------------
const thumbnails = document.querySelector("thumbnails")
const photo = document.getElementById("photo")

function clickedThumb(){
    photo.style.backgroundImage = `url(${charImage})`
    console.log("photo clicked")
}
clickedThumb()



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
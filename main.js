const apiKey = document.getElementById("APIKey")
const inpKey = document.getElementById("inpKey")
const inpID = document.getElementById("inpID")
const btnInsert = document.getElementById("btnInsert")
const Output = document.getElementById("Output")
let row = document.querySelector(".row")
let arr = [];
let superheroArr = [];

function APIcall() {
    for (let i = 1; i < 732; i++) {
        let URL = `https://superheroapi.com/api/3935852106501451/${i}`
        arr.push(axios.get(URL))

        // setTimeout(() => {

        
        //     fetch(URL)
        //     .then((res) => res.json())
        //     .then((dataAPI) => {
        //         console.log(dataAPI)
        //         arr.push(dataAPI)
        //         console.log("arr equals", arr)
        //     })
        // }, 3000);
    }
    Promise.all(arr).then((response) =>
        response.map(res => {superheroArr.push(res.data)
            console.log("the console", superheroArr)
        })
    ).catch((err) => console.log(err));
} APIcall()



//loading screen to grab api
// make the ids get grabbed on page load

// make an alert or sign that can close after 20 seconds (give time for api call to work.)



// btnInsert.onclick = function () {
//     let URL = `https://superheroapi.com/api/3935852106501451/search/${inpID.value}`
//     // let URL = `https://superheroapi.com/api/3935852106501451/search/batman`
//     console.log(URL)
//     // const encodeURL = encodeURI(URL)
//     fetch(URL)
//         .then((res) => res.json())

//         .then((dataAPI) => {
//             console.log(dataAPI)
//             for (i = 0; i < dataAPI.results.length; i++){
//                 arr.push(dataAPI.results[i])
//                 console.log(arr)
//             }
//             const charName = dataAPI.results[0].name;
//             const charImage = dataAPI.results[0].image.url;
//             console.log(charImage)
//             console.log(charName)
//             function createHTML(dataAPI) {
//                 let html = `
//                 <div id="box"><img id="thumbnails" src = "${charImage}">${charName}</div>`
//                 row.innerHTML += html;
//             }
//             createHTML(dataAPI)
//         })

//     const key = inpKey.value;
//     const value = inpID.value;

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


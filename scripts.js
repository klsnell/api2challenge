const baseURL = "api.giphy.com/v1/gifs/search";
const key="fV2mC8isuwHuVzkpctcfX2OMWY3p8UgV";

const fetchGif = async(event) => {
    // event.preventDefault()
    try{
        const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${key}&rating=pg-13`);
        console.log(response);

        if(response.status === 404){
            throw "404 Not Found";
        }

        const data = await response.json();
        console.log(data.data); //this is where you dig into the keys in the console of the page

        const gif = data.data.images.downsized.url;
        displayResults(gif);
    } catch(error){
        alert(error);
    }
}

fetchGif();
function displayResults(gif){
    let gifPic = document.getElementById("pick");
    gifPic.src = gif;
};

let button = document.getElementsByClassName("submit")
for (choose of button){
    choose.addEventListener('click', (event)=>{
        event.target.style.run=fetchGif(math.floor(Math.random()*2000));
    })
}
























// //search form
// const searchTerm = document.querySelector("#search");
// const date = document.querySelector("#date");
// const submitBtn = document.querySelector(".submit");

// //Results navigation
// const nextBtn = document.querySelector('.next');
// const nextBtn = document.querySelector('.previous');
// const nav = document.querySelector("nav");

// //Results section
// const section = document.querySelector("section");

// //Pagination and display
// nav.style.display = "none";
// let pageNumber = 0;
// console.log("pageNumber:", pageNumber);
// let displayNav = false;

// //Event Listeners
// searchForm.addEventListener("submit", fetchResults);
// nextBtn.addEventListener("click", nextPage);
// previousBtn.addEventListener("click", previousPage);

// function fetchResults(e){
//     e.preventDefault();

//     url = baseURL + "?api-key=" + key + "&page=" + pageNumber + "&q=" + searchTerm.value;
//     console.log("URL:", url);
//         if(date.value !== ""){
//         url += "&begin_date=" + date.value
//         };
//         fetch(url)
//         .then(function(result){
//             return result.json();
//         }).then(function(json){
//             displayResults(json);
//         });
// };

// function displayResults(json){
//     while(section.firstChild) {
//         section.removeChild(section.firstChild);
//     }
//     let images = json; //! <-NEED TO FIND THIS NAV IN API
//     console.log(json.response);
//     if (images.length == 5){
//         nav.style.display = "block";
//     } else {
//         nav.style.display = "none";
//     }
//     if (images.length == 0){
//         console.log("No Results");
//     } else {
//         for (let i = 0; i < images.length; i ++){
//             let images = document.createElement("img");
//             let heading = document.createElement("h3");
//             let link = document.createElement("a");
//             let para = document.createElement("p");
//             let clearfix = document.createElement("div");

//             let current = images[i];

//             link.href = current.web_url;
//             link.textContent = current.headline.main;

//             para.textContent = "Keywords: ";
//             for (let j = 0; j < current.keywords.length; j++){
//                 let span = document.createElement("span");
//                 span.textContent += current.keywords[j].value + " ";
//                 para.appendChild(span);
//             }
//             if (current.multimedia.length > 0) {
//                 img.src = "https://images-api.nasa.gov/" + current.multimedia[0].url;
//                 img.alt = current.headline.main;
//             }
//             clearfix.setAtrribute("class", "clearfix");
//             images.appendChild(heading);
//             heading.appendChild(link);
//             images.appendChild(para);
//             images.appendChild(clearfix);
//             section.appendChild(images);
//         }
//     }
// }
// function nextPage(e){
//     pageNumber++
//     fetchResults(e);
//     console.log("Page Number:", pageNumber);
// }
// function previousPage(e){
//     if (pageNumber > 0){
//         pageNumber--;
//     }else{
//         return;
//     }
//     fetchResults(e);
//     console.log("Page Number:", pageNumber);
// }
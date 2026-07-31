import axios from "axios";


const KEY_PB = "56856807-1870c2f7a4dca31ed474a7877";


export function getImagesByQuery(query) {
     return axios("https://pixabay.com/api/", {
    params : {
    key: KEY_PB,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch:"true",
}  })
.then (response => response.data);     
};






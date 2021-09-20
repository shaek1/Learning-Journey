"use strict";

const imgURL = "https://www.pexels.com/photo/adventure-alps-cold-dawn-326119/"
let fetchImage = async () => {
    var myImageResponse = await fetch(imgURL);
    console.log("Image response: \n", myImageResponse.blob());
}
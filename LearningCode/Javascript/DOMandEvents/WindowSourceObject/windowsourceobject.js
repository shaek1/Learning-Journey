"use strict";

window.onload = function() {

    var openButton = document.getElementById("openButton");
    var closeButton = document.getElementById("closeButton");

    var historyButton = document.getElementById("historyButton");

    var newWindow = null;

    openButton.onclick = function() {

        newWindow = window.open("https://skillsoft.com/");
    }

    closeButton.onlick = function() {

        if(newWindow != null) {
            newWindow.close();
        }
    }

    historyButton.onclick = function() {
        var browserHistory = document.getElementById("history");
        browserHistory.innerHTML = "Your browser window history has " + 
        window.history.length + " entries!";
    }

    wikipediaButton.onclick = function() {

        window.location = "https://www.wikipedia.org/";
    }

}
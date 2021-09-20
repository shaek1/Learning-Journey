"use strict";

function animation() {

    var dot = document.getElementById("circle");

    var loc = 450;
    var time = setInterval(frame, 10);

    function frame() {

        if (loc == 0) {

            clearInterval(time);
        } else {

            loc--;
            dot.style.top = loc + "px";
            
            dot.style.right = loc + "px";
        }
    }
}
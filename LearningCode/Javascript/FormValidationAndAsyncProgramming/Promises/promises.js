"use strict";

let regularFunction = () => {
    return "Hello";
}
/*
let timeoutFunction = msg => {
    var returnMsg;

    setTimeout(() => {
        console.log("Input msg to timeoutFuction: ", msg);

        returnMsg=msg+ " World";
        console.log("timeoutFunction has constructed returnMsg: ",
            returnMsg);

            return returnMsg;

    }, 10000);
}
*/
let followUpFunction = msg => {
    console.log("Follow up. Timeout returned: ", msg);
}
    /*console.log("Before any function call...");
    var regularReturn = regularFunction();
    var timeoutReturn = timeoutFunction(regularReturn);
    followUpFunction(timeoutReturn);

    let timeoutFunctionCallback = (msg, callback) => {

        var returnMsg;
        
        setTimeout(() => {
            console.log("Input msg to timeoutFunction: ", msg);

            returnMsg = msg +  " World";
            console.log("timeoutFunction has constructedd returnMsg: ",
                    returnMsg);
        }, 10000);
        callback(returnMsg);
    }

    console.log("Before callback...");
    var regularReturn = regularFunction();
    timeoutFunctionCallback(regularReturn, followUpFunction);*/ 

    let finalValAsyn = async arg => {

        var one = await oneFunction(arg);
        var two = await twoFunction(one);
        var val = await threeFunction(two);
        console.log("Final val: ", val);
    }

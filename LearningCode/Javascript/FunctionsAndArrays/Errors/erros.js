function isEven(){

    var a;
    a = document.getElementById("num").value;

    try {
        if((a % 2)==0){
            console.log("The entered number is even");
        }
        else {
            throw "not an even number";
        }
    }
        catch(msg){
            console.log("The entered value is " + msg);
        }
    }

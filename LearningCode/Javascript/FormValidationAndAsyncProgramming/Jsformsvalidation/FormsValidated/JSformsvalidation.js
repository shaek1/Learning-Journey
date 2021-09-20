"use strict";

function validateForm() {

    var uname = document.forms["myForm"]["uname"];

    var age = document.forms["myForm"]["age"];

    var residentStatus = document.forms["myForm"]["residency"];

    var accountType = document.querySelectorAll('input[name=acctype]:checked');

    var nationality = document.forms["myForm"]["nationality"];

    var regxName = /^([a-zA-Z]+)$/;

    if (uname.value.length < 6) {

        alert("The username needs to be at least 6 characters long");
        uname.focus();
        return false;
    }

    if(!regxName.test(uname.value)){

        uname.style.border = "solid 2px red";
        document.getElementById('unameLabel').innerHTML = 'The name can only have alphabets';
        document.getElementById('unameLabel').style.visibility = 'visible'; return false;
    } else{

        uname.style.border = "solid 2px green";
        document.getElementById('unameLabel').innerHTML = 'The username is valid!';
        document.getElementById('unameLabel').style.color = 'green';
        document.getElementById('unameLabel').style.visibility='visible';
    }

    if(age.value < 18) {
        alert("You must be at least 18 years old to open an account");
        return false;
    }

    if(accountType.length == 0) {
        document.querySelectorAll('input[name=acctype]')[1].checked = true;
    }
    confirm("Do you want to subbmit the form");
    return true;
}
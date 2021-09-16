"use strict";
"use strict";

function Patient(id, name, address, bloodGroup) {
    this.id = id;
    this.name = name;

    var _address = address;
    var _bloodGroup = bloodGroup;

    this.printDetails = function() {
        console.log(`The patient details are:
            Patient ID: ${this.id}
            Name: ${this.name}
            Address: ${_address}
            Blood Group: ${_bloodGroup}`)
    }
}

var firstPatient = new Patient(12, "Tanya Wells", "Asheville", "B+");

/*console.log("The details for firstPatient");
console.log("The object: ", firstPatient);

console.log("ID is %s and the name is %s ", firstPatient.id, firstPatient.name);

console.log("From the outside, the address is %s and the blood group %s ", firstPatient._address, firstPatient._bloodGroup);

console.log("The invocation of printDetails gives us:");
firstPatient.printDetails()*/

var secondPatient = new Patient(12, "Dean Taylor", "Madison", "A-");

console.log("The details for secondPatient");
console.log("The object: ", secondPatient);

console.log("The invocation of printDetails gives us:");
secondPatient.printDetails()

firstPatient.name = "Dean Thomas";
console.log("The invocation of printDetails after updating the gives us:");
firstPatient.printDetails()
function getterSetterData() {
    var myVar = 1;
    return {
        getVar: function() {
            return myVar;
        },

        setVar: function(v) {
            myVar=v;
        }
    };
}
let objVar = getterSetterData();
console.log("Initial value of myVar: ", objVar.getVar())

objVar.setVar(2);
console.log("Updated numeric value of myVar: ", objVar.getVar());

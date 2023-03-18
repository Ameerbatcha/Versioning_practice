
var submited = document.querySelector("#entry");

submited.addEventListener("submit", function (e) {

    e.preventDefault();

    // declaring variable with entered values
    var infoot = document.getElementById("idvalue").value;
    let incm = document.getElementById("answer");

    //condition checking withmfoot value
    if (infoot < 0) {
        incm.innerHTML = "Please enter a feet value >0";
    }
    else if (infoot >= 0) {
        incm.innerHTML = feettocm(infoot);

    }
    else if (typeof infoot === 'string') {
        incm.innerHTML = "Please enter a valid number!";

    }
    else{
        incm.innerHTML = "Please enter a valid input";

    }

    //feet to cm conversion function
    function feettocm(x) {
        x *= 30.48;
        return x + " cm";
    }

});
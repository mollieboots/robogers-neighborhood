let createArray = function(input) {
    let integerArray = [];
    if (input > 0) {
        for (let i = input; i >= 0; i -= 1) {
            integerArray.push(parseInt(i));
        }
        return integerArray.reverse(); 
    } else {
        $("#output").text("Sorry! Please enter a positive non-zero number.");
    }
}

let parseNum = function(inputNumber, inputName) {
    if ( inputNumber.toString().indexOf('3') > -1 ) {
        return " Won't you be my neighbor, " + inputName + "?";
    } else if ( inputNumber.toString().indexOf('2') > -1 ) {
        return " Boop!";
    } else if ( inputNumber.toString().indexOf('1') > -1 ) {
        return " Beep!";
    } else {
        return " " + inputNumber;
    }
}

let robogersNeighborhood = function(inputNumber, inputName) {
    let integerArray = createArray(inputNumber);
    let resultsArray = [];
    integerArray.forEach(function(index) {
        resultsArray.push(parseNum(integerArray[index], inputName));
    })
    return resultsArray;
}

$(document).ready(function() {
    $("#user-input").submit(function(event) {
        event.preventDefault();
        let inputNumber = $("#input-number").val();
        let inputName = $("#input-name").val();
        $(".form-control").val("");
        let result = robogersNeighborhood(inputNumber, inputName);

        $("#output").text(result);
    });
});
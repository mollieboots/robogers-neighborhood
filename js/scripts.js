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

let parseNum = function(inputNumber) {
    if ( inputNumber.toString().indexOf('3') > -1 ) {
        return "Won't you be my neighbor?";
    } else if ( inputNumber.toString().indexOf('2') > -1 ) {
        return "Boop!";
    } else if ( inputNumber.toString().indexOf('1') > -1 ) {
        return "Beep!";
    } else {
        return inputNumber;
    }
}

let robogersNeighborhood = function(inputNumber) {
    let integerArray = createArray(inputNumber);
    let resultsArray = [];
    integerArray.forEach(function(index) {
        resultsArray.push(parseNum(integerArray[index]));
    })
    return resultsArray;
}

$(document).ready(function() {
    $("#user-input").submit(function(event) {
        event.preventDefault();
        let inputNumber = $("#input-number").val();
        $("#input-number").val("");
        let result = robogersNeighborhood(inputNumber);

        $("#output").text(result);
    });
});
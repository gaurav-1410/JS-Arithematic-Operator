function result() {
    var value = document.getElementById('operator').value;
    if (value == "add") {
        var number_1 = Number(document.getElementById("num1").value);
        var number_2 = Number(document.getElementById("num2").value);
        var answer = number_1 + number_2;
        document.getElementById("res").value = answer;
    }
    else if(value == "sub"){
        var number_1 = Number(document.getElementById("num1").value);
        var number_2 = Number(document.getElementById("num2").value);
        var answer = number_1 - number_2;
        document.getElementById("res").value = answer;
    }
    else if(value == "mul"){
        var number_1 = Number(document.getElementById("num1").value);
        var number_2 = Number(document.getElementById("num2").value);
        var answer = number_1 * number_2;
        document.getElementById("res").value = answer;
    }
    else{
        var number_1 = Number(document.getElementById("num1").value);
        var number_2 = Number(document.getElementById("num2").value);
        var answer = number_1 / number_2;
        document.getElementById("res").value = answer;
    }
}
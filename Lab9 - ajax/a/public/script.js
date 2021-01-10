calculate = function() {
    var num1 = document.getElementById('num1').value;
    var num2 = document.getElementById('num2').value;
    var operation = document.getElementById('operation').value;

    var xhttp = new XMLHttpRequest();

    const requestObj = {
        "num1": num1,
        "num2": num2,
        "op": operation
    };
    
    xhttp.open('POST', 'http://localhost:3000/calculate');
    xhttp.setRequestHeader('Content-type', 'application/json');
    xhttp.onload = function () {
        const result = JSON.parse(xhttp.response);
        if(isNaN(result.res)) {
            document.getElementById("result").innerHTML = result.result;
        } else {
            document.getElementById("result").innerHTML = parseFloat(result.result);
        }    
    };
    xhttp.send(JSON.stringify(requestObj));
    return false;
}
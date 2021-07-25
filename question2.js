function addNum() {
    var a, b, y;
   a = Number(document.getElementById("myNumber2a").value);
   b = Number(document.getElementById("myNumber2b").value);
   y = a + b;
   if(document.getElementById("myNumber2a").value.length == 0 || document.getElementById("myNumber2b").value.length == 0){
    alert("Alert: Please enter the numbers in provided boxes");
    } else {
        document.getElementById("answer2").innerHTML = "Addition of "+ a + " and " + b + " is = " + y;

    }
}


function subNum() {
    var a, b, y;
   a = Number(document.getElementById("myNumber2a").value);
   b = Number(document.getElementById("myNumber2b").value);
   y = a - b;

   if(document.getElementById("myNumber2a").value.length == 0 || document.getElementById("myNumber2b").value.length == 0){
    alert("Alert: Please enter the numbers in provided boxes");
    } else {
        document.getElementById("answer2").innerHTML = "Substraction of "+ a + " and " + b + " is = " + y;
    }
}


function multiNum() {
    var a, b, y;
   a = Number(document.getElementById("myNumber2a").value);
   b = Number(document.getElementById("myNumber2b").value);
   y = a * b;

   if(document.getElementById("myNumber2a").value.length == 0 || document.getElementById("myNumber2b").value.length == 0){
    alert("Alert: Please enter the numbers in provided boxes");
    } else {
        document.getElementById("answer2").innerHTML = "Mulitiplication of "+ a + " and " + b + " is = " + y;
    }
}


function divNum() {
    var a, b, y;
   a = Number(document.getElementById("myNumber2a").value);
   b = Number(document.getElementById("myNumber2b").value);
   y = a / b;

   if(document.getElementById("myNumber2a").value.length == 0 || document.getElementById("myNumber2b").value.length == 0){
    alert("Alert: Please enter the numbers in provided boxes");
    } else {
        document.getElementById("answer2").innerHTML = "Division of "+ a + " and " + b + " is = " + y;
    }
}


function clr2() {
    document.getElementById("myNumber2a").value = "";
    document.getElementById("myNumber2b").value = "";
    document.getElementById("answer2").innerHTML = "";

}
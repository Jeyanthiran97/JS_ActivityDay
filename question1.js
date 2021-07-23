function squareMyNumber() {
    var x, y;
   x = document.getElementById("myNumber1").value;
   y = x * x;
    document.getElementById("answer1").innerHTML = "Square of "+ x +" is =" + y;
}


function clr() {
    document.getElementById("myNumber1").value = "";
    document.getElementById("answer1").innerHTML = "";

}



// function myFunction() {
//   const inpObj = document.getElementById("id1");
//   if (!inpObj.checkValidity()) {
//     document.getElementById("demo").innerHTML = inpObj.validationMessage;
//   } else {
//     document.getElementById("demo").innerHTML = "Input OK";
//   } 
// } 

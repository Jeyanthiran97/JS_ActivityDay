function findCuboid() {
    var a, b, c, y;
   a = Number(document.getElementById("myNumber4a").value);
   b = Number(document.getElementById("myNumber4b").value);
   c = Number(document.getElementById("myNumber4c").value);

   y = a * b * c;
   if(document.getElementById("myNumber4a").value.length == 0 || document.getElementById("myNumber4b").value.length == 0 || document.getElementById("myNumber4c").value.length == 0 ){
    alert("Alert: Please enter all values in provided boxes");
    } else {
        document.getElementById("answer4").innerHTML = "volume of a cuboid is"+ " = " + y;

    }
}


function clr4() {
    document.getElementById("myNumber4a").value = "";
    document.getElementById("myNumber4b").value = "";
    document.getElementById("myNumber4c").value = "";
    document.getElementById("answer4").innerHTML = "";

}
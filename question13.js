
function findMax() {
    var inputArray = [];
    var size = 3; //Maximum Array size

    for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt('Enter Element ' + (i+1));
    }
    //print input values
    document.getElementById("answer13a").innerHTML = "You entered array is [ " +inputArray+" ]";
    document.getElementById("answer13b").innerHTML = "Maximum Value is: " +Math.max(...inputArray);
}

function findMin() {
    var inputArray = [];
    var size = 3; //Maximum Array size

    for(var i=0; i<size; i++) {
	
	//Taking Input from user
	inputArray[i] = prompt('Enter Element ' + (i+1));
    }
    //print input values
    document.getElementById("answer13a").innerHTML ="You entered array is [ " +inputArray+ " ]";
    document.getElementById("answer13b").innerHTML = "Minimum value is: " +Math.min.apply(null, inputArray);
}


function clr13a() {
    document.getElementById("answer13a").innerHTML = "";
    document.getElementById("answer13b").innerHTML = "";
}

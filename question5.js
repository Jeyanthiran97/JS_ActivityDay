function getPersonDetails() {
    const person = {firstName:"Nimal", lastName:"Raj", age:"15", city:"Kandy"}
    document.getElementById("answer5").innerHTML = "My name is " +person.firstName+ " " +person.lastName+ "." + " I'm "+person.age+" year's old. I live in "+person.city;
}

function clr5() {
    document.getElementById("answer5").innerHTML = "";

}
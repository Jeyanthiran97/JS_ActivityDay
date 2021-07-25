function getCourseDetails() {
    const course = {courseName:"BIT", courseFee:"Rs 150 000", startDate:"12.06.2018", center:"our Office"}
    document.getElementById("answer6a").innerHTML = "Course Name: "+course.courseName;
    document.getElementById("answer6b").innerHTML = "Course Fee: "+course.courseFee;
    document.getElementById("answer6c").innerHTML = "Start Date: "+course.startDate;
    document.getElementById("answer6d").innerHTML = "Center: "+course.center;

}

function clr6() {
    document.getElementById("answer6a").innerHTML = "";
    document.getElementById("answer6b").innerHTML = "";
    document.getElementById("answer6c").innerHTML = "";
    document.getElementById("answer6d").innerHTML = "";


}
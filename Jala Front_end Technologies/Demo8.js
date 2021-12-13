var course = []
var input = prompt("Which operation You want to perform [selenium|java|python|exit]:")while (input != "exit") {
        if (input == "selenium") {
            addSelenium();
        } else if (input == "java") {
            listJava()
        } else if (input == "python") {
            deletePython()
        } else {
            console.log("Enter valid option");
        }
        input = prompt("What operation You want to perform [selenium|java|python|exit]")
    }
    console.log("Thanks for using our application");

function addSelenium() {
    var newcourse = prompt("Enter the course:")
        course.push(newcourse);
}
function listJava() {
    console.log("Enter the name:");
    for (cour of course) {
        console.log(cour);
    }
}
function deletePython() {
    var name = prompt("Enter Book Name to delete:")
        var index = books.indexOf(name)
        if (index == -1) {
            console.log("Python is not available");
        } else {
            books.splice(index, 1)
            console.log("Python is deleted");
        }
}
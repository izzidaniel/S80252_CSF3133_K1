// Error 1 (grade.html, Line 9): Missing 'return' in onsubmit="return checkMark()".
// Error 2 (grade.html, Line 17): Wrong casing onclick="showtable()"; should be showTable().
// Error 3 (grade.html, Line 19): Wrong script filename "grades.js"; should be "grade.js".
// Error 4 (grade.js, Line 5): Used assignment (=) instead of comparison (===) in if (name = "").
// Error 5 (grade.js, Line 9): Wrong casing isNan(mark); should be isNaN(mark).
// Error 6 (grade.js, Line 14): Used && instead of || in range check (mark < 0 || mark > 100).
// Error 7 (grade.js, Line 28): Wrong casing getElementByID; should be getElementById.
// Error 8 (grade.js, Line 30): British spelling style.colour; should be style.color.
// Error 9 (grade.js, Line 31): Returning true reloads the page; must return false.
// Error 10 (grade.js, Line 38): Loop started at i = 1 instead of i = 0, skipping Grade A.
// Error 11 (grade.js, Line 42): Wrong casing .innerHtml; should be .innerHTML.

function checkMark() {
    let name = document.forms["gradeForm"]["name"].value.trim();
    let mark = document.forms["gradeForm"]["mark"].value.trim();

    if (name === "") {
        alert("Name must be filled out.");
        return false;
    }

    if (mark === "") {
        alert("Mark field cannot be empty.");
        return false;
    }

    if (isNaN(mark)) {
        alert("Please enter a valid numeric value.");
        return false;
    }

    mark = parseInt(mark);

    if (mark < 0 || mark > 100) {
        alert("Mark must be between 0 and 100.");
        return false;
    }

    let grade;
    let color;

    if (mark >= 80) {
        grade = "A";
        color = "green";
    } else if (mark >= 65) {
        grade = "B";
        color = "green";
    } else if (mark >= 50) {
        grade = "C";
        color = "orange";
    } else {
        grade = "F";
        color = "red";
    }

    let resultElement = document.getElementById("result");
    resultElement.innerHTML = name + " got grade " + grade;
    resultElement.style.color = color;

    document.getElementById("checkedTime").innerHTML = "Checked on: " + new Date();

    return false;
}

function generateRandomMark() {
    let randomNum = Math.floor(Math.random() * 101);
    document.getElementById("mark").value = randomNum;
}

function showTable() {
    let grades = ["A", "B", "C", "F"];
    let ranges = ["80-100", "65-79", "50-64", "0-49"];
    let tableHTML = "<table><tr><th>Grade</th><th>Mark range</th></tr>";

    for (let i = 0; i < grades.length; i++) {
        tableHTML += "<tr><td>" + grades[i] + "</td><td>" + ranges[i] + "</td></tr>";
    }

    tableHTML += "</table>";
    document.getElementById("tableContainer").innerHTML = tableHTML;
}

var student1 = {
    firstName: "Crafty",
    lastName: "Witness",
    age: 27,
    location: "Nairobi",
};
var student2 = {
    firstName: "Harvey",
    lastName: "Specter",
    age: 45,
    location: "New York",
};
var studentsList = [student1, student2];
// The DOM must load before rendering
window.addEventListener("DOMContentLoaded", function () {
    var tableBody = document.querySelector("#studentsTable tbody");
    // HTML table rendering logic
    studentsList.forEach(function (student) {
        var row = document.createElement("tr");
        //firstName
        var firstNameCell = document.createElement("td");
        firstNameCell.textContent = student.firstName.toString();
        row.appendChild(firstNameCell);
        //location
        var locationCell = document.createElement("td");
        locationCell.textContent = student.location.toString();
        row.appendChild(locationCell);
        tableBody.appendChild(row);
    });
});

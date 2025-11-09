interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "Crafty",
  lastName: "Witness",
  age: 27,
  location: "Nairobi",
};

const student2: Student = {
  firstName: "Harvey",
  lastName: "Specter",
  age: 45,
  location: "New York",
};

const studentsList: Student[] = [student1, student2];

// The DOM must load before rendering

window.addEventListener("DOMContentLoaded", () => {
  const tableBody = document.querySelector(
    "#studentsTable tbody"
  ) as HTMLElement;

  // HTML table rendering logic

  studentsList.forEach((student) => {
    const row = document.createElement("tr");

    //firstName
    const firstNameCell = document.createElement("td");
    firstNameCell.textContent = student.firstName.toString();
    row.appendChild(firstNameCell);

    //location
    const locationCell = document.createElement("td");
    locationCell.textContent = student.location.toString();
    row.appendChild(locationCell);

    tableBody.appendChild(row);
  });
});

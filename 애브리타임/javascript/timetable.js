// DOM Elements
const form = document.getElementById("timetable-form");
const subjectInput = document.getElementById("subject");
const dayInput = document.getElementById("day");
const timeInput = document.getElementById("time");
const tableBody = document.querySelector("#timetable-table tbody");

let timetable = []; // Array to store timetable entries
let editIndex = null; // Index of the entry being edited

// Handle form submission
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const subject = subjectInput.value.trim();
  const day = dayInput.value;
  const time = timeInput.value;

  if (editIndex !== null) {
    // Update existing entry
    timetable[editIndex] = { subject, day, time };
    editIndex = null;
  } else {
    // Add new entry
    timetable.push({ subject, day, time });
  }

  renderTable();
  form.reset();
});

// Render the timetable table
function renderTable() {
  tableBody.innerHTML = "";

  timetable.forEach((entry, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${entry.subject}</td>
      <td>${entry.day}</td>
      <td>${entry.time}</td>
      <td>
        <button class="edit" onclick="editEntry(${index})">수정</button>
        <button class="delete" onclick="deleteEntry(${index})">삭제</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

// Edit an entry
function editEntry(index) {
  const entry = timetable[index];
  subjectInput.value = entry.subject;
  dayInput.value = entry.day;
  timeInput.value = entry.time;

  editIndex = index;
}

// Delete an entry
function deleteEntry(index) {
  timetable.splice(index, 1);
  renderTable();
}
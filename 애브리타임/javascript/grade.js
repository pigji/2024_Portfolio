const form = document.getElementById("student-form");   //수정, 삭제되는 학생목록
const tableBody = document.querySelector("#student-table tbody");   //학생 목록
const overallAverageElement = document.getElementById("overall-average");   //등록된 학생 합계에 따른 전체 평균

let students = []; // 학생 데이터배열 저장
let editIndex = null; // 수정할 학생

//성적 등록 버튼을 클릭했을때 실행
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();                //이름
  const studentId = document.getElementById("student-id").value.trim();     //학번
  const math = parseInt(document.getElementById("math").value);             //수학
  const english = parseInt(document.getElementById("english").value);       //영어
  const science = parseInt(document.getElementById("science").value);       //과학
  const average = calculateAverage([math, english, science]);               //평균값

  if (editIndex !== null) {
    //수정할 학생
    students[editIndex] = { name, studentId, math, english, science, average };
    editIndex = null;
  } else {
    //새로 등록할 학생
    students.push({ name, studentId, math, english, science, average });
  }

  renderTable();
  calculateOverallAverage();
  form.reset();
});

//평균 계산
function calculateAverage(scores) {
  const total = scores.reduce((sum, score) => sum + score, 0);
  return (total / scores.length).toFixed(2);
}

//성적표
function renderTable() {
  tableBody.innerHTML = "";

  students.forEach((student, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td>${student.name}</td>
      <td>${student.studentId}</td>
      <td>${student.math}</td>
      <td>${student.english}</td>
      <td>${student.science}</td>
      <td>${student.average}</td>
      <td>
        <button class="edit" onclick="editStudent(${index})">수정</button>
        <button class="delete" onclick="deleteStudent(${index})">삭제</button>
      </td>
    `;

    tableBody.appendChild(row);
  });
}

//수정할 학생 선택
function editStudent(index) {
  const student = students[index];

  document.getElementById("name").value = student.name;
  document.getElementById("student-id").value = student.studentId;
  document.getElementById("math").value = student.math;
  document.getElementById("english").value = student.english;
  document.getElementById("science").value = student.science;

  editIndex = index;
}

//삭제할 학생
function deleteStudent(index) {
  students.splice(index, 1);
  renderTable();
  calculateOverallAverage();
}

//학생들 전체 성적에 대한 평균
function calculateOverallAverage() {
  if (students.length === 0) {
    overallAverageElement.textContent = "전체 평균: 0";
    return;
  }

  const totalAverage = students.reduce((sum, student) => sum + parseFloat(student.average), 0);
  const overallAverage = (totalAverage / students.length).toFixed(2);
  overallAverageElement.textContent = `전체 평균: ${overallAverage}`;
}
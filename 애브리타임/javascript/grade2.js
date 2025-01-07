// DOM Elements
const form = document.getElementById("timetable-form");
const subjectInput = document.getElementById("subject");
const dayInput = document.getElementById("day");
const timeInput = document.getElementById("time");
const timetableBody = document.querySelector("#timetable-table tbody");

let timetable = []; // 시간표 항목 배열로 저장
let editIndex = null; // 수정하는 시간표 인덱스 번호 저장

//시간표 입력 후 등록버튼 클릭했을때
form.addEventListener("submit", (e) => {
    e.preventDefault();

    const subject = subjectInput.value.trim();    //과목명
    const day = dayInput.value;                   //요일
    const time = timeInput.value;                 //시간

    if (editIndex !== null) {
        //기존항목 수정
        timetable[editIndex] = { subject, day, time };
        editIndex = null;
    } else {
        //새로운 시간표 등록
        timetable.push({ subject, day, time });
    }

    renderTable();
    renderSchedule();
    form.reset();
});

//시간표 테이블
function renderTable() {
    timetableBody.innerHTML = "";

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

        timetableBody.appendChild(row);
    });
}

//요일별 시간표
function renderSchedule() {
    const scheduleCells = {
        월: ["m1", "m2", "m3", "m4", "m5"],
        화: ["t1", "t2", "t3", "t4", "t5"],
        수: ["w1", "w2", "w3", "w4", "w5"],
        목: ["th1", "th2", "th3", "th4", "th5"],
        금: ["f1", "f2", "f3", "f4", "f5"]
    };

    //기존 일정 삭제
    Object.values(scheduleCells).flat().forEach(cellId => {
        document.getElementById(cellId).textContent = "";
    });

    // 시간표 일정 채움
    timetable.forEach(entry => {
        const dayCells = scheduleCells[entry.day];
        const timeSlot = getTimeSlot(entry.time);
        if (timeSlot !== -1) {
            document.getElementById(dayCells[timeSlot]).textContent = entry.subject;
        }
    });
}

//인덱스 번호를 기준으로 시간 정렬
function getTimeSlot(time) {
    const timeMapping = {
        "09:00": 0,
        "10:00": 1,
        "11:00": 2,
        "12:00": 3,
        "13:00": 4
    };
    return timeMapping[time] || -1; // 시간이 일치하지 않으면 -1 반환
}

//시간표 수정
function editEntry(index) {
    const entry = timetable[index];
    subjectInput.value = entry.subject;
    dayInput.value = entry.day;
    timeInput.value = entry.time;

    editIndex = index;
}

//시간표 삭제
function deleteEntry(index) {
    timetable.splice(index, 1);
    renderTable();
    renderSchedule();
}
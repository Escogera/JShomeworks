// Исходные данные
const tableData = [
  {
    id: 1,
    name: "Йога",
    time: "10:00 - 11:00",
    maxParticipants: 15,
    currentParticipants: 8,
  },
  {
    id: 2,
    name: "Пилатес",
    time: "11:30 - 12:30",
    maxParticipants: 10,
    currentParticipants: 5,
  },
  {
    id: 3,
    name: "Кроссфит",
    time: "13:00 - 14:00",
    maxParticipants: 20,
    currentParticipants: 15,
  },
  {
    id: 4,
    name: "Танцы",
    time: "14:30 - 15:30",
    maxParticipants: 12,
    currentParticipants: 10,
  },
  {
    id: 5,
    name: "Бокс",
    time: "16:00 - 17:00",
    maxParticipants: 8,
    currentParticipants: 6,
  },
];

// Создание таблицы на основе JSON-данных
const table = document.getElementById("table");

for (let i = 0; i < tableData.length; i++) {
  const row = table.insertRow(i + 1);
  const nameCell = row.insertCell(0);
  const timeCell = row.insertCell(1);
  const maxParticipantsCell = row.insertCell(2);
  const currentParticipantsCell = row.insertCell(3);
  const signUpButtonCell = row.insertCell(4);
  const cancelButtonCell = row.insertCell(5);

  nameCell.innerHTML = tableData[i].name;
  timeCell.innerHTML = tableData[i].time;
  maxParticipantsCell.innerHTML = tableData[i].maxParticipants;
  currentParticipantsCell.innerHTML = tableData[i].currentParticipants;

  const signUpButton = document.createElement("button");
  signUpButton.innerHTML = "Записаться";
  signUpButton.className = "button";

  const cancelButton = document.createElement("button");
  cancelButton.innerHTML = "Отменить запись";
  cancelButton.className = "button";

  signUpButtonCell.appendChild(signUpButton);
  cancelButtonCell.appendChild(cancelButton);

  // Проверка и установка состояния кнопок
  if (tableData[i].currentParticipants === tableData[i].maxParticipants) {
    signUpButton.disabled = true;
    signUpButton.className += " disabled";
  }

  if (tableData[i].currentParticipants === 0) {
    cancelButton.disabled = true;
    cancelButton.className += " disabled";
  }

  // Обработчики событий для кнопок
  signUpButton.addEventListener("click", function () {
    const row = this.parentNode.parentNode;
    let currentParticipantsCell = row.cells[3];
    let currentParticipants = parseInt(currentParticipantsCell.innerHTML);

    currentParticipants++;
    currentParticipantsCell.innerHTML = currentParticipants;

    if (currentParticipants === tableData[row.rowIndex - 1].maxParticipants) {
      this.disabled = true;
      this.className += " disabled";
    }

    cancelButton.disabled = false;
    cancelButton.className = "button";
  });

  cancelButton.addEventListener("click", function () {
    const row = this.parentNode.parentNode;
    let currentParticipantsCell = row.cells[3];
    let currentParticipants = parseInt(currentParticipantsCell.innerHTML);

    currentParticipants--;
    currentParticipantsCell.innerHTML = currentParticipants;

    if (currentParticipants === 0) {
      this.disabled = true;
      this.className += " disabled";
    }

    signUpButton.disabled = false;
    signUpButton.className = "button";
  });
}

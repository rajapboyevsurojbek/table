const data = [
  { id: 1, name: "John", age: 21, country: "England" },
  { id: 2, name: "Alice", age: 25, country: "USA" },
  { id: 3, name: "Bob", age: 30, country: "Canada" },
  { id: 4, name: "Emma", age: 28, country: "Australia" },
  { id: 5, name: "Liam", age: 24, country: "Ireland" },
  { id: 6, name: "Olivia", age: 22, country: "Scotland" },
  { id: 7, name: "Noah", age: 27, country: "New Zealand" },
  { id: 8, name: "Sophia", age: 26, country: "Germany" },
  { id: 9, name: "Mason", age: 29, country: "France" },
  { id: 10, name: "Isabella", age: 23, country: "Italy" },
];

const tableBody = document.querySelector("#dataTable tbody");
const addButton = document.getElementById("addButton");
const clearButton = document.getElementById("clearButtun");

addButton.addEventListener("click", () => {
  const randomData = data[Math.floor(Math.random() * data.length)];
  const newRow = document.createElement("tr");

  newRow.innerHTML = `
      <td>${randomData.id}</td>
      <td>${randomData.name}</td>
      <td>${randomData.age}</td>
      <td>${randomData.country}</td>
    `;

  tableBody.appendChild(newRow);
});

clearButton.addEventListener("click", () => {
  const rows = tableBody.getElementsByTagName("tr");
  if (rows.length > 0) {
    tableBody.removeChild(rows[rows.length - 1]);
  }
});

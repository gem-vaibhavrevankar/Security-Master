// Get the table element
const dataTable = document.getElementById("data-table");

// Get the table headers
const headers = dataTable.querySelectorAll("thead th");

// Object to store the current sort state for each column
const sortState = {};

// Function to sort the table data based on the selected column
function sortTable(columnIndex) {
  const dataType = headers[columnIndex].getAttribute("data-type");
  const rows = Array.from(dataTable.querySelectorAll("tbody tr"));

  // Sort the rows based on the content of the selected column
  rows.sort((a, b) => {
    const aValue = a.cells[columnIndex].textContent.trim();
    const bValue = b.cells[columnIndex].textContent.trim();

    if (dataType === "numeric") {
      return parseFloat(aValue) - parseFloat(bValue);
    } else {
      return aValue.localeCompare(bValue);
    }
  });

  // Reverse the order if the column is already sorted in ascending order
  if (sortState[columnIndex] === "asc") {
    rows.reverse();
    sortState[columnIndex] = "desc";
  } else {
    sortState[columnIndex] = "asc";
  }

  // Remove existing rows from the table
  const tbody = dataTable.querySelector("tbody");
  tbody.innerHTML = "";

  // Append the sorted rows to the table
  rows.forEach((row) => {
    tbody.appendChild(row);
  });
}

// Add click event listeners to the table headers
headers.forEach((header, index) => {
  header.addEventListener("click", () => {
    sortTable(index);
  });
});

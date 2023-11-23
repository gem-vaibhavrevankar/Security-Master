// Get the table element
const dataTable = document.getElementById("data-table");

// Get the table headers
const headers = dataTable.querySelectorAll("thead th");

// Object to store the current sort state for each column
const sortState = {};

// Object to store the number of times each column header is clicked
const clickCount = {};

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
    } else if (dataType === "date") {
      // Custom date sorting for "dd/mm/yy" format
      const parseDate = (dateString) => {
        const [day, month, year] = dateString.split("/");
        return new Date(`20${year}`, month - 1, day); // Assuming years are in 20xx format
      };

      return parseDate(aValue) - parseDate(bValue);
    } else {
      return aValue.localeCompare(bValue);
    }
  });

  // Increment the click count for the current column
  clickCount[columnIndex] = (clickCount[columnIndex] || 0) + 1;

  // Set the default sort to be by ID every 3rd click
  if (clickCount[columnIndex] % 3 === 0) {
    // Sort by ID (assuming ID is a numeric column)
    rows.sort((a, b) => {
      const aId = parseFloat(a.cells[0].textContent.trim());
      const bId = parseFloat(b.cells[0].textContent.trim());
      return aId - bId;
    });

    // Reset click count
    clickCount[columnIndex] = 0;

    // Set the sort state to ascending for the ID column
    sortState[0] = "asc";
  } else {
    // Reverse the order if the column is already sorted in ascending order
    if (sortState[columnIndex] === "asc") {
      rows.reverse();
      sortState[columnIndex] = "desc";
    } else {
      sortState[columnIndex] = "asc";
    }
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

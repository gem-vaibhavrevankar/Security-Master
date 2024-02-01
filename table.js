let currentPage = 1;
let itemsPerPage = 10; // Number of items to display per page
let totalRows = 0; // Store the total number of rows
let totalPages = 0;
let uniqueValuesDictionary = {};

// JavaScript to add the "total-label" class
const totalRowsTd = document.getElementById("total-rows");
const totalColumnsTd = document.getElementById("total-columns");
const totalPagesTd = document.getElementById("total-pages");
const currentPageTd = document.getElementById("current-page");
const rowsDropdown = document.getElementById("rows-dropdown");
const pageNumbersContainer = document.getElementById("page-number-container"); 
const refreshButton = document.getElementById("refresh-button");

totalRowsTd.classList.add("total-label");
totalColumnsTd.classList.add("total-label");
totalPagesTd.classList.add("total-label");
currentPageTd.classList.add("total-label"); 

rowsDropdown.addEventListener("change", () => {
  currentPage = 1;
  if (rowsDropdown.value === "All") {
    itemsPerPage = totalRows;
  } else {
    itemsPerPage = parseInt(rowsDropdown.value, 10);
  }
  calculateTotalPages();
  fetchDataAndPopulateTable();
});

function calculateTotalPages() {
  totalPages = itemsPerPage !== 0 ? Math.ceil(totalRows / itemsPerPage) : 0;
}

function fetchDataAndPopulateTable() {
  // Replace this URL with the actual URL of your JSON API
  // const apiUrl = "https://securitymasterdataspie.onrender.com/IdData/?";
  const apiUrl = localStorage.getItem('url');
  console.log(apiUrl);

  // Fetch data from the API
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
     
      totalRows = data.length;

      const table = document.getElementById("data-table");
      const tbody = table.querySelector("tbody");

      // Clear the table body
      tbody.innerHTML = "";

      // Clear the uniqueValuesDictionary
      uniqueValuesDictionary = {};

      // Calculate the start and end indexes for the current page
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      // Iterate through the data and populate the table with rows
      for (let i = startIndex; i < endIndex && i < data.length; i++) {
        const item = data[i];

        // Iterate through columns to populate uniqueValuesDictionary
        Object.keys(item).forEach((column) => {
          // Check if the column is already in the dictionary
          if (!uniqueValuesDictionary[column]) {
            uniqueValuesDictionary[column] = new Set();
          }

          if(item[column] != "") {
            // Add the value to the set to ensure uniqueness
            uniqueValuesDictionary[column].add(item[column]);
          }
        });

        const row = document.createElement("tr");
        // let faceValue = item.Face_Value.substring(1, item.Face_Value.length - 1).replace(/,/g, '');
        // let currentPrice = item.Current_Price.substring(1, item.Current_Price.length - 1).replace(/,/g, '');

        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.Name}</td>
            <td data-column="Asset_Class">${item.Asset_Class}</td>
            <td>${item.Bond_Type}</td>
            <td>${item.Coupon_Rate}</td>
            <td>${item.Maturity_Date}</td>
            <td>${item.Face_Value.substring(1, item.Face_Value.length - 1).replace(/,/g, '')}</td>
            <td>${item.Yield_to_Maturity}</td>
            <td>${item.Current_Price.substring(1, item.Current_Price.length - 1).replace(/,/g, '')}</td>
            <td>${item.Credit_Rating}</td>
            <td>${item.Country_of_Exposure}</td>
            <td>${item.Payment_Frequency}</td>
            <td>${item.Security_ID}</td>
            <td>${item.Exchange_Code}</td>
            <td>${item.Security_Type_2}</td>
            <td>${item.FIGI}</td>
            <td>${item.Ticker}</td>
            <td>${item.Market_Sector}</td>
            <td>${item.Share_Class}</td>
            <td>${item.Security_Description}</td>
            <td>${item.Security_Type}</td>
            <td>${item.SERIES}</td>
            <td>${item.ISIN}</td>
            <td>${item.LISTING_DATE}</td>
            <td>${item.NEXT_INTEREST_PAYMENT_DATE}</td>
            <td>${item.ISSUE_DESCIPTION}</td>
            <td>${item.EXPIRY_DATE}</td>
            <td>${item.OPTION_TYPE}</td>
            <td>${item.STRIKE}</td>
            <td>${item.SPREAD}</td>
            <td>${item.CHNG}</td>
            <td>${item.OPEN}</td>
            <td>${item.HIGH}</td>
            <td>${item.LOW}</td>
            <td>${item.OPEN_INTEREST}</td>
            <td>${item.NO_OF_TRADES}</td>
            <td>${item.UNDERLYING_VALUE}</td>   
            <!-- Add more cells for other data properties -->
            `;
        tbody.appendChild(row);
      }

      const numberOfRows = table.tBodies[0].rows.length; // Get the number of rows in the tbody
      const numberOfColumns = document.querySelectorAll("#data-table thead:nth-of-type(2) th").length; // Get the number of columns in the thead

      document.getElementById("total-rows").textContent = numberOfRows;
      document.getElementById("total-columns").textContent = numberOfColumns;
      
      // Recalculate totalPages after fetching data
      calculateTotalPages();
      
      document.getElementById("total-pages").textContent = totalPages;
      document.getElementById("current-page").textContent = currentPage;
      
      renderPageNumbers();

      applyFilters(uniqueValuesDictionary);
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  // Your data fetching and population code here
  // Be sure to populate the table rows based on the current page and itemsPerPage
}

function renderPageNumbers() {
  pageNumbersContainer.innerHTML = "";

  const startPage = Math.max(1, currentPage - 4);
  const endPage = Math.min(totalPages, startPage + 9);

  for (let i = startPage; i <= endPage; i++) {
    const pageNumberButton = document.createElement("button");
    pageNumberButton.textContent = i;
    pageNumberButton.addEventListener("click", () => goToPage(i));
    if (i === currentPage) {
      pageNumberButton.classList.add("current-page");
    }
    pageNumbersContainer.appendChild(pageNumberButton);
  }
}

// Function to apply filters
function applyFilters(uniqueValuesDictionary) {
  // Get the dropdown element
  var dropdown = document.getElementById("Asset-dropdown");

  // Clear the existing options
  dropdown.innerHTML = "";
  dropdown.innerHTML += `\n<option value="all">All</option>`; // Add an option to show all rows
  
  // Add options to the dropdown
  uniqueValuesDictionary['Asset_Class'].forEach((value) => {
    var option = document.createElement("option");
    option.text = value;
    console.log(value);
    dropdown.add(option);
  });

  // Add an event listener to the dropdown
  dropdown.addEventListener("change", () => {
    const selectedValue = dropdown.value;
    const columnName = "Asset_Class";
    filterTableByColumn(columnName, selectedValue);
  });
}

function filterTableByColumn(columnName, selectedValue) {
  const rows = document.querySelectorAll("#data-table tbody tr");
  let displayedRows = 0;

  rows.forEach((row) => {
    const cell = row.querySelector(`td[data-column="${columnName}"]`);
    const cellValue = cell.textContent;

    if (selectedValue === "all" || cellValue === selectedValue) {
      row.style.display = "table-row";
      displayedRows++;
    } else {
      row.style.display = "none";
    }
  });

  document.getElementById("total-rows").textContent = displayedRows;

  // Recalculate totalPages after filtering
  calculateTotalPages();

  // Update the total pages and current page display
  document.getElementById("total-pages").textContent = totalPages;
  document.getElementById("current-page").textContent = currentPage;

  // Re-render page numbers after filtering
  renderPageNumbers();
}

function goToPage(page) {
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    fetchDataAndPopulateTable();
  }
}

fetchDataAndPopulateTable();

function filterTable(query) {
  const rows = document.querySelectorAll("#data-table tbody tr");
  let displayedRows = 0;

  rows.forEach((row) => {
    const cells = row.querySelectorAll("td");
    let rowMatchesQuery = false;

    cells.forEach((cell) => {
      if (cell.textContent.toLowerCase().includes(query)) {
        rowMatchesQuery = true;
      }
    });

    if (rowMatchesQuery) {
      row.style.display = "table-row";
      displayedRows++;
    } else {
      row.style.display = "none";
    }
  });
  document.getElementById("total-rows").textContent = displayedRows;
}

fetchDataAndPopulateTable();

const searchInput = document.getElementById("search");
searchInput.addEventListener("input", () => {
  const query = searchInput.value.trim().toLowerCase();
  filterTable(query);
});

const prevPageButton = document.getElementById("prev-page");
const nextPageButton = document.getElementById("next-page");

prevPageButton.addEventListener("click", () => {
  if (currentPage > 1) {
    currentPage--;
    fetchDataAndPopulateTable();
  }
});

nextPageButton.addEventListener("click", () => {
  currentPage++;
  fetchDataAndPopulateTable();
});

refreshButton.addEventListener("click", () => {
  localStorage.setItem('url', 'https://securitymasterdataspie.onrender.com/Master_Data/?');
  calculateTotalPages();
  fetchDataAndPopulateTable();
});

const exportButton = document.getElementById("export-button");

exportButton.addEventListener("click", () => {
  exportTableToCSV();
});

function exportTableToCSV() {
  const table = document.getElementById("data-table");
  const rows = table.querySelectorAll("tbody tr");

  let csvContent = "data:text/csv;charset=utf-8,";
  csvContent += "ID,Name,Asset Class,Bond Type,Coupon Rate,Maturity Date,Face Value,Yield to Maturity,Current Price,Credit Rating,Country of Exposure,Payment Frequency,Security ID,Exchange Code,Security Type 2,FIGI,Ticker,Market Sector,Share Class,Security Description,Security Type,SERIES,ISIN,LISTING DATE,NEXT INTEREST PAYMENT DATE,ISSUE DESCIPTION,EXPIRY DATE,OPTION TYPE,STRIKE,SPREAD,CHANGE,OPEN,HIGH,LOW,OPEN INTEREST,NO OF TRADES,UNDERLYING VALUE";

  rows.forEach((row) => {
    const rowData = Array.from(row.children).map((cell) => cell.textContent);
    csvContent += "\n" + rowData.join(",");
  });

  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute("download", "exported_data.csv");
  document.body.appendChild(link);
  link.click();
}
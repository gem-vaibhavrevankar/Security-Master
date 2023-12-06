let currentPage = 0;
let itemsPerPage = 0; // Number of items to display per page
let totalRows = 0; // Store the total number of rows
let totalPages = 0;

// JavaScript to add the "total-label" class
const totalRowsTd = document.getElementById("total-rows");
const totalColumnsTd = document.getElementById("total-columns");
const totalPagesTd = document.getElementById("total-pages");
const currentPageTd = document.getElementById("current-page");
totalRowsTd.classList.add("total-label");
totalColumnsTd.classList.add("total-label");
totalPagesTd.classList.add("total-label");
currentPageTd.classList.add("total-label"); 

const rowsDropdown = document.getElementById("rows-dropdown");
const pageNumbersContainer = document.getElementById("page-number-container"); 

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
  totalPages = itemsPerPage !== 0 ? Math.ceil(totalRows / itemsPerPage) : 0;;
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

      // Calculate the start and end indexes for the current page
      const startIndex = (currentPage - 1) * itemsPerPage;
      const endIndex = startIndex + itemsPerPage;

      // Iterate through the data and populate the table with rows
      for (let i = startIndex; i < endIndex && i < data.length; i++) {
        const item = data[i];
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${item.id}</td>
            <td>${item.NAME}</td>
            <td>${item.CRNCY}</td>
            <td>${item.MARKET_SECTOR}</td>
            <td>${item.EXC_CODE}</td>
            <td>${item.SECURITY_TYPE}</td>
            <td>${item.CNTRY_ISSUE}</td>
            <td>${item.SECURITY_TYPE2}</td>
            <td>${item.FUTURES_CATEGORY}</td>
            <td>${item.LAST_TRADEABLE_DT}</td>
            <td>${item.FUR_EXCH_NAME_LONG}</td>
            <td>${item.FUT_CONT_SIZE}</td>
            <td>${item.FUT_TICK_SIZE}</td>
            <td>${item.FUT_TICK_VALUE}</td>
            <td>${item.FUT_GEN_MONTH}</td>
            <td>${item.FUT_FIRST_TRADE_DT}</td>
            <td>${item.CASH_SETTLED}</td>
            <td>${item.FUT_TRADING_UNITS}</td>
            <td>${item.QUOTE_UNITS}</td>
            <td>${item.FUT_MONTH_YEAR}</td>
            <td>${item.FUT_CONTRACT_DATE}</td>
            <td>${item.ID_BB_GLOBAL}</td>
            <td>${item.ID_BB_GLOBAL_COMPANY}</td>
            <td>${item.ID_BB_GLOBAL_NAME}</td>
            <td>${item.QUOTED_CURRENCY}</td>
            <td>${item.TICKER}</td>
            <td>${item.CUSIP}</td>
            <td>${item.ISIN}</td>
            <td>${item.SEDOL}</td>
            <td>${item.ICRA_RATING}</td>
            <td>${item.MOODY_RATING}</td>
            <td>${item.CRISIL_RATING}</td>
            <td>${item.WEBSITE}</td>
            <td>${item.ACTIVE_SWITCH}</td>
            <td>${item.SEC_DESCRIPTION}</td>
            <!-- Add more cells for other data properties -->
            `;
        tbody.appendChild(row);
      }

      const numberOfRows = table.tBodies[0].rows.length; // Get the number of rows in the tbody
      const numberOfColumns = document.querySelectorAll("#data-table thead:nth-of-type(2) th").length; // Get the number of columns in the thead

      document.getElementById("total-rows").textContent = numberOfRows;
      document.getElementById("total-columns").textContent = numberOfColumns;
      document.getElementById("total-pages").textContent = totalPages;
      document.getElementById("current-page").textContent = currentPage;
      
      renderPageNumbers();
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
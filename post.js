const addEntryButton = document.getElementById("add-entry-button");
const addEntryModal = document.getElementById("add-entry-modal");
const closeModalButton = document.getElementById("close-modal");

addEntryButton.addEventListener("click", () => {
  addEntryModal.style.display = "block";
});

closeModalButton.addEventListener("click", () => {
  addEntryModal.style.display = "none";
});

window.onclick = (event) => {
  if (event.target === addEntryModal) {
    addEntryModal.style.display = "none";
  }
};

// Add an event listener to the form submission
const addForm = document.getElementById("add-form");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get data from the form fields
  const name = document.getElementById("add-name").value;
  const currency = document.getElementById("add-currency").value;
  // Retrieve values for the remaining fields in a similar manner

  // Create an object with the data
  const newData = {
    NAME: name,
    CRNCY: currency,
    // MARKET_SECTOR: market_sector,
    // EXC_CODE: exc_code,
    // SECURITY_TYPE: security_type,
    // CNTRY_ISSUE: cntry_issue,
    // SECURITY_TYPE2: security_type2,
    // FUTURES_CATEGORY: futures_category,
    // LAST_TRADEABLE_DT: last_tradeable_dt,
    // FUR_EXCH_NAME_LONG: fur_exch_name_long,
    // FUT_CONT_SIZE: fut_cont_size,
    // FUT_TICK_SIZE: fut_tick_size,
    // FUT_TICK_VALUE: fut_tick_value,
    // FUT_GEN_MONTH: fut_gen_month,
    // FUT_FIRST_TRADE_DT: fut_first_trade_dt,
    // CASH_SETTLED: cash_settled,
    // FUT_TRADING_UNITS: fut_trading_units,
    // QUOTE_UNITS: quote_units,
    // FUT_MONTH_YEAR: fut_month_year,
    // FUT_CONTRACT_DATE: fut_contract_date,
    // ID_BB_GLOBAL: id_bb_global,
    // ID_BB_GLOBAL_COMPANY: id_bb_global_company,
    // ID_BB_GLOBAL_NAME: id_bb_global_name,
    // QUOTED_CURRENCY: quoted_currency,
    // TICKER: ticker,
    // CUSIP: cusip,
    // ISIN: isin,
    // SEDOL: sedol,
    // ICRA_RATING: icra_rating,
    // MOODY_RATING: moody_rating,
    // CRISIL_RATING: crisil_rating,
    // WEBSITE: website,
    // ACTIVE_SWITCH: active_switch,
    // SEC_DESCRIPTION: sec_description,
    // Add properties for the remaining data fields
  };

  const apiUrl = "https://reqres.in/api/users"; // Replace with your API URL

  // Make a POST request to your server to save the data
  fetch(apiUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newData),
  })
    .then((response) => response.json())
    .then((data) => {
      // Handle the response from the server if needed
      // For example, you can update the table or display a success message
      console.log("Data added successfully:", data);

      // Clear the form fields after successfully adding the data
      addForm.reset();

      // Refresh the table to show the new data
      fetchDataAndPopulateTable();
    })
    .catch((error) => {
      console.error("Error adding data:", error);
    });
});

// Make sure to replace "https://your-server-url.com/add-data-endpoint" with the actual URL of your server's API endpoint for adding data.

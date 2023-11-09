const apiUrl = "https://securitymasterdataspie.onrender.com/securitydata/?";
const addEntryButton = document.getElementById("add-entry-button");
const addEntryModal = document.getElementById("add-entry-modal");
const closeModalButton = document.getElementById("close-modal");

// Function to fetch existing data
function fetchDataAndCheckIdBbGlobal(idBbGlobal) {
  // Make a GET request to fetch existing data
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Check if the ID_BB_GLOBAL already exists
      const idExists = data.some((item) => item.ID_BB_GLOBAL === idBbGlobal);
      return idExists;
    });
}


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

const addForm = document.getElementById("add-form");
addForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get data from the form fields
  const name = document.getElementById("add-name").value;
  const currency = document.getElementById("add-currency").value;
  const market_sector = document.getElementById("add-market-sector").value;
  const exc_code = document.getElementById("add-exc-code").value;
  const security_type = document.getElementById("add-security-type").value;
  const cntry_issue = document.getElementById("add-cntry-issue").value;
  const security_type2 = document.getElementById("add-security-type2").value;
  const futures_category = document.getElementById("add-futures-category").value;
  const last_tradeable_dt = document.getElementById("add-last-tradeable-dt").value;
  const fur_exch_name_long = document.getElementById("add-fur-exch-name-long").value;
  const fut_cont_size = document.getElementById("add-fut-cont-size").value;
  const fut_tick_size = document.getElementById("add-fut-tick-size").value;
  const fut_tick_value = document.getElementById("add-fut-tick-value").value;
  const fut_gen_month = document.getElementById("add-fut-gen-month").value;
  const fut_first_trade_dt = document.getElementById("add-fut-first-trade-dt").value;
  const cash_settled = document.getElementById("add-cash-settled").value;
  const fut_trading_units = document.getElementById("add-fut-trading-units").value;
  const quote_units = document.getElementById("add-quote-units").value;
  const fut_month_year = document.getElementById("add-fut-month-year").value;
  const fut_contract_date = document.getElementById("add-fut-contract-date").value;
  const id_bb_global = document.getElementById("add-id-bb-global").value;
  const id_bb_global_company = document.getElementById("add-id-bb-global-company").value;
  const id_bb_global_name = document.getElementById("add-id-bb-global-name").value;
  const quoted_currency = document.getElementById("add-quoted-currency").value;
  const ticker = document.getElementById("add-ticker").value;
  const cusip = document.getElementById("add-cusip").value;
  const isin = document.getElementById("add-isin").value;
  const sedol = document.getElementById("add-sedol").value;
  const icra_rating = document.getElementById("add-icra-rating").value;
  const moody_rating = document.getElementById("add-moody-rating").value;
  const crisil_rating = document.getElementById("add-crisil-rating").value;
  const website = document.getElementById("add-website").value;
  const active_switch = document.getElementById("add-active-switch").value;
  const sec_description = document.getElementById("add-sec-description").value;

  // Retrieve values for the remaining fields in a similar manner

  fetchDataAndCheckIdBbGlobal(id_bb_global)
    .then((idExists) => {
      if (idExists) {
        alert(`${id_bb_global} already exists in the table.`);
      } else {
        // Create an object with the data
        const newData = {
          // Add other form field data here
          NAME: name,
          CRNCY: currency,
          MARKET_SECTOR: market_sector,
          EXC_CODE: exc_code,
          SECURITY_TYPE: security_type,
          CNTRY_ISSUE: cntry_issue,
          SECURITY_TYPE2: security_type2,
          FUTURES_CATEGORY: futures_category,
          LAST_TRADEABLE_DT: last_tradeable_dt,
          FUR_EXCH_NAME_LONG: fur_exch_name_long,
          FUT_CONT_SIZE: fut_cont_size,
          FUT_TICK_SIZE: fut_tick_size,
          FUT_TICK_VALUE: fut_tick_value,
          FUT_GEN_MONTH: fut_gen_month,
          FUT_FIRST_TRADE_DT: fut_first_trade_dt,
          CASH_SETTLED: cash_settled,
          FUT_TRADING_UNITS: fut_trading_units,
          QUOTE_UNITS: quote_units,
          FUT_MONTH_YEAR: fut_month_year,
          FUT_CONTRACT_DATE: fut_contract_date,
          ID_BB_GLOBAL: id_bb_global,
          ID_BB_GLOBAL_COMPANY: id_bb_global_company,
          ID_BB_GLOBAL_NAME: id_bb_global_name,
          QUOTED_CURRENCY: quoted_currency,
          TICKER: ticker,
          CUSIP: cusip,
          ISIN: isin,
          SEDOL: sedol,
          ICRA_RATING: icra_rating,
          MOODY_RATING: moody_rating,
          CRISIL_RATING: crisil_rating,
          WEBSITE: website,
          ACTIVE_SWITCH: active_switch,
          SEC_DESCRIPTION: sec_description,
        };

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
            console.log("Data added successfully:", data);

            // Clear the form fields after successfully adding the data
            addForm.reset();

            // Refresh the table to show the new data
            fetchDataAndPopulateTable();

            // Display a success popup with the new entry's ID
            const newEntryId = data.id; // Replace "ID" with the actual property name in the server response

            // Create a popup element
            const popup = document.createElement("div");
            popup.className = "success-popup";
            popup.innerHTML = `New entry added with ID: ${newEntryId}`;

            // Append the popup to the body
            document.body.appendChild(popup);
            alert(`New entry added with ID: ${newEntryId}`);
          })
          .catch((error) => {
            console.error("Error adding data:", error);
          });
      }
    });
});

// Make sure to replace "https://securitymasterdataspie.onrender.com/securitydata/" with the actual URL of your server's API endpoint for adding data.

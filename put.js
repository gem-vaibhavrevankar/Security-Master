const updateEntryButton = document.getElementById("update-entry-button");
const updateEntryModal = document.getElementById("update-entry-modal");
const closeUpdateModalButton = document.getElementById("close-update-modal");

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

updateEntryButton.addEventListener("click", () => {
  updateEntryModal.style.display = "block";
});

closeUpdateModalButton.addEventListener("click", () => {
  updateEntryModal.style.display = "none";
});

window.onclick = (event) => {
  if (event.target === updateEntryModal) {
    updateEntryModal.style.display = "none";
  }
};

const updateForm = document.getElementById("update-form");

updateForm.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get the current entry's ID
  const entryId = document.getElementById("update-entry-id").value;

  // Retrieve the existing data to get previous values
  const apiUrl = `https://securitymasterdataspie.onrender.com/securitydata/${entryId}`;

  fetch(apiUrl)
    .then((response) => response.json())
    .then(async (existingData) => {
      // Get data from the form fields
      const updatedName = document.getElementById("update-name").value;
      const updatedCurrency = document.getElementById("update-currency").value;
      const updatedMarketSector = document.getElementById("update-market-sector").value;
      const updatedExchangeCode = document.getElementById("update-exc-code").value;
      const updatedSecurityType = document.getElementById("update-security-type").value;
      const updatedCountryOfIssue = document.getElementById("update-cntry-issue").value;
      const updatedSecurityType2 = document.getElementById("update-security-type2").value;
      const updatedFuturesCategory = document.getElementById("update-futures-category").value;
      const updatedLastTradeableDate = document.getElementById("update-last-tradeable-dt").value;
      const updatedFuturesExchangeNameLong = document.getElementById("update-fur-exch-name-long").value;
      const updatedFuturesContractSize = document.getElementById("update-fut-cont-size").value;
      const updatedFuturesTickSize = document.getElementById("update-fut-tick-size").value;
      const updatedFuturesTickValue = document.getElementById("update-fut-tick-value").value;
      const updatedFuturesGenericMonth = document.getElementById("update-fut-gen-month").value;
      const updatedFuturesFirstTradeDate = document.getElementById("update-fut-first-trade-dt").value;
      const updatedCashSettled = document.getElementById("update-cash-settled").value;
      const updatedFuturesTradingUnits = document.getElementById("update-fut-trading-units").value;
      const updatedQuoteUnits = document.getElementById("update-quote-units").value;
      const updatedFuturesMonthYear = document.getElementById("update-fut-month-year").value;
      const updatedFuturesContractDate = document.getElementById("update-fut-contract-date").value;
      const updatedIdBBGlobal = document.getElementById("update-id-bb-global").value;
      const updatedIdBBGlobalCompany = document.getElementById("update-id-bb-global-company").value;
      const updatedIdBBGlobalName = document.getElementById("update-id-bb-global-name").value;
      const updatedQuotedCurrency = document.getElementById("update-quoted-currency").value;
      const updatedTicker = document.getElementById("update-ticker").value;
      const updatedCUSIP = document.getElementById("update-cusip").value;
      const updatedISIN = document.getElementById("update-isin").value;
      const updatedSEDOL = document.getElementById("update-sedol").value;
      const updatedICRARating = document.getElementById("update-icra-rating").value;
      const updatedMoodyRating = document.getElementById("update-moody-rating").value;
      const updatedCRISILRating = document.getElementById("update-crisil-rating").value;
      const updatedWebsite = document.getElementById("update-website").value;
      const updatedActiveSwitch = document.getElementById("update-active-switch").value;
      const updatedSecurityDescription = document.getElementById("update-sec-description").value;
      // Add similar lines for other fields...

      const idBbGlobalExists = await fetchDataAndCheckIdBbGlobal(updatedIdBBGlobal);

      if (idBbGlobalExists && updatedIdBBGlobal !== existingData.ID_BB_GLOBAL) {
        // Handle the case where the ID_BB_GLOBAL already exists
        alert(`Error: ${updatedIdBBGlobal} already exists. Please choose a different value.`);
        return;
      }

      // Get the previous values from the existing data
      const previousName = existingData.NAME;
      const previousCurrency = existingData.CRNCY;
      const previousMarketSector = existingData.MARKET_SECTOR;
      const previousExchangeCode = existingData.EXC_CODE;
      const previousSecurityType = existingData.SECURITY_TYPE;
      const previousCountryOfIssue = existingData.CNTRY_ISSUE;
      const previousSecurityType2 = existingData.SECURITY_TYPE2;
      const previousFuturesCategory = existingData.FUTURES_CATEGORY;
      const previousLastTradeableDate = existingData.LAST_TRADEABLE_DT;
      const previousFuturesExchangeNameLong = existingData.FUR_EXCH_NAME_LONG;
      const previousFuturesContractSize = existingData.FUT_CONT_SIZE;
      const previousFuturesTickSize = existingData.FUT_TICK_SIZE;
      const previousFuturesTickValue = existingData.FUT_TICK_VALUE;
      const previousFuturesGenericMonth = existingData.FUT_GEN_MONTH;
      const previousFuturesFirstTradeDate = existingData.FUT_FIRST_TRADE_DT;
      const previousCashSettled = existingData.CASH_SETTLED;
      const previousFuturesTradingUnits = existingData.FUT_TRADING_UNITS;
      const previousQuoteUnits = existingData.QUOTE_UNITS;
      const previousFuturesMonthYear = existingData.FUT_MONTH_YEAR;
      const previousFuturesContractDate = existingData.FUT_CONTRACT_DATE;
      const previousIdBBGlobal = existingData.ID_BB_GLOBAL;
      const previousIdBBGlobalCompany = existingData.ID_BB_GLOBAL_COMPANY;
      const previousIdBBGlobalName = existingData.ID_BB_GLOBAL_NAME;
      const previousQuotedCurrency = existingData.QUOTED_CURRENCY;
      const previousTicker = existingData.TICKER;
      const previousCUSIP = existingData.CUSIP;
      const previousISIN = existingData.ISIN;
      const previousSEDOL = existingData.SEDOL;
      const previousICRARating = existingData.ICRA_RATING;
      const previousMoodyRating = existingData.MOODY_RATING;
      const previousCRISILRating = existingData.CRISIL_RATING;
      const previousWebsite = existingData.WEBSITE;
      const previousActiveSwitch = existingData.ACTIVE_SWITCH;
      const previousSecurityDescription = existingData.SEC_DESCRIPTION;
      // Add similar lines for other fields...

      // Check each field and update the value accordingly
      const updatedData = {
        NAME: updatedName !== "" ? updatedName : previousName,
        CRNCY: updatedCurrency !== "" ? updatedCurrency : previousCurrency,
        MARKET_SECTOR: updatedMarketSector !== "" ? updatedMarketSector : previousMarketSector,
        EXC_CODE: updatedExchangeCode !== "" ? updatedExchangeCode : previousExchangeCode,
        SECURITY_TYPE: updatedSecurityType !== "" ? updatedSecurityType : previousSecurityType,
        CNTRY_ISSUE: updatedCountryOfIssue !== "" ? updatedCountryOfIssue : previousCountryOfIssue,
        SECURITY_TYPE2: updatedSecurityType2 !== "" ? updatedSecurityType2 : previousSecurityType2,
        FUTURES_CATEGORY: updatedFuturesCategory !== "" ? updatedFuturesCategory : previousFuturesCategory,
        LAST_TRADEABLE_DT: updatedLastTradeableDate !== "" ? updatedLastTradeableDate : previousLastTradeableDate,
        FUR_EXCH_NAME_LONG: updatedFuturesExchangeNameLong !== "" ? updatedFuturesExchangeNameLong : previousFuturesExchangeNameLong,
        FUT_CONT_SIZE: updatedFuturesContractSize !== "" ? updatedFuturesContractSize : previousFuturesContractSize,
        FUT_TICK_SIZE: updatedFuturesTickSize !== "" ? updatedFuturesTickSize : previousFuturesTickSize,
        FUT_TICK_VALUE: updatedFuturesTickValue !== "" ? updatedFuturesTickValue : previousFuturesTickValue,
        FUT_GEN_MONTH: updatedFuturesGenericMonth !== "" ? updatedFuturesGenericMonth : previousFuturesGenericMonth,
        FUT_FIRST_TRADE_DT: updatedFuturesFirstTradeDate !== "" ? updatedFuturesFirstTradeDate : previousFuturesFirstTradeDate,
        CASH_SETTLED: updatedCashSettled !== "" ? updatedCashSettled : previousCashSettled,
        FUT_TRADING_UNITS: updatedFuturesTradingUnits !== "" ? updatedFuturesTradingUnits : previousFuturesTradingUnits,
        QUOTE_UNITS: updatedQuoteUnits !== "" ? updatedQuoteUnits : previousQuoteUnits,
        FUT_MONTH_YEAR: updatedFuturesMonthYear !== "" ? updatedFuturesMonthYear : previousFuturesMonthYear,
        FUT_CONTRACT_DATE: updatedFuturesContractDate !== "" ? updatedFuturesContractDate : previousFuturesContractDate,
        ID_BB_GLOBAL: updatedIdBBGlobal !== "" ? updatedIdBBGlobal : previousIdBBGlobal,
        ID_BB_GLOBAL_COMPANY: updatedIdBBGlobalCompany !== "" ? updatedIdBBGlobalCompany : previousIdBBGlobalCompany,
        ID_BB_GLOBAL_NAME: updatedIdBBGlobalName !== "" ? updatedIdBBGlobalName : previousIdBBGlobalName,
        QUOTED_CURRENCY: updatedQuotedCurrency !== "" ? updatedQuotedCurrency : previousQuotedCurrency,
        TICKER: updatedTicker !== "" ? updatedTicker : previousTicker,
        CUSIP: updatedCUSIP !== "" ? updatedCUSIP : previousCUSIP,
        ISIN: updatedISIN !== "" ? updatedISIN : previousISIN,
        SEDOL: updatedSEDOL !== "" ? updatedSEDOL : previousSEDOL,
        ICRA_RATING: updatedICRARating !== "" ? updatedICRARating : previousICRARating,
        MOODY_RATING: updatedMoodyRating !== "" ? updatedMoodyRating : previousMoodyRating,
        CRISIL_RATING: updatedCRISILRating !== "" ? updatedCRISILRating : previousCRISILRating,
        WEBSITE: updatedWebsite !== "" ? updatedWebsite : previousWebsite,
        ACTIVE_SWITCH: updatedActiveSwitch !== "" ? updatedActiveSwitch : previousActiveSwitch,
        SEC_DESCRIPTION: updatedSecurityDescription !== "" ? updatedSecurityDescription : previousSecurityDescription,
      }; 

      // Make a PUT request to update the data
      fetch(apiUrl, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedData),
      })
        .then((response) => response.json())
        .then((data) => {
          // Handle the response from the server if needed
          console.log("Data updated successfully:", data);

          // Clear the form fields after successfully updating the data
          updateForm.reset();

          // Refresh the table to show the updated data
          fetchDataAndPopulateTable();

          // Display a success popup with the updated entry's ID
          const updatedEntryId = data.id; // Replace "ID" with the actual property name in the server response

          // Create a popup element
          const popup = document.createElement("div");
          popup.className = "success-popup";
          popup.innerHTML = `Entry updated with ID: ${updatedEntryId}`;

          // Append the popup to the body
          document.body.appendChild(popup);
          alert(`Entry updated with ID: ${updatedEntryId}`);
        })
        .catch((error) => {
          console.error("Error updating data:", error);
        });

    })
    .catch((error) => {
      console.error("Error fetching existing data:", error);
    });
});
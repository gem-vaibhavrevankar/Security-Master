const apiUrl = "https://securitymasterdataspie.onrender.com/pendingreq/?";
const addEntryButton = document.getElementById("add-entry-button");
const addEntryModal = document.getElementById("add-entry-modal");
const closeModalButton = document.getElementById("close-modal");

// Function to fetch existing data
function fetchDataAndCheckIdBbGlobal(isin) {
  // Make a GET request to fetch existing data
  return fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      // Check if the ID_BB_GLOBAL already exists
      const idExists = data.some((item) => item.ISIN === isin);
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
  // Example: Retrieving values from the form
  const name = document.getElementById("add-name").value;
  const assetClass = document.getElementById("add-asset-class").value;
  const bondType = document.getElementById("add-bond-type").value;
  const couponRate = document.getElementById("add-coupon-rate").value;
  const maturityDate = document.getElementById("add-maturity-date").value;
  const faceValue = document.getElementById("add-face-value").value;
  const yieldToMaturity = document.getElementById("add-yield-to-maturity").value;
  const currentPrice = document.getElementById("add-current-price").value;
  const creditRating = document.getElementById("add-credit-rating").value;
  const countryOfExposure = document.getElementById("add-country-of-exposure").value;
  const paymentFrequency = document.getElementById("add-payment-frequency").value;
  const securityId = document.getElementById("add-security-id").value;
  const excCode = document.getElementById("add-exc-code").value;
  const securityType2 = document.getElementById("add-security-type2").value;
  const figi = document.getElementById("add-figi").value;
  const ticker = document.getElementById("add-ticker").value;
  const marketSector = document.getElementById("add-market-sector").value;
  const shareClass = document.getElementById("add-share-class").value;
  const secDescription = document.getElementById("add-sec-description").value;
  const securityType = document.getElementById("add-security-type").value;
  const series = document.getElementById("add-series").value;
  const isin = document.getElementById("add-isin").value;
  const listingDate = document.getElementById("add-listing-date").value;
  const nextInterestPaymentDate = document.getElementById("add-next-interest-payment-date").value;
  const issueDescription = document.getElementById("add-issue-description").value;
  const expiryDate = document.getElementById("add-expiry-date").value;
  const optionType = document.getElementById("add-option-type").value;
  const strike = document.getElementById("add-strike").value;
  const spread = document.getElementById("add-spread").value;
  const change = document.getElementById("add-change").value;
  const open = document.getElementById("add-open").value;
  const high = document.getElementById("add-high").value;
  const low = document.getElementById("add-low").value;
  const openInterest = document.getElementById("add-open-interest").value;
  const noOfTrades = document.getElementById("add-no-of-trades").value;
  const underlyingValue = document.getElementById("add-underlying-value").value;
  // Retrieve values for the remaining fields in a similar manner

  fetchDataAndCheckIdBbGlobal(isin)
    .then((idExists) => {
      if (idExists) {
        alert(`${isin} already exists in the table.`);
      } else {
        // Create an object with the data
        const newData = {
          // Add other form field data here
          Name: name,
          Asset_Class: assetClass,
          Bond_Type: bondType,
          Coupon_Rate: couponRate,
          Maturity_Date: maturityDate,
          Face_Value: faceValue,
          Yield_to_Maturity: yieldToMaturity,
          Current_Price: currentPrice,
          Credit_Rating: creditRating,
          Country_of_Exposure: countryOfExposure,
          Payment_Frequency: paymentFrequency,
          Security_ID: securityId,
          Exchange_Code: excCode,
          Security_Type_2: securityType2,
          FIGI: figi,
          Ticker: ticker,
          Market_Sector: marketSector,
          Share_Class: shareClass,
          Security_Description: secDescription,
          Security_Type: securityType,
          SERIES: series,
          ISIN: isin,
          LISTING_DATE: listingDate,
          NEXT_INTEREST_PAYMENT_DATE: nextInterestPaymentDate,
          ISSUE_DESCIPTION: issueDescription,
          EXPIRY_DATE: expiryDate,
          OPTION_TYPE: optionType,
          STRIKE: strike,
          SPREAD: spread,
          CHNG: change,
          OPEN: open,
          HIGH: high,
          LOW: low,
          OPEN_INTEREST: openInterest,
          NO_OF_TRADES: noOfTrades,
          UNDERLYING_VALUE: underlyingValue,
          // You can now use these variables as needed in your JavaScript code
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


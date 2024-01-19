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
  const apiUrl = `https://securitymasterdataspie.onrender.com/Master_Data/${entryId}`;
  
  alert(apiUrl);
  fetch(apiUrl)
    .then((response) => response.json())
    .then(async (existingData) => {
      // Get data from the form fields
      const updatedName = document.getElementById("update-name").value;
      const updatedAssetClass = document.getElementById("update-asset-class").value;
      const updatedBondType = document.getElementById("update-bond-type").value;
      const updatedCouponRate = document.getElementById("update-coupon-rate").value;
      const updatedMaturityDate = document.getElementById("update-maturity-date").value;
      const updatedFaceValue = document.getElementById("update-face-value").value;
      const updatedYieldToMaturity = document.getElementById("update-yield-to-maturity").value;
      const updatedCurrentPrice = document.getElementById("update-current-price").value;
      const updatedCreditRating = document.getElementById("update-credit-rating").value;
      const updatedCountryOfExposure = document.getElementById("update-country-of-exposure").value;
      const updatedPaymentFrequency = document.getElementById("update-payment-frequency").value;
      const updatedSecurityId = document.getElementById("update-security-id").value;
      const updatedExchangeCode = document.getElementById("update-exc-code").value;
      const updatedSecurityType2 = document.getElementById("update-security-type2").value;
      const updatedFIGI = document.getElementById("update-figi").value;
      const updatedTicker = document.getElementById("update-ticker").value;
      const updatedMarketSector = document.getElementById("update-market-sector").value;
      const updatedShareClass = document.getElementById("update-share-class").value;
      const updatedSecurityDescription = document.getElementById("update-sec-description").value;
      const updatedSecurityType = document.getElementById("update-security-type").value;
      const updatedSeries = document.getElementById("update-series").value;
      const updatedISIN = document.getElementById("update-isin").value;
      const updatedListingDate = document.getElementById("update-listing-date").value;
      const updatedNextInterestPaymentDate = document.getElementById("update-next-interest-payment-date").value;
      const updatedIssueDescription = document.getElementById("update-issue-description").value;
      const updatedExpiryDate = document.getElementById("update-expiry-date").value;
      const updatedOptionType = document.getElementById("update-option-type").value;
      const updatedStrike = document.getElementById("update-strike").value;
      const updatedSpread = document.getElementById("update-spread").value;
      const updatedChange = document.getElementById("update-change").value;
      const updatedOpen = document.getElementById("update-open").value;
      const updatedHigh = document.getElementById("update-high").value;
      const updatedLow = document.getElementById("update-low").value;
      const updatedOpenInterest = document.getElementById("update-open-interest").value;
      const updatedNoOfTrades = document.getElementById("update-no-of-trades").value;
      const updatedUnderlyingValue = document.getElementById("update-underlying-value").value;
      // Add any additional attributes here

      // You can use these variables as needed in your code

      // Add similar lines for other fields...
      

      // const idBbGlobalExists = await fetchDataAndCheckIdBbGlobal(updatedIdBBGlobal);

      // if (idBbGlobalExists && updatedIdBBGlobal !== existingData.ID_BB_GLOBAL) {
      //   // Handle the case where the ID_BB_GLOBAL already exists
      //   alert(`Error: ${updatedIdBBGlobal} already exists. Please choose a different value.`);
      //   return;
      // }

      // Get the previous values from the existing data
      const previousName = existingData.NAME;
      const previousAssetClass = existingData.Asset_Class;
      const previousBondType = existingData.Bond_Type;
      const previousCouponRate = existingData.Coupon_Rate;
      const previousMaturityDate = existingData.Maturity_Date;
      const previousFaceValue = existingData.Face_Value;
      const previousYieldToMaturity = existingData.Yield_to_Maturity;
      const previousCurrentPrice = existingData.Current_Price;
      const previousCreditRating = existingData.Credit_Rating;
      const previousCountryOfExposure = existingData.Country_of_Exposure;
      const previousPaymentFrequency = existingData.Payment_Frequency;
      const previousSecurityID = existingData.Security_ID;
      const previousExchangeCode = existingData.Exchange_Code;
      const previousSecurityType2 = existingData.Security_Type_2;
      const previousFIGI = existingData.FIGI;
      const previousTicker = existingData.Ticker;
      const previousMarketSector = existingData.Market_Sector;
      const previousShareClass = existingData.Share_Class;
      const previousSecurityDescription = existingData.Security_Description;
      const previousSecurityType = existingData.Security_Type;
      const previousSeries = existingData.SERIES;
      const previousISIN = existingData.ISIN;
      const previousListingDate = existingData.LISTING_DATE;
      const previousNextInterestPaymentDate = existingData.NEXT_INTEREST_PAYMENT_DATE;
      const previousIssueDescription = existingData.ISSUE_DESCIPTION;
      const previousExpiryDate = existingData.EXPIRY_DATE;
      const previousOptionType = existingData.OPTION_TYPE;
      const previousStrike = existingData.STRIKE;
      const previousSpread = existingData.SPREAD;
      const previousChange = existingData.CHNG;
      const previousOpen = existingData.OPEN;
      const previousHigh = existingData.HIGH;
      const previousLow = existingData.LOW;
      const previousOpenInterest = existingData.OPEN_INTEREST;
      const previousNoOfTrades = existingData.NO_OF_TRADES;
      const previousUnderlyingValue = existingData.UNDERLYING_VALUE;
      // Add similar lines for other fields...

      // Check each field and update the value accordingly
      const updatedData = {
        Name: updatedName !== "" ? updatedName : previousName,
        Asset_Class: updatedAssetClass !== "" ? updatedAssetClass : previousAssetClass,
        Bond_Type: updatedBondType !== "" ? updatedBondType : previousBondType,
        Coupon_Rate: updatedCouponRate !== "" ? updatedCouponRate : previousCouponRate,
        Maturity_Date: updatedMaturityDate !== "" ? updatedMaturityDate : previousMaturityDate,
        Face_Value: updatedFaceValue !== "" ? updatedFaceValue : previousFaceValue,
        Yield_to_Maturity: updatedYieldToMaturity !== "" ? updatedYieldToMaturity : previousYieldToMaturity,
        Current_Price: updatedCurrentPrice !== "" ? updatedCurrentPrice : previousCurrentPrice,
        Credit_Rating: updatedCreditRating !== "" ? updatedCreditRating : previousCreditRating,
        Country_of_Exposure: updatedCountryOfExposure !== "" ? updatedCountryOfExposure : previousCountryOfExposure,
        Payment_Frequency: updatedPaymentFrequency !== "" ? updatedPaymentFrequency : previousPaymentFrequency,
        Security_ID: updatedSecurityId !== "" ? updatedSecurityId : previousSecurityID,
        Exchange_Code: updatedExchangeCode !== "" ? updatedExchangeCode : previousExchangeCode,
        Security_Type_2: updatedSecurityType2 !== "" ? updatedSecurityType2 : previousSecurityType2,
        FIGI: updatedFIGI !== "" ? updatedFIGI : previousFIGI,
        Ticker: updatedTicker !== "" ? updatedTicker : previousTicker,
        Market_Sector: updatedMarketSector !== "" ? updatedMarketSector : previousMarketSector,
        Share_Class: updatedShareClass !== "" ? updatedShareClass : previousShareClass,
        Security_Description: updatedSecurityDescription !== "" ? updatedSecurityDescription : previousSecurityDescription,
        Security_Type: updatedSecurityType !== "" ? updatedSecurityType : previousSecurityType,
        SERIES: updatedSeries !== "" ? updatedSeries : previousSeries,
        ISIN: updatedISIN !== "" ? updatedISIN : previousISIN,
        LISTING_DATE: updatedListingDate !== "" ? updatedListingDate : previousListingDate,
        NEXT_INTEREST_PAYMENT_DATE: updatedNextInterestPaymentDate !== "" ? updatedNextInterestPaymentDate : previousNextInterestPaymentDate,
        ISSUE_DESCIPTION: updatedIssueDescription !== "" ? updatedIssueDescription : previousIssueDescription,
        EXPIRY_DATE: updatedExpiryDate !== "" ? updatedExpiryDate : previousExpiryDate,
        OPTION_TYPE: updatedOptionType !== "" ? updatedOptionType : previousOptionType,
        STRIKE: updatedStrike !== "" ? updatedStrike : previousStrike,
        SPREAD: updatedSpread !== "" ? updatedSpread : previousSpread,
        CHNG: updatedChange !== "" ? updatedChange : previousChange,
        OPEN: updatedOpen !== "" ? updatedOpen : previousOpen,
        HIGH: updatedHigh !== "" ? updatedHigh : previousHigh,
        LOW: updatedLow !== "" ? updatedLow : previousLow,
        OPEN_INTEREST: updatedOpenInterest !== "" ? updatedOpenInterest : previousOpenInterest,
        NO_OF_TRADES: updatedNoOfTrades !== "" ? updatedNoOfTrades : previousNoOfTrades,
        UNDERLYING_VALUE: updatedUnderlyingValue !== "" ? updatedUnderlyingValue : previousUnderlyingValue,    
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
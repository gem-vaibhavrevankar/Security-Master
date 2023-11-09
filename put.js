const updateButton = document.getElementById("update-button"); // Assuming you have an update button in your UI
const idToUpdateInput = document.getElementById("id-to-update"); // Assuming you have an input field to enter the ID to update
const newDataInput = document.getElementById("new-data"); // Assuming you have an input field for the new data

updateButton.addEventListener("click", () => {
  const idToUpdate = idToUpdateInput.value; // Get the ID to update from the input field
  const newData = newDataInput.value; // Get the new data from the input field

  if (!idToUpdate || !newData) {
    alert("Please enter both ID and new data to update.");
    return;
  }

  const apiUrl = `https://securitymasterdataspie.onrender.com/securitydata/?${idToUpdate}`; // Replace with your API URL, including the ID of the data to update

  // Create a data object to send in the PUT request
  const dataToUpdate = {
    NAME: newData, // Replace with the actual field name you want to update
  };

  // Make a PUT request to your server to update the data
  fetch(apiUrl, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(dataToUpdate),
  })
    .then((response) => {
      if (response.status === 200) {
        // Handle a successful update (HTTP status 200) here
        alert(`Data with ID ${idToUpdate} has been updated.`);
        idToUpdateInput.value = ""; // Clear the input fields
        newDataInput.value = "";
        // Optionally, you can refresh the table to show the updated data
        fetchDataAndPopulateTable();
      } else if (response.status === 404) {
        // Handle the case where the data with the provided ID was not found (HTTP status 404)
        alert(`Data with ID ${idToUpdate} not found.`);
      } else {
        // Handle other error cases
        alert(`Error updating data with ID ${idToUpdate}.`);
      }
    })
    .catch((error) => {
      console.error("Error updating data:", error);
    });
});

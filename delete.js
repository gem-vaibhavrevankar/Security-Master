const deleteButton = document.getElementById("delete-button"); // Assuming you have a delete button in your UI
const idToDeleteInput = document.getElementById("id-to-delete"); // Assuming you have an input field to enter the ID to delete

deleteButton.addEventListener("click", () => {
  const idToDelete = idToDeleteInput.value; // Get the ID to delete from the input field

  if (!idToDelete) {
    alert("Please enter an ID to delete.");
    return;
  }

  const apiUrl = `https://securitymasterdataspie.onrender.com/securitydata/${idToDelete}`; // Replace with your API URL, including the ID of the data to delete

  // Make a DELETE request to your server to delete the data
  fetch(apiUrl, {
    method: "DELETE",
  })
    .then((response) => {
      if (response.status === 200) {
        // Handle a successful delete (HTTP status 200) here
        alert(`Data with ID ${idToDelete} has been deleted.`);
        idToDeleteInput.value = ""; // Clear the input field
        // Optionally, you can refresh the table to show the updated data
        fetchDataAndPopulateTable();
      } else if (response.status === 404) {
        // Handle the case where the data with the provided ID was not found (HTTP status 404)
        alert(`Data with ID ${idToDelete} not found.`);
      } else {
        // Handle other error cases
        alert(`Error deleting data with ID ${idToDelete}.`);
      }
    })
    .catch((error) => {
      console.error("Error deleting data:", error);
    });
});

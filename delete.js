const deleteButton = document.getElementById("delete-button"); // Assuming you have a delete button in your UI
const idToDeleteInput = document.getElementById("id-to-delete"); // Assuming you have an input field to enter the ID to delete

deleteButton.addEventListener("click", () => {
  const idToDelete = idToDeleteInput.value; // Get the ID to delete from the input field
  fetchAndSendData();

  if (!idToDelete) {
    alert("Please enter an ID to delete.");
    return;
  }

  const apiUrl = `https://securitymasterdataspie.onrender.com/Master_Data/${idToDelete}`; // Replace with your API URL, including the ID of the data to delete

   // Make a DELETE request to your server to delete the data
   async function fetchAndSendData() {
    // const jsonDataUrl = 'https://securitymasterdataspie.onrender.com/pendingreq?id='+sorti;
    const apiUrl = `https://securitymasterdataspie.onrender.com/Master_Data?id=${idToDelete}`
    const postDataUrl = 'https://securitymasterdataspie.onrender.com/pendingreq?';
    console.log(apiUrl);
  
    try {
      // Fetch the JSON data
      const jsonDataResponse = await fetch(apiUrl);
    
      const jsonData = await jsonDataResponse.json();
      delete jsonData[0].id;
      
      // Create the POST request body
      const postDataString = JSON.stringify(jsonData[0]);
      
      console.log(postDataString);
  
      console.log(postDataString,"hey");
      // Make the POST request
      const postDataResponse =  fetch(postDataUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: postDataString,
      })

      console.log((await postDataResponse).status);
  
      // Check the POST request status
      if (postDataResponse.status === 201) {
        console.log('Data sent successfully');
        console.log(await postDataResponse.json());
      } else {
        console.error('Error sending data');
        console.error(await postDataResponse.text());
      }
    } catch (error) {
      console.error('Error fetching or sending data:', error);
    }
  }

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
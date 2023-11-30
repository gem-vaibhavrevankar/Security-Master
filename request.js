
let dataLength;

const apiUrl = 'https://securitymasterdataspie.onrender.com/pendingreq/';

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Assuming the data is an array
    dataLength = data.length;
    console.log(dataLength);
    console.log(`Length of data: ${dataLength}`);
    function updateBadge() {
      const badge = document.getElementById('notibadge');
  
      // Update the badge content with the length of the data
      badge.textContent = dataLength;
      console.log(`Length of data: ${dataLength}`);
  }
  updateBadge();
  
  })
  .catch(error => console.error('Error fetching data:', error));

const btnpen = document.getElementById("btnpen");
btnpen.addEventListener("click", function () {
  const searchurl = "searchfilter.html";
  window.location.href = searchurl;
});






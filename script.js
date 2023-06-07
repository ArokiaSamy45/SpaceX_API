const endpoint = 'https://api.spacexdata.com/v5/launches/latest';

// Function to make a GET request to the SpaceX API endpoint
function fetchData() {
  return new Promise((resolve, reject) => {
    fetch(endpoint)
      .then(response => {
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(data => {
        resolve(data);
      })
      .catch(error => {
        reject(error);
      });
  });
}

// Function to display the launch details on the webpage
function displayLaunchDetails(details) {
  const launchDetailsContainer = document.getElementById('launch-details');
  launchDetailsContainer.innerHTML = `
    <h2>${details.name}</h2>
    <p>Flight Number: ${details.flight_number}</p>
    <p>Date: ${details.date_local}</p>
    <p>Details: ${details.details}</p>
  `;
}

// Fetch the latest SpaceX launch details and display them on the webpage
fetchData()
  .then(data => {
    displayLaunchDetails(data);
  })
  .catch(error => {
    console.error('Error:', error);
  });

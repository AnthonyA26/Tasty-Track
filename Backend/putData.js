const putData = async (newData) => {
  const binId = '66fec493ad19ca34f8b22951'; 
  const apiKey = '$2a$10$VRopoeDWcEGwU7qHPVi4yOX3EZkLqU0fL/MH8QP5uPFelKdMhQyXK'; 
  const url = "https://api.jsonbin.io/v3/b/" + binId;

  try {
	// Step 1: Fetch existing data using getJSONData.js
	let existingData = await getData();

	// Log the existing data for debugging purposes
	console.log('Fetched existing data:', existingData);

	// Step 2: Parse the existing data if it is a JSON string
	if (typeof existingData === 'string') {
	  existingData = JSON.parse(existingData);
	}

	// Log the parsed data for debugging purposes
	console.log('Parsed existing data:', existingData);

	// Step 3: Check if the existing data is an array
	if (!Array.isArray(existingData)) {
	  throw new Error('Existing data is not an array');
	}

	// Step 4: Append new data to the array
	existingData.push(newData);

	// Step 5: Update the JSONbin with the modified array
	const response = await fetch(url, {
	  method: 'PUT',
	  headers: {
		'X-Master-Key': apiKey,
		'Content-Type': 'application/json',
		'X-Bin-Versioning': 'false',  // Prevent versioning if necessary
	  },
	  body: JSON.stringify(existingData),  // Convert back to a JSON string
	});

	if (response.status !== 200) {
	  throw new Error('Failed to update data');
	}

	const result = await response.json();
	document.getElementById('response').innerHTML = 'Data successfully submitted! Response: ' + JSON.stringify(result);
  } catch (error) {
	document.getElementById('response').innerHTML = 'Error: ' + error.message;
  }
};

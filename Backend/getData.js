const getData = async () => {

// REPLACE YOUR_BIN_ID with the actual ID of your bin
const binId = '66fec493ad19ca34f8b22951'; 

// Replace YOUR_API_KEY with your JSONbin.io API key
const apiKey = '$2a$10$VRopoeDWcEGwU7qHPVi4yOX3EZkLqU0fL/MH8QP5uPFelKdMhQyXK'; 

const url = "https://api.jsonbin.io/v3/b/"+binId+"?meta=false";
//const url = ”https://api.jsonbin.io/v3/b/”+binId+"?meta=false";

	const response = await fetch(url,
		{
			method: 'GET',
			headers: {
				'X-Master-Key': apiKey,
				'Content-Type': 'application/json'
			}
		}
	);
  if (response.status !== 200) {
	throw new Error("cannot fetch data");
  }
  let data = await response.json();
  
  // Remove the "metadata" and "records" keys from the object
	delete data.metadata;
	delete data.records;

	//Convert the modified object back into a JSON string
	data = JSON.stringify(data);
	//this works
	return data;
};

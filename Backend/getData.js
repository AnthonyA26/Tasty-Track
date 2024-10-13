const getJSONData = async () => {

// REPLACE YOUR_BIN_ID with the actual ID of your bin
const binId = '670a9963acd3cb34a895af02'; 

// Replace YOUR_API_KEY with your JSONbin.io API key
const apiKey = '$2a$10$UzQL6aYRSZ/kDbQqqat29eU9xGwtgF1bdMA2kF/32mcP2X.BtnbS6'; 

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

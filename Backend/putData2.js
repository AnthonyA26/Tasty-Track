const putData = async (updatedData) => {
    const binId = '66fec493ad19ca34f8b22951'; // Your bin ID
    const apiKey = '$2a$10$VRopoeDWcEGwU7qHPVi4yOX3EZkLqU0fL/MH8QP5uPFelKdMhQyXK'; // Your API key
    const url = "https://api.jsonbin.io/v3/b/" + binId; // Corrected syntax
  
    try {
          console.log('Sending updated data to JSONBin:', updatedData); // Debugging log
              const response = await fetch(url, {
                method: 'PUT',
                headers: {
                          'X-Master-Key': apiKey,
                          'Content-Type': 'application/json',
                          'X-Bin-Versioning': 'false', // Prevent versioning if necessary
                },
                body: JSON.stringify(updatedData), // Convert back to a JSON string
              });
  
              if (response.status !== 200) {
                throw new Error('Failed to update data');
              }
  
              const result = await response.json();
              console.log('Response from JSONBin:', result); // Debugging log
              alert('Data successfully submitted! Response: ' + JSON.stringify(result));
              return true;
  
    } catch (error) {
              console.error('Error in putData:', error);
              alert('Error: ' + error.message);
              return false;
    }
  
  };
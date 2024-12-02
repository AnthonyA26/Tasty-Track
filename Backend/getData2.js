const getData = async () => {
    const binId = '66fec493ad19ca34f8b22951';
    const apiKey = '$2a$10$VRopoeDWcEGwU7qHPVi4yOX3EZkLqU0fL/MH8QP5uPFelKdMhQyXK';  
    const url = "https://api.jsonbin.io/v3/b/" + binId + "?meta=false";
   
    const response = await fetch(url, {
              method: 'GET',
              headers: {
                'X-Master-Key': apiKey,
                'Content-Type': 'application/json'
              }
    });
  
    if (response.status !== 200) {
              throw new Error("Cannot fetch data");
    }
  
    let data = await response.json();
    delete data.metadata;
    delete data.records;
  

    return JSON.stringify(data);
  
  };
export const apiData = fetch(
  "https://api.harvardartmuseums.org/object?apikey=e0df2da2-254d-4a86-8272-de65e3bda040"
  )
    .then((response) => {
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log (data); 
      return data;
    })
    .catch((error) => {
      console.error("Fetch error:", error);
    });
  
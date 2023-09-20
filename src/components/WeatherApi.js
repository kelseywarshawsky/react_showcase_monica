export const apiData = fetch(
  "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=381899318e900d0f037f326af01db2fd"
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

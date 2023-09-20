// import { data } from "./WeatherData.js";

import React, { useState, useEffect } from "react";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import SearchBarItem from "./Searchbar.jsx";
// import { apiData } from "./WeatherApi.js";
import NewSearchBar from "./NewSearchBar";
import { Box } from "@mui/material";

export default function WeatherCard() {
  const [apiData, setApiData] = useState(null);

  const handleSearch = async (latitude, longitude) => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=381899318e900d0f037f326af01db2fd`
      );
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setApiData(data);
    } catch (error) {
      console.error("Fetch error", error);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=381899318e900d0f037f326af01db2fd"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setApiData(data); // Update the state with the fetched data
      } catch (error) {
        console.error("Fetch error:", error);
      }
    };

    fetchData();
  }, []);

  if (!apiData) {
    return null;
  }

  const { main, weather, name, sys } = apiData;
  //   const { main, weather, name, sys } = apiData;
  //   console.log(apiData);
  const celsiusTemperature = main.temp - 273.15;

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Box>
          <NewSearchBar onSearch={handleSearch} />
        </Box>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Weather in {name}, {sys.country}
        </Typography>
        <Typography variant="h5" component="div">
          Temperature: {celsiusTemperature.toFixed(2)}°C
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Weather: {weather[0].main}
        </Typography>
        <Typography variant="body2">
          Description: {weather[0].description}
          <br />
          Feels Like: {(main.feels_like - 273.15).toFixed(2)}°C
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

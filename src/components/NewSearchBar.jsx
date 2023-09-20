// import * as React from "react";
import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from "@mui/icons-material/Search";
// import DirectionsIcon from '@mui/icons-material/Directions';
import LocationSearching from "@mui/icons-material/LocationSearching";

export default function NewSearchBar({onSearch}) {
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  // const [searchResult, setSearchResult] = useState(null);

  const handleSearch = () => {
    if (latitude && longitude) {
      onSearch(latitude, longitude);
    }
  };

  return (
    <div>
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
     
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Latitude"
        value={latitude}
        onChange={(e) => setLatitude(e.target.value)}
        inputProps={{ "aria-label": "latitude" }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Longitude"
        value={longitude}
        onChange={(e) => setLongitude(e.target.value)}
        inputProps={{ "aria-label": "longitude" }}
      />
      <IconButton
        type="button"
        sx={{ p: "10px" }}
        aria-label="search"
        onClick={handleSearch}
      >
        <SearchIcon />
      </IconButton>
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton color="primary" sx={{ p: "10px" }} aria-label="location">
        <LocationSearching />
      </IconButton>
    </Paper>
</div>
  );
      }

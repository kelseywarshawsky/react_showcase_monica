// import * as React from "react";
import { Box, Pagination, Button, Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
// import PaginationRounded from "./Pagination";
import React, { useState, useEffect, useCallback } from "react";
import ArtistCard from "./ArtistCard";

export default function ArtistSearch() {
  const [searchValue, setSearchValue] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [searchResults, setSearchResults] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [dataPage, setDataPage] = useState(0);

  const handleSearch = useCallback(async () => {
    try {
      // Construct the API URL with query parameters
      const apiUrl = `https://api.harvardartmuseums.org/object?apikey=e0df2da2-254d-4a86-8272-de65e3bda040&q=${searchValue}&page=${currentPage}`;

      // Fetch data from the API
      const response = await fetch(apiUrl);
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      setSearchResults(data.records);
      setTotalPages(data.info.pages);
      // we are setting the data page to make
      // sure our page and the API's page are married
      setDataPage(data.info.page);

      console.log("Fetched Data:", data);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }, [currentPage, searchValue]);

  const handleChange = (e) => {
    const newValue = e.target.value;
    setSearchValue(newValue);
  };

  useEffect(() => {
    // only update the data if our page changed
    if (currentPage !== dataPage) {
      handleSearch();
    }
  }, [currentPage, handleSearch, dataPage]);

  const handlePageChange = (event, newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <Box>
      <Box sx={{ display: "flex", width: "80%", margin: 4 }}>
        <TextField
          fullWidth
          label="Search"
          id="fullWidth"
          onChange={handleChange}
          value={searchValue}
          sx={{ mr: 2 }}
        />
        <Button variant="contained" onClick={handleSearch}>
          Search
        </Button>
      </Box>

      <Grid container spacing={3} sx={{ margin: 4 }}>
        {searchResults.map((result) => (
          <ArtistCard
            key={result.title}
            title={result?.title}
            url={result?.images[0]?.baseimageurl}
          />
        ))}
      </Grid>

      <Pagination
        count={totalPages}
        page={currentPage}
        onChange={handlePageChange}
        shape="rounded"
      />
    </Box>
  );
}

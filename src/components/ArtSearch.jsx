import * as React from 'react';
import ArtistSearch from "./ArtistSearch"



export default function ArtSearch() {
    const handleSearch = (searchValue) => {
        console.log('Searching for: ', searchValue);
};

return (
    <div> 
  <h1>Artist Directory</h1>
      <ArtistSearch onSearch={handleSearch} />
      {/* Render your search results or other content here */}
    </div>
  );
}
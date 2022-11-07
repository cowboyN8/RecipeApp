import React from "react";
import { Box, Stack, Typography, TextField, Button } from "@mui/material";

export default function HeroBanner() {
  const [search, setSearch] = React.useState("");
  const handleSearch = async () => {
      if(search){
          const recipeData = await fetchData();
      }
  }

  return (
    <Box>
      <Typography>Recipes</Typography>
      <div className="search-wrapper">
        <TextField
          className="recipe-search"
          value={search}
          onChange={setSearch(e.target.value.toLowerCase())}
          placeholder="Search for recipes..."
          type="text"
        />
        <Button variant="contained" className="search-button" onClick={handleSearch}>
          Search
        </Button>
      </div>
    </Box>
  );
}

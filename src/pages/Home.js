import React from "react";
import { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchRecipes from "../components/SearchRecipes";
import Recipes from "../components/Recipes";

export default function Home() {
  return (
    <Box>
      <HeroBanner />
      <SearchRecipes />
      <Recipes />
    </Box>
  );
}

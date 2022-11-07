import "./styles.css";
import { Route, Routes } from "react-router-dom";
import React from "react";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import RecipeDetail from "./pages/RecipeDetail";
import Footer from "./components/Footer";

export default function App() {
  return (
    <Box width="400 px">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes/:id" element={<RecipeDetail />} />
      </Routes>
      <Footer />
    </Box>
  );
}

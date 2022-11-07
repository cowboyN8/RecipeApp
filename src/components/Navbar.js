import React from "react";
import { Link } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/cooking-logo.png";

export default function Navbar() {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      className="navbar"
    >
      <Link to="/">
        <img src={Logo} alt="logo" className="main-logo" />
      </Link>
      <Stack direction="row" gap="2em">
        <Link to="/" className="link">
          Home
        </Link>
        <a href="#recipes" className="link">
          Recipes
        </a>
      </Stack>
    </Stack>
  );
}

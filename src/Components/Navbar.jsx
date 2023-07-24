import { Stack } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      p={2}
      sx={{
        position: "sticky",
        background: "#000",
        top: 0,
        justifyContent: "space-between",
        marginRight: {
          md: "-20px",
          xs: "5px",
        },
        pb: 0,
      }}
    >
      <Link to="/" style={{ display: "flex", alignItems: "center" }}>
        <img src={logo} alt="logo" height={70} />
      </Link>
      <SearchBar />
    </Stack>
  );
};

export default Navbar;

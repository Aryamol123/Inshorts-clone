import React from "react";
import "./NavInshorts.css";
import HamburgerDrawer from "./HamburgerDrawer";
import { ThemeProvider, createTheme } from "@mui/material/styles";
const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});
const NavInshorts = ({ setCategory }) => {
  return (
    <div className="nav">
      <div className="icon">
        {" "}
        <ThemeProvider theme={darkTheme}>
          <HamburgerDrawer setCategory={setCategory}/>
        </ThemeProvider>
      </div>
      <img
        src="https://assets.inshorts.com/website_assets/images/logo_inshorts.png"
        height="80%"
        alt="logo"
        style={{ cursor: "pointer" }}
      />
    </div>
  );
};

export default NavInshorts;

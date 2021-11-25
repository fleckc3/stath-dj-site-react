import { AppBar, Box, Toolbar, IconButton } from "@mui/material";
import SideDrawer from "./SideDrawer";
import MenuIcon from "@mui/icons-material/Menu";
import Logo from "../../assets/images/cs-logo-white.png";
import { makeStyles } from "@mui/styles";
import React, { useState, useEffect } from "react";

const useStyles = makeStyles((theme) => ({
  appBar: {
    boxShadow: "none !important",
  },
  drawer: {
    width: "250px",
  },
  paper: {
    background: "#808080",
  },
  link: {
    "&:hover": {
      color: "#00CC99",
    },
  },
}));

const Header = ({ onAnimate, resetAnimate }) => {
  const classes = useStyles();
  const [scrollStyle, setScrollStyle] = useState("transparent");
  const [openDrawer, setOpenDrawer] = useState(false);

  const onScrollHandler = (event) => {
    if (window.scrollY > 300) {
      setScrollStyle("primary");
    } else {
      setScrollStyle("transparent");
    }
  };

  const handleDrawerToggle = () => {
    setOpenDrawer(!openDrawer);
  };

  useEffect(() => {
    window.addEventListener("scroll", onScrollHandler);

    return () => window.removeEventListener("scroll", onScrollHandler);
  }, []);

  return (
    <Box>
      <AppBar position="fixed" color={scrollStyle} className={classes.appBar}>
        <Toolbar>
          <img src={Logo} />
          <IconButton
            size="large"
            edge="end"
            color="secondary"
            aria-label="menu"
            sx={{ marginLeft: "auto" }}
            onClick={handleDrawerToggle}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <SideDrawer
        open={openDrawer}
        onToggleDrawer={handleDrawerToggle}
        onAnimate={onAnimate}
        resetAnimate={resetAnimate}
      />
    </Box>
  );
};

export default Header;

import { useState } from "react";
import PropTypes from "prop-types";
import Header from "../navigation/Header";
import Footer from "../footer/FooterDesktop";
import { CssBaseline } from "@mui/material";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "100%",
    width: "100%",
    overflow: "hidden",
  },
}));

function Main({ children }) {
  const classes = useStyles();
  const [animate, setAnimate] = useState();
  const setAnimateTrue = () => {
    setAnimate(true);
    setTimeout(() => {
      setAnimateFalse();
    }, 5000);
  };
  const setAnimateFalse = () => {
    setAnimate(false);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />
      <Header onAnimate={setAnimateTrue} resetAnimate={setAnimateFalse} />
      <main style={{ overflow: "hidden" }}>{children}</main>
      <Footer />
    </div>
  );
}

Main.propTypes = {};

export default Main;

import React, { Component, useState } from "react";
import { CssBaseline } from "@mui/material";
import Header from "./components/layout/Header";
import { ThemeProvider, Zoom } from "@mui/material";
import theme from "./theme/theme";
import BackgroundVideo from "./components/background-video/BackgroundVideo";
import MusicVideoContent from "./components/layout/MusicVideoContent";
import Testimonial from "./components/layout/Testimonial";
import Footer from "./components/layout/Footer";
import { isMobile } from "react-device-detect";
import FooterMobile from "./components/layout/FooterMobile";
import Parse from "parse/dist/parse.min.js";
import { SnackbarProvider } from "notistack";

class App extends Component {
  constructor(props) {
    super(props);
    const PARSE_APPLICATION_ID = "s5jEc97u9s8kERCMh45xNbq2VBtmtYu079jVku9Q";
    const PARSE_HOST_URL = "https://parseapi.back4app.com/";
    const PARSE_JAVASCRIPT_KEY = "pNx0UlVYvfeprFteMiqtcRRT9s5v2Io2yd7yps8O";
    Parse.initialize(PARSE_APPLICATION_ID, PARSE_JAVASCRIPT_KEY);
    Parse.serverURL = PARSE_HOST_URL;

    this.state = {
      animate: false,
    };
  }

  render() {
    const setAnimateTrue = () => {
      this.setState({ animate: true });
      setTimeout(() => {
        setAnimateFalse();
      }, 5000);
    };
    const setAnimateFalse = () => {
      this.setState({ animate: false });
    };
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <SnackbarProvider
          maxSnack={3}
          anchorOrigin={{
            vertical: "top",
            horizontal: "center",
          }}
          classes={{ variantSuccess: "#ffffff" }}
          TransitionComponent={Zoom}
        >
          <Header onAnimate={setAnimateTrue} resetAnimate={setAnimateFalse} />
          <main style={{ overflow: "hidden" }}>
            <BackgroundVideo animate={this.state.animate} />
            <MusicVideoContent />
            <Testimonial />
            {isMobile ? <FooterMobile /> : <Footer />}
          </main>
        </SnackbarProvider>
      </ThemeProvider>
    );
  }
}

export default App;
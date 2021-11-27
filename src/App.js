import Header from "./components/layout/navigation/Header";
import Footer from "./components/layout/footer/Footer";
import LandingPage from "./views/landing/LandingPage";
import { Component } from "react";
import { CssBaseline } from "@mui/material";
import { SnackbarProvider } from "notistack";
import { ThemeProvider, Zoom } from "@mui/material";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import theme from "./theme/theme";
import Parse from "parse/dist/parse.min.js";

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
          <BrowserRouter>
            <Header onAnimate={setAnimateTrue} resetAnimate={setAnimateFalse} />
            <main style={{ overflow: "hidden" }}>
              <Routes>
                <Route path="/" element={<LandingPage animate={this.state.animate || ''} />} />
              </Routes>
            </main>
            <Footer />
          </BrowserRouter>
        </SnackbarProvider>
      </ThemeProvider>
    );
  }
}

export default App;

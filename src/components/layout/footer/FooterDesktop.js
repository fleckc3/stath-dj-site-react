import { makeStyles } from "@mui/styles";
import { Box, Grid, Link, Typography } from "@mui/material";
import LemonHead from "../../../assets/images/lemon-head.png";
import { isMobile } from "react-device-detect";
import Stath from "../../../assets/images/stath-logo-accented.png";
import Parse from "parse/dist/parse.min.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    backgroundColor: "#000000",
    paddingTop: "100px",
    paddingBottom: "20px",
  },
  lemonHead: {
    width: "auto",
    height: "100px",
    zIndex: "1",
    marginBottom: "12px",
    [theme.breakpoints.down("md")]: {
      height: "70px",
    },
  },
  stathLettering: {
    height: "147px",
    width: "auto",
    [theme.breakpoints.down("md")]: {
      height: "103px",
    },
  },
  text: {
    color: "#ffffff",
    textAlign: "end",
    [theme.breakpoints.down("sm")]: {
      textAlign: "start",
    },
  },
  footerTextRight: {
    color: "#ffffff",
    textAlign: "end",
  },
  download: {
    color: "#ffffff",
    textAlign: "end",
    [theme.breakpoints.down("sm")]: {
      textAlign: "start",
    },
  },
  link: {
    textAlign: "end",
    "&:hover": {
      color: "#00CC99",
    },
  },
  linkRight: {
    textDecoration: "none",
    color: "#ffffff",
    textAlign: "end",
  },
}));

const Footer = ({ onFormOpen }) => {
  const classes = useStyles();

  const handlePdfDownload = async () => {
    const Files = Parse.Object.extend("Files");
    const query = new Parse.Query(Files);
    try {
      const results = await query.find();
      for (const object of results) {
        const fileName = object.get("fileName");
        window.open(fileName._url);
      }
    } catch (error) {
      console.error("Error while fetching Files", error);
    }
  };

  return (
    <Box className={classes.root}>
      <Grid container pr={3} pl={3}>
        <Grid item container xs={12} sm={8} alignItems="flex-end" >
          <Grid item xs={1}>
            <img
              className={classes.lemonHead}
              src={LemonHead}
              alt="Lemon Head"
            />
          </Grid>
          <Grid item xs={11}>
            <img
              className={classes.stathLettering}
              src={Stath}
              alt="Chris Stath"
            />
          </Grid>
        </Grid>
        <Grid item container xs={6} sm={2}>
          <Grid item xs={12}>
            <Grid item xs={12}>
              <Typography className={classes.text} variant="h4">
                Press Kit
              </Typography>
            </Grid>
            <Grid item xs={12}>
              <Typography className={classes.download}>
                <Link
                  className={classes.link}
                  color="#ffffff"
                  variant="h6"
                  onClick={handlePdfDownload}
                  underline="none"
                  component="button"
                >
                  Download
                </Link>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text} variant="h4">
              <Link
                className={classes.link}
                color="#ffffff"
                onClick={onFormOpen}
                underline="none"
                component="button"
                variant="h4"
              >
                Contact
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={6} sm={2}>
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight} variant="h4">
              Music
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight}>
              <Link
                color="#ffffff"
                underline="none"
                className={classes.link}
                variant="h6"
                href="https://open.spotify.com/artist/6RZiysr25NvqsC76k0jcdn"
              >
                Spotify
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight}>
              <Link
                color="#ffffff"
                underline="none"
                variant="h6"
                className={classes.link}
                href="https://music.apple.com/us/artist/chris-stath/1438478924"
              >
                Apple Music
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight}>
              <Link
                color="#ffffff"
                underline="none"
                variant="h6"
                className={classes.link}
                href="https://soundcloud.com/chrisstathmusic"
              >
                Soundcloud
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight}>
              <Link
                color="#ffffff"
                underline="none"
                variant="h6"
                className={classes.link}
                href="https://www.youtube.com/channel/UCSphXoxsxYp4uK37rVDl6lA"
              >
                Youtube
              </Link>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Footer;

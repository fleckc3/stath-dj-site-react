import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid, Typography } from "@mui/material";
import LemonHead from "../../assets/images/lemon-head.png";
import Stath from "../../assets/images/stath-logo-accented.png";
import Parse from "parse/dist/parse.min.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "300px",
    backgroundColor: "#000000",
    position: "relative",
  },
  lemonHead: {
    width: "auto",
    height: "70px",
    position: "absolute",
    zIndex: "1",
    bottom: 0,
    left: "50%",
    transform: "translateX(-40%)",
    marginBottom: "10px",
  },
  stathLettering: {
    height: "auto",
    width: "100%",
    position: "absolute",
    bottom: 0,
  },
  text: {
    color: "#ffffff",
  },
  footerTextRight: {
    color: "#ffffff",
    textAlign: "end",
  },
  link: {
    textDecoration: "none",
    color: "#ffffff",
  },
  linkRight: {
    textDecoration: "none",
    color: "#ffffff",
    textAlign: "end",
  },
}));

function FooterMobile(props) {
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
    <div className={classes.root}>
      <img className={classes.lemonHead} src={LemonHead} alt="Lemon Head" />
      <img className={classes.stathLettering} src={Stath} alt="Chris Stath" />
      <Grid container padding={2}>
        <Grid item container xs={6} spacing={2}>
          <Grid item xs={12}>
            <Typography className={classes.text} variant="h4">
              Press Kit
            </Typography>
            <a className={classes.link} href="#" onClick={handlePdfDownload}>
              Download
            </a>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text} variant="h4">
              <a className={classes.link} href="#">
                Contact
              </a>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={6} spacing={1}>
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight} variant="h4">
              Music
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight}>
              <a
                className={classes.link}
                href="https://open.spotify.com/artist/6RZiysr25NvqsC76k0jcdn"
              >
                Spotify
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight}>
              <a
                className={classes.link}
                href="https://music.apple.com/us/artist/chris-stath"
              >
                Apple Music
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight}>
              <a
                className={classes.link}
                href="https://soundcloud.com/chrisstathmusic"
              >
                SoundCloud
              </a>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight}>
              <a
                className={classes.link}
                href="https://www.youtube.com/channel/UCSphXoxsxYp4uK37rVDl6lA"
              >
                YouTube
              </a>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default FooterMobile;

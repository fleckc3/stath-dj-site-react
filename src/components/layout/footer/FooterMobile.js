import { makeStyles } from "@mui/styles";
import { Grid, Link, Typography } from "@mui/material";
import LemonHead from "../../../assets/images/lemon-head.png";
import Stath from "../../../assets/images/stath-logo-accented.png";
import Parse from "parse/dist/parse.min.js";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "320px",
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

function FooterMobile({ onFormOpen }) {
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
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.text} variant="h4">
              <Link
                className={classes.link}
                color="#ffffff"
                variant="h4"
                onClick={onFormOpen}
                underline="none"
                component="button"
              >
                Contact
              </Link>
            </Typography>
          </Grid>
        </Grid>
        <Grid item container xs={6} spacing={1} justifyContent="flex-end">
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight} variant="h4">
              Music
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography className={classes.footerTextRight}>
              <Link
                color="#ffffff"
                variant="h6"
                underline="none"
                className={classes.link}
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
    </div>
  );
}

export default FooterMobile;

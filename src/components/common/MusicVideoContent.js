import React from "react";
import SpotifyPlaylist from "../music-players/SpotifyPlaylist";
import { makeStyles } from "@mui/styles";
import { Grid, useMediaQuery } from "@mui/material";
import GreenWall from "../../assets/images/green-wall.jpeg";
import WorldOnFire from "../../assets/images/world_on_fire.png";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    ["@media (min-width:1200px)"]: {
      height: "180vh",
    },
    ["@media (min-width:1920px)"]: {
      height: "100vh",
    },
    [theme.breakpoints.down("lg")]: {
      height: "130vh",
    },
    padding: "20px",
    display: "flex",
    alignContent: "center",
    background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${GreenWall})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    backgroundBlendMode: "darken",
    zIndex: "-1",
  },
  player: {
    width: "940px",
    height: "auto",
    padding: "20px",

    [theme.breakpoints.down("lg")]: {
      width: "640px",
    },
  },
  youtube: {
    position: "relative",
    aspectRatio: 16 / 9,
  },
  spotify: {
    position: "relative",
    aspectRatio: 16 / 9,
    [theme.breakpoints.down("lg")]: {
      marginBottom: "50px",
    },
  },
  wof: {
    textAlign: "center",
    [theme.breakpoints.down("md")]: {
      marginTop: "50px",
    },
  },
}));

const MusicVideoContent = () => {
  const classes = useStyles();
  const large = useMediaQuery("(min-width: 1400px");

  return (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <div className={classes.player}>
          <div className={classes.spotify}>
            <SpotifyPlaylist />
          </div>
        </div>
        <div className={classes.player}>
          <img
            src={WorldOnFire}
            alt="World on Fire"
            width="100%"
            className={classes.wof}
          />
          <div className={classes.youtube}>
            <iframe
              width="100%"
              height="100%"
              style={{ position: "absolute" }}
              src="https://www.youtube.com/embed/174rjcy0hEs"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* <div className={classes.player}>
          <SoundCloudPlayer />
        </div> */}
      </Grid>
    </div>
  );
};

export default MusicVideoContent;

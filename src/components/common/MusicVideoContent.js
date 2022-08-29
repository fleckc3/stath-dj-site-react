import React from "react";
import SpotifyPlaylist from "../music-players/SpotifyPlaylist";
import { makeStyles } from "@mui/styles";
import { Grid, useMediaQuery } from "@mui/material";
import GreenWall from "../../assets/images/green-wall.jpeg";
import YoutubeVideo from "components/music-players/YoutubeVideo";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    // ["@media (min-width:1200px)"]: {
    //   height: "180vh",
    // },
    // ["@media (max-height:845px)"]: {
    //   height: "190vh !important",
    // },
    // ["@media (max-height:690px)"]: {
    //   height: "250vh !important",
    // },


    [theme.breakpoints.down("lg")]: {
      height: "170vh",
    },
    [theme.breakpoints.down("md")]: {
      // height: "130vh",
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
}));

const MusicVideoContent = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid container justifyContent="space-between" alignItems="center">
        <Grid item container justifyContent="center" md={12} lg={6}>
          <SpotifyPlaylist />
        </Grid>
        <Grid item md={12} lg={6}>
          <YoutubeVideo />
        </Grid>
      </Grid>
    </div>
  );
};

export default MusicVideoContent;

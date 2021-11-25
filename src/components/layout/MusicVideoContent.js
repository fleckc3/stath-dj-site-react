import React from "react";
import SpotifyPlaylist from "../music-players/SpotifyPlaylist";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import GreenWall from "../../assets/images/green-wall.jpeg";
import WorldOnFire from "../../assets/images/world_on_fire.png";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "auto",
    padding: "70px 50px 50px",
    background: `linear-gradient( rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8) ), url(${GreenWall})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    backgroundRepeat: "none",
    backgroundBlendMode: "darken",
    zIndex: "-1",
  },
  player: {
    width: "640px",
    height: "auto",
  },
  youtube: {
    position: "relative",
    paddingBottom: "56.25%",
  },
  spotify: {
    position: "relative",
    paddingBottom: "56.25%",
    marginBottom: "50px",
  },
  wof: {
    textAlign: "center",
    [theme.breakpoints.down("lg")]: {
      marginTop: "50px",
    },
  },
}));

const MusicVideoContent = () => {
  const classes = useStyles();

 

  return (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="space-around"
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
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
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

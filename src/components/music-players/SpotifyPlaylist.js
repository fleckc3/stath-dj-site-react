import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    overflow: 'hidden',
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(2),

    },
  },
  // player: {
  //   aspectRatio: 16 / 9,
  // }
}));

const SpotifyPlaylist = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <iframe
        title="artist_label"
        src="https://open.spotify.com/follow/1/?uri=spotify:artist:6RZiysr25NvqsC76k0jcdn?si=uzWgTEBjQvaBKGWZRSocJw&size=detail&theme=dark"
        id="iframe-header"
        width="100%"
        height="90"
        className={classes.follow}
        frameBorder="0"
        allowtransparency="false"
      ></iframe>
      <iframe
        title="playlist"
        src="https://open.spotify.com/embed/playlist/1DW2GwRVyNMckGFqqut1XI"
        frameBorder="0"
        width="100%"
        height="550"
        className={classes.player}
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;

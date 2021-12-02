import { makeStyles } from "@mui/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  follow: {
    border: "none",
    overflow: "hidden",
    display: "block",
  },
  player: {
    border: "none",
    overflow: "hidden",
    position: "absolute",
  },
}));

const SpotifyPlaylist = () => {
  const classes = useStyles();

  return (
    <div>
      <iframe
        title="artist_label"
        src="https://open.spotify.com/follow/1/?uri=spotify:artist:6RZiysr25NvqsC76k0jcdn?si=uzWgTEBjQvaBKGWZRSocJw&size=detail&theme=dark"
        id="iframe-header"
        width="100%"
        height="90"
        frameBorder="0"
        className={classes.follow}
        allowtransparency="false"
      ></iframe>
      <iframe
        title="playlist"
        src="https://open.spotify.com/embed/playlist/1DW2GwRVyNMckGFqqut1XI"
        width="100%"
        height="100%"
        frameBorder="0"
        className={classes.player}
        allowtransparency="true"
        allow="encrypted-media"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;

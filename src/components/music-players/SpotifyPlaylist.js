import { makeStyles } from "@mui/styles";
import Parse from "parse/dist/parse.min.js";
import { useEffect, useState } from "react";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    overflow: "hidden",
    [theme.breakpoints.down("lg")]: {
      padding: theme.spacing(2),
    },
  },
  player: {
    aspectRatio: 16 / 9,
  },
}));

const SpotifyPlaylist = () => {
  const classes = useStyles();
  const [playlist, setPlaylist] = useState("");

  const fetchPlaylist = async () => {
    const SpotifyPlaylist = Parse.Object.extend("SpotifyPlaylist");
    const query = new Parse.Query(SpotifyPlaylist);
    try {
      const results = await query.find();
      for (const object of results) {
        // Access the Parse Object attributes using the .GET method
        const url = object.get("url");
        setPlaylist(url);
      }
    } catch (error) {
      console.error("Error while fetching SpotifyPlaylist", error);
    }
  };

  useEffect(() => {
    fetchPlaylist();
  }, []);

  return (
    <div className={classes.root}>
      <iframe
        title="playlist"
        style={{ borderRadius: "12px" }}
        src={playlist}
        width="100%"
        height="550"
        className={classes.player}
        frameBorder="0"
        allowFullScreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default SpotifyPlaylist;

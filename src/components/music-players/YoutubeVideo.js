import { makeStyles } from "@mui/styles";
import WorldOnFire from "../../assets/images/world_on_fire.png";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(6),
    [theme.breakpoints.down("md")]: {
      padding: theme.spacing(2),

    },
  },
  wof: {
    margin: 0,
    position: "relative",
    left: "50%",
    transform: "translate(-50%)",
  },
  video: {
    width: "100%",
    aspectRatio: 16 / 9,
    height: "auto",
    // [theme.breakpoints.down("md")]: {
    //   height: "60%",
    //   width: "60%",
    // },
  },
}));

function YoutubeVideo() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <img
        src={WorldOnFire}
        alt="World on Fire"
        width="100%"
        height="auto"
        className={classes.wof}
      />
      <iframe
        src="https://www.youtube.com/embed/174rjcy0hEs"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className={classes.video}
      ></iframe>
    </div>
  );
}

export default YoutubeVideo;

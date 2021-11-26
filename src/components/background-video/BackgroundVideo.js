import { useState } from "react";
import { makeStyles } from "@mui/styles";
import DesktopVideo from "../../assets/videos/universe-stath-1920x1080-compressed.mp4";
import MobileVideo from "../../assets/videos/universe-stath-mobile-compressed.mp4";
import { isMobile } from "react-device-detect";
import CircularProgress from "@mui/material/CircularProgress";
import SocialMediaButtonsMobile from "../common/SocialMediaButtonsMobile";
import CaptureEmail from "../common/CaptureEmail";
import "animate.css";

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100vw",
    height: "100vh",
    overflow: "hidden",
    position: "relative",
  },
  backgroundVideo: {
    objectFit: "cover",
    width: "100vw",
    height: "100vh",
    top: "0",
    left: "0",
    position: "absolute",
    zIndex: "-1",
  },
  spinner: {
    marginLeft: "0",
    position: "absolute",
    top: "calc(50% - 1.5rem)",
    left: "calc(50% - 1.5rem)",
    zIndex: "500",
  },
  socialButtons: {
    position: "absolute",
    width: "100%",
    bottom: "0",
  },

  transition: {
    width: "100%",
    height: "150px",
    background:
      "linear-gradient(0deg, rgba(0,0,0,1) 29%, rgba(255,255,255,0) 100%)",
  },
  emailCapture: {
    position: "absolute",
    zIndex: "700",
    width: "100%",
    bottom: "10%",
    [theme.breakpoints.down("sm")]: {
      padding: "10px 30px",
    },
    color: theme.palette.secondary.main,
  },
}));

const BackgroundVideo = ({ animate }) => {
  const classes = useStyles();
  const [spinner, setSpinner] = useState(true);

  const handleOnVideoLoaded = () => {
    setSpinner(false);
  };


  return (
    <div className={classes.container}>
      {spinner && (
        <CircularProgress
          color="secondary"
          size="3rem"
          className={classes.spinner}
        />
      )}
      <video
        id="video"
        className={classes.backgroundVideo}
        loop
        autoPlay
        muted
        onCanPlayThrough={handleOnVideoLoaded}
      >
        {isMobile ? (
          <source src={MobileVideo} type="video/mp4"></source>
        ) : (
          <source src={DesktopVideo} type="video/mp4"></source>
        )}
      </video>
      <div className={classes.emailCapture}>
        <div
          id="bounce"
          className={
            animate
              ? "animate__animated animate__delay-1s animate__shakeX animate__repeat-2"
              : null
          }
        >
          <CaptureEmail />
        </div>
      </div>
      <div className={classes.socialButtons}>
        <SocialMediaButtonsMobile />
      </div>
    </div>
  );
};

export default BackgroundVideo;

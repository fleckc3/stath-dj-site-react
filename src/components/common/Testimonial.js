import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import RedBull from "../../assets/images/brand-logos/red-bull.png";
import WarnerBros from "../../assets/images/brand-logos/warner-bros.png";
import ThreeD from "../../assets/images/brand-logos/3d-logo.png";
import CasaWhite from "../../assets/images/brand-logos/casa-white.png";
import DeepRoot from "../../assets/images/brand-logos/deeproot.png";
import King from "../../assets/images/brand-logos/king.png";
import Tangina from "../../assets/images/brand-logos/tangina.png";
import Madame from "../../assets/images/brand-logos/madame.png";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    maxWidth: "100%",
    height: "200px",
    display: "flex",
    backgroundColor: "#696969",
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2),
    [theme.breakpoints.down("xl")]: {
      height: "260px",
    },
    [theme.breakpoints.down("md")]: {
      height: "120px",
    },
  },
  img: {
    width: "auto",
    maxHeight: "120px",
    padding: "5px",
    [theme.breakpoints.down("md")]: {
      maxHeight: "50px",
    },
  },
}));

const Testimonial = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Grid item container xs={3} xl={0.67} justifyContent="center">
          <img src={CasaWhite} alt="Club Casa" className={classes.img} />
        </Grid>
        <Grid item container xs={3} xl={0.67} justifyContent="center">
          <img src={King} alt="King Street" className={classes.img} />
        </Grid>

        <Grid item container justifyContent="center" xs={3} xl={0.67}>
          <img src={RedBull} alt="RedBull Logo" className={classes.img} />
        </Grid>
        <Grid item container xs={3} xl={0.67} justifyContent="center">
          <img src={Tangina} alt="Tangina Stone" className={classes.img} />
        </Grid>
        <Grid item container xs={3} xl={0.67} justifyContent="center">
          <img src={Madame} alt="Madame Gandhi" className={classes.img} />
        </Grid>

        <Grid item container justifyContent="center" xs={3} xl={0.67}>
          <img src={WarnerBros} alt="Warner Bros" className={classes.img} />
        </Grid>
        <Grid item container justifyContent="center" xs={3} xl={0.67}>
          <img src={DeepRoot} alt="Deeproot" className={classes.img} />
        </Grid>
        <Grid item container xs={3} xl={0.67} justifyContent="center">
          <img src={ThreeD} alt="3D" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonial;

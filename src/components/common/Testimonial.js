import React from "react";
import { makeStyles } from "@mui/styles";
import { Grid } from "@mui/material";
import RedBull from "../../assets/images/brand-logos/red-bull.png";
import WarnerBros from "../../assets/images/brand-logos/warner-bros.png";

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    maxWidth: "100%",
    height: "100px",
    display: "flex",
    backgroundColor: "#696969",
    paddingStart: "10px",
    [theme.breakpoints.down("md")]: {
      height: "70px",
    },
  },
  img: {
    width: "auto",
    maxHeight: "100px",
    padding: "10px",
    [theme.breakpoints.down("md")]: {
      maxHeight: "40px",
      padding: "5px",
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
        spacing={3}
        justifyContent="space-around"
        alignItems="center"
      >
        <Grid item container xs={2} justifyContent="center">
          <img src={RedBull} alt="RedBull Logo" className={classes.img} />
        </Grid>
        <Grid item container justifyContent="center" xs={2}>
          <img src={WarnerBros} alt="RedBull Logo" className={classes.img} />
        </Grid>
        <Grid item container xs={2} justifyContent="center">
          <img src={RedBull} alt="RedBull Logo" className={classes.img} />
        </Grid>
        <Grid item container justifyContent="center" xs={2}>
          <img src={WarnerBros} alt="RedBull Logo" className={classes.img} />
        </Grid>
        <Grid item container xs={2} justifyContent="center">
          <img src={RedBull} alt="RedBull Logo" className={classes.img} />
        </Grid>
        <Grid item container justifyContent="center" xs={2}>
          <img src={WarnerBros} alt="RedBull Logo" className={classes.img} />
        </Grid>
      </Grid>
    </div>
  );
};

export default Testimonial;

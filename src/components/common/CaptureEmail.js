import { useState } from "react";
import { TextField, Grid, Button } from "@mui/material";
import isEmail from "validator/lib/isEmail";
import { isMobile } from "react-device-detect";
import { makeStyles } from "@mui/styles";
import { useSnackbar } from "notistack";
import Parse from "parse/dist/parse.min.js";

const useStyles = makeStyles((theme) => ({
  emailInput: {
    borderColor: "#ffffff",
  },
  mobile: {
    [theme.breakpoints.up("sm")]: {
      paddingRight: "100px",
    },
  },
  input: {
    "&::placeholder": {
      color: "#39FF14",
    },
  },
  btn: {
    color: "#39FF14",
  },
}));

const CaptureEmail = () => {
  const classes = useStyles();
  const [emailValue, setEmailValue] = useState();
  const [error, setError] = useState(false);
  const { enqueueSnackbar } = useSnackbar();

  const handleChange = (event) => {
    setEmailValue(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!isEmail(emailValue)) {
      setError(true);
    } else {
      const newEmail = new Parse.Object("PartyList");
      newEmail.set("email", emailValue);

      try {
        const result = await newEmail.save();
        enqueueSnackbar("Groovy, see ya for a party soon!", {
          variant: "warning",
        });
      } catch (error) {
        console.error("Error while creating PartyList: ", error);
        enqueueSnackbar("There was an error submitting your contact details", {
          variant: "error",
        });
      }
    }
  };

  return (
    <div className={classes.mobile}>
      <form onSubmit={handleSubmit}>
        <Grid container justifyContent={isMobile ? "center" : "flex-end"}>
          <Grid item container xs={12} sm={2}>
            <Grid item xs={12}>
              <TextField
                label="Wanna party?"
                color="secondary"
                variant="outlined"
                placeholder="Enter your email..."
                helperText={error ? "Enter valid email" : null}
                value={emailValue}
                className={classes.emailInput}
                sx={{ input: { color: "white" } }}
                onChange={handleChange}
                fullWidth
                error={error}
                focused
                InputLabelProps={{
                  style: { color: "#ffffff" },
                }}
              />
            </Grid>
            <Grid item container xs={12} justifyContent="flex-end">
              <Button type="submit" sx={{ color: "#00CC99" }}>
                Submit
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default CaptureEmail;

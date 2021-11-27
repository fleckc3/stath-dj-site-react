import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContent,
  DialogContentText,
  Grid,
  TextField,
  Link,
  Divider,
} from "@mui/material";
import { makeStyles } from "@mui/styles";
import isEmail from "validator/lib/isEmail";
import isMobilePhone from "validator/lib/isMobilePhone";
import { isMobile } from "react-device-detect";
import { useSnackbar } from "notistack";
import { useState } from "react";
import Parse from "parse/dist/parse.min.js";

const useStyles = makeStyles((theme) => ({
  submitBtn: {
    backgroundColor: "#000000",
    color: "#ffffff",
    "&:hover": {
      backgroundColor: "#00CC99 !important",
      color: "#000000",
    },
  },
  link: {
    "&:hover": {
      color: "#00CC99",
    },
  },
}));

function ContactFormDialog({ close }) {
  const classes = useStyles();
  const { enqueueSnackbar } = useSnackbar();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [error, setError] = useState({
    email: false,
    phone: false,
  });

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!event.target.value) {
      setError((prevState) => ({
        ...prevState,
        email: false,
      }));
    }
  };
  const handlePhoneChange = (event) => {
    setPhone(event.target.value);
    if (!event.target.value) {
      setError((prevState) => ({
        ...prevState,
        phone: false,
      }));
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newContact = new Parse.Object("PartyList");
    if (email && !isEmail(email)) {
      setError((prevState) => ({
        ...prevState,
        email: true,
      }));
    } else if (email) {
      newContact.set("email", email);
    }
    if (phone && !isMobilePhone(phone)) {
      setError((prevState) => ({
        ...prevState,
        phone: true,
      }));
    } else if (phone) {
      newContact.set("phoneNumber", phone);
    }

    if (!error.email && !error.phone) {
      try {
        const result = await newContact.save();
        enqueueSnackbar("Groovy, see ya for a party soon!", {
          variant: "warning",
        });
        close();
      } catch (error) {
        console.error("Error while creating PartyList: ", error);
        enqueueSnackbar("There was an error submitting your contact details", {
          variant: "error",
        });
      }
    }
  };
  const handleOpenEmail = (event) => {
    event.preventDefault();
    window.open("mailto:ChrisStathMusic@gmail.com");
  };

  return (
    <Dialog
      open
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: "#ffffff",
        },
      }}
    >
      <form onSubmit={handleSubmit}>
        <DialogTitle sx={{ textAlign: "center" }}>Contact Chris</DialogTitle>
        <Divider variant="middle" />

        <DialogContent>
          <Grid container spacing={3} justifyContent="center">
            <Grid item xs={12}>
              <DialogContentText sx={{ textAlign: "center" }}>
                Leave your contact details to find out about music updates and
                parties!
              </DialogContentText>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                label="Email"
                variant="outlined"
                value={email || ''}
                helperText={error.email ? "Enter valid email" : null}
                fullWidth
                onChange={handleEmailChange}
                error={error.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                label="Phone"
                variant="outlined"
                value={phone || ''}
                helperText={error.phone ? "Enter valid phone number" : null}
                fullWidth
                onChange={handlePhoneChange}
                error={error.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <DialogContentText sx={{ textAlign: "center" }}>
                Or shoot me an email for inquiries!
              </DialogContentText>
            </Grid>
            <Grid item xs={12} textAlign="center">
              <Link
                component="button"
                variant={isMobile ? "h6" : "h5"}
                className={classes.link}
                onClick={handleOpenEmail}
              >
                ChrisStathMusic@gmail.com
              </Link>
            </Grid>
          </Grid>
        </DialogContent>
        <DialogActions>
          <Button onClick={close}>Cancel</Button>
          <Button
            variant="contained"
            type="submit"
            className={classes.submitBtn}
          >
            Submit
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}

export default ContactFormDialog;

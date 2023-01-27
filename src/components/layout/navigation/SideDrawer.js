import { Box, Drawer, List, ListItem, ListItemText, Link } from "@mui/material";
import DrawerImage from "../../../assets/images/drawer-image-01.png";
import { makeStyles } from "@mui/styles";
import Parse from "parse/dist/parse.min.js";

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: "250px",
  },
  paper: {
    background: "#808080",
  },
  link: {
    "&:hover": {
      color: "#00CC99",
    },
  },
  drawerImage: {
    position: "absolute",
    bottom: 0,
  },
}));

function SideDrawer({
  open,
  onToggleDrawer,
  onAnimate,
  resetAnimate,
  onOpenDiscography,
}) {
  const classes = useStyles();

  const handlePdfDownload = async () => {
    const newWindow = window.open();
    const Files = Parse.Object.extend("Files");
    const query = new Parse.Query(Files);
    try {
      const results = await query.find();
      for (const object of results) {
        const fileName = await object.get("fileName");
        newWindow.location = fileName._url;
      }
    } catch (error) {
      console.error("Error while fetching Files", error);
    }
  };

  const handlePartyClick = () => {
    onAnimate();
    onToggleDrawer();
  };

  return (
    <Drawer
      variant="temporary"
      anchor="right"
      PaperProps={{
        sx: {
          backgroundColor: "#000000",
        },
      }}
      open={open}
      ModalProps={{ onBackdropClick: onToggleDrawer }}
    >
      <Box className={classes.drawer}>
        <List>
          <ListItem>
            <ListItemText>
              <Link
                component="button"
                variant="h5"
                onClick={handlePdfDownload}
                underline="none"
                className={classes.link}
                color="#ffffff"
              >
                Press Kit
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link
                component="button"
                variant="h5"
                href="#"
                underline="none"
                className={classes.link}
                onClick={onOpenDiscography}
                color="#ffffff"
              >
                Discography
              </Link>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Link
                variant="h5"
                href="#"
                underline="none"
                className={classes.link}
                onClick={handlePartyClick}
                color="#ffffff"
              >
                Wanna Party?
              </Link>
            </ListItemText>
          </ListItem>
        </List>
        <img
          src={DrawerImage}
          alt="Chris DJing"
          className={classes.drawerImage}
        />
      </Box>
    </Drawer>
  );
}

export default SideDrawer;

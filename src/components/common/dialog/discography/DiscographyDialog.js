import {
  Button,
  Dialog,
  DialogTitle,
  DialogActions,
  DialogContentText,
  Divider,
} from "@mui/material";

function DiscographyDialog({ close }) {
  return (
    <Dialog
      open
      maxWidth="md"
      fullWidth
      PaperProps={{
        sx: {
          background: "#808080",
        },
      }}
    >
      <DialogTitle sx={{ textAlign: "center", color: "white" }}>Discography</DialogTitle>
      <Divider variant="middle" color="white" />
      <DialogContentText textAlign="center" variant="body1" color="white">
          Coming soon!
      </DialogContentText>
      <DialogActions>
        <Button color="primary" onClick={close}>Close</Button>
      </DialogActions>
    </Dialog>
  );
}

export default DiscographyDialog;

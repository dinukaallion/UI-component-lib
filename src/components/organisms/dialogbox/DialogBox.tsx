import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import AlertBoxProps from "./DialogBoxProps";

const AlertDialog: React.FC<AlertBoxProps> = ({
  title,
  buttonTitle,
  description,
  buttonFailMessage,
  buttonSucessMessage,
  buttonVariant,
  buttonColor
}) => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button color={buttonColor} variant={buttonVariant} onClick={handleClickOpen}>
        {buttonTitle}
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {description}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button color={buttonColor} variant={buttonVariant} onClick={handleClose}>{buttonFailMessage}</Button>
          <Button color={buttonColor} variant={buttonVariant} onClick={handleClose} autoFocus>
            {buttonSucessMessage}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default AlertDialog;

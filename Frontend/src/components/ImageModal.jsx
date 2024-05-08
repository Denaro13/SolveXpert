import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "75%",
  height: "75%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 2,
};
const styleBtn = {
  fontSize: "10px",
};
const ImageModal = ({ image }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button sx={styleBtn} onClick={handleOpen}>
        View Question
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="h-full w-ful flex items-center justify-center">
            <img
              src={image}
              className="h-full w--full object-contain"
              alt="question image"
            />
          </div>
        </Box>
      </Modal>
    </div>
  );
};
export default ImageModal;

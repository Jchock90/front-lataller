import React, { useState } from "react";
import { MuiModal, MuiModalContent } from "@mui/material";

const Modal = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <button onClick={handleOpen}>Abrir modal</button>
      {open && (
        <MuiModal
          open={open}
          onClose={handleClose}
          style={{
            width: 300,
            height: 200,
          }}
        >
          <MuiModalContent>
            Contenido del modal
          </MuiModalContent>
        </MuiModal>
      )}
    </div>
  );
};

export default Modal;

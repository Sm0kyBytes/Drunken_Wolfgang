import "/src/App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

function ModalJoinRoom(prop) {
  const style = {
    position: "absolute",
    color: "white",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#111",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
  };
  return (
    <Modal
      open={prop.open}
      onClose={prop.handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Join Room
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <input
            type="text"
            placeholder="Room ID"
            value={""}
            onChange={() => {}}
          />
          <input
            type="text"
            placeholder="Player Name"
            value={""}
            onChange={() => {}}
          />
          <Button sx={{ color: "white" }} variant="text" onClick={() => {}}>
            JOIN
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalJoinRoom;

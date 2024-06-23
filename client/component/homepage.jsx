import "/src/App.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import ModalJoinRoom from "./modal-join-room";

function HomePage() {
  const nevigate = useNavigate();
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className="body-homepage">
      <img src="./image/logo_app.jpg" />
      <Button variant="text" onClick={() => nevigate("/create")}>
        Create Room
      </Button>
      <Button variant="text" onClick={handleOpen}>
        Join Room
      </Button>
      <ModalJoinRoom
        open={open}
        setOpen={setOpen}
        handleOpen={handleOpen}
        handleClose={handleClose}
      />
    </div>
  );
}
export default HomePage;

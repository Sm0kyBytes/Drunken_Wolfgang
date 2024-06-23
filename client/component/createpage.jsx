import "/src/App.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import ModalSetCharacter from "./modal-seting-caractor";
import axios from "axios";

function CreateGamePage() {
  const [characters, setCharacter] = useState([
    "Seer",
    "Wolf",
    "Villager",
    "Villager",
  ]);
  const [adminPassword, setAdminPassword] = useState("");
  const [playerCount, setPlayerCount] = useState(4);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleOnSubmit = () => {
    if (adminPassword.length < 4) {
      alert("Admin Password must be numbers or letters at least 4.");
    } else if (characters.length != playerCount) {
      alert("Create incomplete!!! Some character hasn't select.");
    } else {
      const postBody = { characters, playerCount, adminPassword };
      postRoomInfo(postBody);
    }
  };
  const changeAdminPassword = (event) => {
    setAdminPassword(event.target.value);
  };
  const changePlayerCount = (event) => {
    setPlayerCount(event.target.value);
  };
  // async function postRoomInfo(postBody) {
  //   const createRoom = await axios.post(
  //     "https://createroom-ukyybhyuhq-as.a.run.app",
  //     postBody
  //   );
  // }
  useEffect(() => {}, [adminPassword, playerCount, characters]);
  return (
    <div className="body-createpage">
      <form className="container-setRoomInfo">
        <label className="adminPassword">
          <a>AdminPassword: </a>
          <input
            type="text"
            className="input"
            placeholder="At lease 4 letters"
            onChange={changeAdminPassword}
          />
        </label>
        <label className="players">
          <a>Players: </a>
          <input
            type="number"
            className="input"
            min="4"
            max="15"
            step="1"
            placeholder="4 - 15 players "
            onChange={changePlayerCount}
          />
        </label>
        <Button sx={{ color: "white" }} onClick={handleOpen}>
          Set Characters
        </Button>
        <Button sx={{ color: "white" }} onClick={handleOnSubmit}>
          Create Room
        </Button>
        <ModalSetCharacter
          open={open}
          setOpen={setOpen}
          handleOpen={handleOpen}
          handleClose={handleClose}
          setCharacter={setCharacter}
          characters={characters}
          playerCount={playerCount}
        />
      </form>
    </div>
  );
}
export default CreateGamePage;

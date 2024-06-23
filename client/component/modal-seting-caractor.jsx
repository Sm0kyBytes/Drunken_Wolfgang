import "/src/App.css";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { maxHeight } from "@mui/system";

function ModalSetCharacter(prop) {
  const rolls = ["Wolf", "Seer", "Villager"];
  const newCharacters = prop.characters;
  const createArrayWithPlayers = (players) => {
    const resultArray = [];
    for (let i = 0; i < players; i++) {
      resultArray.push(i);
    }
    return resultArray;
  };

  const handleclick = () => {
    if (newCharacters.length != prop.playerCount) {
      alert("Selected incomplete!!! Some character hasn't select.");
    } else {
      prop.setCharacter(newCharacters);
      prop.handleClose();
    }
  };
  const style = {
    position: "absolute",
    color: "white",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    maxHeight: 400,
    bgcolor: "#111",
    border: "2px solid #fff",
    boxShadow: 24,
    p: 4,
    overflow: "auto",
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
          Select Characters
        </Typography>
        <Box
          component="form"
          sx={{
            "& > :not(style)": {
              m: 1,
              width: "25ch",
              height: "30px",
            },
          }}
          noValidate
          autoComplete="off"
        >
          {createArrayWithPlayers(prop.playerCount).map((number) => {
            return (
              <select
                className="selectCharacter"
                onChange={(event) => {
                  newCharacters[number] = event.target.value;
                }}
              >
                <option disabled selected>
                  {newCharacters[number]
                    ? newCharacters[number]
                    : `Select character ${number + 1}`}
                </option>
                {rolls.map((char, index) => {
                  return (
                    <option value={char} key={`char_id${index}`}>
                      {char}
                    </option>
                  );
                })}
              </select>
            );
          })}

          <Button sx={{ color: "white" }} variant="text" onClick={handleclick}>
            SET
          </Button>
        </Box>
      </Box>
    </Modal>
  );
}

export default ModalSetCharacter;

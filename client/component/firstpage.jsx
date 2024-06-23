import "/src/App.css";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
function FirstAppPage() {
  const nevigate = useNavigate();
  return (
    <div className="body-firstpage">
      <div className="content-container">
        <img src="./image/logo_app.jpg" />
        <div className="title">Drunken Wolfgang</div>
        <Button
          variant="text"
          onClick={() => {
            nevigate("/home");
          }}
        >
          PLAY
        </Button>
      </div>
    </div>
  );
}
export default FirstAppPage;

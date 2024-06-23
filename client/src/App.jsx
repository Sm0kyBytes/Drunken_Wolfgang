import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "../component/homepage";
import CreateGamePage from "../component/createpage";
import FirstAppPage from "../component/firstpage";
function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<FirstAppPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/create" element={<CreateGamePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

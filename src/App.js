import "./App.css";
import LoginPage from "./Components/LoginPage";
import { Route, Routes } from "react-router-dom";
import ViewPage from "./Components/ViewPage";
import HomePage from "./Components/HomePage";



function App() {
  
  return (
    <div className="App">
      
      <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="homepage" element={<HomePage />} />
          <Route path="viewpage" element={<ViewPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;

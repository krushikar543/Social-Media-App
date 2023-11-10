import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "display/homePage";
import LoginPage from "display/loginPage";
import ProfilePage from "display/profilePage";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<LoginPage />} />
          <Route path="/home" element = {<HomePage />} />
          <Route path="/profile/:id" element = {<ProfilePage />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
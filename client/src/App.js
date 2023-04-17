import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import Nav from "./components/nav/nav";
import LandingPage from "./components/landingpage/landingpage.jsx";
import Home from "./components/home/home";
import Form from "./components/form/form";
import Details from "./components/details/details";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <div>{location.pathname !== "/" && <Nav />}</div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/details/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
